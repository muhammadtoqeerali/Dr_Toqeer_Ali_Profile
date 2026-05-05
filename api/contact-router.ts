import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { contactMessages } from "../db/schema";
import { getDb } from "./queries/connection";

export const contactRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1).max(255),
        email: z.string().email().max(320),
        subject: z.string().max(128).optional(),
        message: z.string().min(1),
        userId: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.insert(contactMessages).values({
        name: input.name,
        email: input.email,
        subject: input.subject || null,
        message: input.message,
        userId: input.userId || null,
      });
      return { success: true };
    }),
});
