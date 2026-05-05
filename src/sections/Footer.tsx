export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #000000',
        padding: '80px clamp(20px, 4vw, 60px) 0',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          paddingBottom: '80px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            LOCATION
          </p>
          <p style={{ fontSize: '14px', color: '#666666', lineHeight: 1.6, marginBottom: '12px' }}>
            Verona, Italy
          </p>
          <p style={{ fontSize: '13px', color: '#888888' }}>
            Department of Engineering for Innovative Medicine (DIMI)
            <br />
            University of Verona
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            CONTACT
          </p>
          <p style={{ fontSize: '14px', color: '#666666', lineHeight: 2 }}>
            touqeermalik6677@gmail.com
            <br />
            (+39) 375 617 3106
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            PROFILES
          </p>
          <p style={{ fontSize: '14px', color: '#666666', lineHeight: 2 }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', textDecoration: 'none' }}>LinkedIn</a>
            <br />
            <a href="https://orcid.org" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', textDecoration: 'none' }}>ORCID</a>
            <br />
            <a href="https://github.com/muhammadtoqeerali" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', textDecoration: 'none' }}>GitHub</a>
            <br />
            <a href="https://youtube.com/@Drtoqeerali" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', textDecoration: 'none' }}>YouTube</a>
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            RESOURCES
          </p>
          <p style={{ fontSize: '14px', color: '#666666', lineHeight: 2 }}>
            <a href="https://zenodo.org/records/18346755" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', textDecoration: 'none' }}>UNIVRFall Dataset</a>
            <br />
            <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer" style={{ color: '#666666', textDecoration: 'none' }}>Kaggle Notebooks</a>
          </p>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0.85,
          paddingBottom: '0',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: 'clamp(80px, 18vw, 320px)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            color: '#000000',
            whiteSpace: 'nowrap',
            transform: 'translateY(15%)',
            userSelect: 'none',
          }}
        >
          DR. ALI
        </span>
      </div>
    </footer>
  )
}
