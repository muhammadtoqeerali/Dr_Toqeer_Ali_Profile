import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'ORCID', url: 'https://orcid.org' },
  { label: 'GitHub', url: 'https://github.com/muhammadtoqeerali' },
  { label: 'Kaggle', url: 'https://kaggle.com' },
  { label: 'YouTube', url: 'https://youtube.com/@Drtoqeerali' },
]

const expertiseTags = [
  'Machine Learning',
  'Deep Learning',
  'Robotics',
  'Data Analysis',
  'Embedded AI',
  'Wearable Sensing',
]

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: 'power3.out',
        delay: 0.4,
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero-top"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        backgroundColor: '#0f172a',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(13,148,136,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(56,189,248,0.05) 0%, transparent 50%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(15,23,42,0.6) 0%, rgba(15,23,42,0.2) 35%, rgba(15,23,42,0.6) 100%)',
        }}
      />

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '28px',
          padding: '0 clamp(32px, 4.5vw, 72px)',
        }}
      >
        <span
          style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.28em',
            color: 'rgba(13,148,136,0.9)',
            textTransform: 'uppercase',
          }}
        >
          Machine Learning / Deep Learning / Robotics / Data Analysis
        </span>

        <h1
          style={{
            fontSize: 'clamp(44px, 7vw, 108px)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 1.02,
            color: '#ffffff',
            maxWidth: '920px',
            textShadow: '0 2px 24px rgba(0,0,0,0.25)',
          }}
        >
          Dr. Muhammad
          <br />
          Toqeer Ali
        </h1>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', maxWidth: '700px' }}>
          {expertiseTags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.85)',
                padding: '8px 16px',
                border: '1px solid rgba(255,255,255,0.25)',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.88)',
            maxWidth: '620px',
          }}
        >
          PhD in Computer Science from the University of Verona. Researcher in
          lightweight deep learning for wearable systems, generative modelling
          for sensor data, physics-informed digital twin simulation, robotics, and
          occupational safety analytics.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: hovered ? '#0f172a' : '#ffffff',
              backgroundColor: hovered ? '#0d9488' : 'transparent',
              border: '1px solid #0d9488',
              padding: '16px 36px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              fontFamily: '"Helvetica Neue", sans-serif',
            }}
          >
            Get in Touch
          </button>
          <a
            href="#publications"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: '#ffffff',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '16px 8px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              fontFamily: '"Helvetica Neue", sans-serif',
              textDecoration: 'underline',
              textUnderlineOffset: '6px',
            }}
          >
            View Publications
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '24px',
            flexWrap: 'wrap',
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px',
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0d9488')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
