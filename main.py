
from __future__ import annotations

import os
import decimal
from decimal import Decimal
from typing import Any, Dict
from dotenv import load_dotenv
load_dotenv()  # pulls variables from .env into os.environ
from binance.client import Client
from binance.exceptions import BinanceAPIException
from flask import Flask, jsonify, request, abort

decimal.getcontext().prec = 16  # high-precision qty maths

###############################################################################
# Binance helper
###############################################################################
def create_client() -> Client:
    """Return a python-binance Client configured for live or test-net."""
    api_key     = os.environ["BINANCE_API_KEY"]
    api_secret  = os.environ["BINANCE_API_SECRET"]
    testnet     = os.getenv("BINANCE_TESTNET", "false").lower() == "true"

    client = Client(api_key, api_secret, testnet=testnet)
    if testnet:
        # override REST base URL manually (python-binance quirk)
        client.API_URL = "https://testnet.binance.vision/api"
    return client


###############################################################################
# Quantity helpers
###############################################################################
def quote_balance(client: Client, quote_asset: str) -> Decimal:
    """
    Return free balance of `quote_asset` (e.g. USDT) as Decimal.
    """
    bal = client.get_asset_balance(asset=quote_asset)  # type: ignore
    return Decimal(bal["free"])


def calc_qty_from_pct(
    client: Client,
    symbol: str,
    side: str,
    qty_perc: Decimal,
) -> Decimal:
    """
    Compute absolute quantity based on `qty_perc` of available balance.

    For BUY: use quote asset (e.g. USDT);  
    For SELL: use base asset (e.g. BTC).
    """
    base_asset, quote_asset = symbol[:-4], symbol[-4:]  # crude split
    if side.upper() == "BUY":
        free_quote = quote_balance(client, quote_asset)
        spend = free_quote * qty_perc / Decimal(100)
        price = Decimal(client.get_symbol_ticker(symbol=symbol)["price"])  # type: ignore
        qty = spend / price
    else:  # SELL
        bal = client.get_asset_balance(asset=base_asset)  # type: ignore
        qty = Decimal(bal["free"]) * qty_perc / Decimal(100)
    return qty.quantize(Decimal("0.000001"))  # 6-dp default


###############################################################################
# Flask app
###############################################################################
app = Flask(__name__)
client = create_client()
AUTH_TOKEN = os.getenv("TV_BEARER_TOKEN")  # optional


def authorised(req) -> None:
    """
    Enforce bearer token if configured.
    """
    if AUTH_TOKEN:
        token = req.headers.get("Authorization", "").removeprefix("Bearer ").strip()
        if token != AUTH_TOKEN:
            abort(401, "unauthorised")


@app.route("/health", methods=["GET"])
def health():
    return "ok", 200


@app.route("/tv", methods=["POST"])
def tv_webhook():
    authorised(request)
    if not request.is_json:
        abort(400, "payload must be JSON")

    payload: Dict[str, Any] = request.get_json(force=True)

    try:
        symbol: str = payload["symbol"].upper().strip()
        side: str = payload["side"].upper().strip()  # BUY / SELL
        order_type: str = payload.get("order_type", "MARKET").upper()
    except KeyError as exc:
        abort(400, f"missing field {exc!s}")

    # --- quantity -----------------------------------------------------------
    if "qty" in payload:
        qty = Decimal(str(payload["qty"]))
    elif "qty_perc" in payload:
        qty_perc = Decimal(str(payload["qty_perc"]))
        qty = calc_qty_from_pct(client, symbol, side, qty_perc)
    else:
        abort(400, "must provide 'qty' or 'qty_perc'")

    params = {
        "symbol": symbol,
        "side": side,
        "type": order_type,
        "quantity": float(qty),
    }

    # --- send order ---------------------------------------------------------
    try:
        order = client.create_order(**params)  # type: ignore
    except BinanceAPIException as err:
        abort(502, f"binance error: {err.message}")
    except Exception as err:  # noqa: BLE001
        abort(500, f"unhandled error: {err}")

    return jsonify({"orderId": order["orderId"], "status": order["status"]})


###############################################################################
# Entry-point
###############################################################################
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000, debug=False)
