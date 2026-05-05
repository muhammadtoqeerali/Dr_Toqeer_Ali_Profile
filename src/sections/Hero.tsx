import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contactDetails = [
  { label: 'Email', value: 'touqeermalik6677@gmail.com', href: 'mailto:touqeermalik6677@gmail.com' },
  { label: 'Phone', value: '(+39) 375 617 3106', href: 'tel:+393756173106' },
  { label: 'Location', value: 'Verona, Italy', href: '#' },
]

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'ORCID', url: 'https://orcid.org' },
  { label: 'GitHub', url: 'https://github.com/muhammadtoqeerali' },
  { label: 'Kaggle', url: 'https://kaggle.com' },
  { label: 'YouTube', url: 'https://youtube.com/@Drtoqeerali' },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: '#0f172a',
        padding: '120px clamp(20px, 4vw, 60px)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 30%, rgba(13,148,136,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(56,189,248,0.04) 0%, transparent 50%)',
        }}
      />

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.24em',
              color: 'rgba(255,255,255,0.6)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Get in touch
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            Contact
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            I am open to research collaborations, academic positions, and industry partnerships.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            marginBottom: '60px',
          }}
        >
          {contactDetails.map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                padding: '28px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.15)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0d9488'
                e.currentTarget.style.backgroundColor = 'rgba(13,148,136,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: '#0d9488',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#ffffff',
                  letterSpacing: '0.01em',
                }}
              >
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Online Profiles
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                  padding: '8px 16px',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0d9488'
                  e.currentTarget.style.borderColor = '#0d9488'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
