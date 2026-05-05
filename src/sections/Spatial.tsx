import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'ORCID', url: 'https://orcid.org' },
  { label: 'GitHub', url: 'https://github.com/muhammadtoqeerali' },
  { label: 'Kaggle', url: 'https://kaggle.com' },
  { label: 'YouTube', url: 'https://youtube.com/@Drtoqeerali' },
]

const expertiseTags = [
  'Machine Learning',
  'Artificial Intelligence',
  'Embedded AI',
  'Wearable Sensing',
  'Digital Twin',
  'Robotics',
  'Data Analytics',
]

const leadText =
  'PhD in Computer Science with expertise in machine learning, artificial intelligence, and deep learning for wearable sensing, embedded systems, and healthcare technologies.'

const summaryText =
  'My work focuses on designing end-to-end AI and ML pipelines for time-series and computer-vision tasks, spanning sensor data collection, synthetic data generation, feature engineering, model development, and deployment on resource-constrained platforms. I also work across IoT systems, computational biomechanics, and interdisciplinary research, with contributions including peer-reviewed publications, open research datasets, software prototypes, and university-level teaching.'

const ongoingText =
  'Currently working on an ongoing physics-based digital twin project for generating realistic accelerometer and gyroscope signals from modelled human fall trajectories, supporting synthetic IMU data generation in collaboration with the University of Verona.'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [hovered, setHovered] = useState<'contact' | 'publications' | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 34,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.25,
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '140px clamp(20px, 4vw, 60px) 90px',
        background:
          'linear-gradient(90deg, #071326 0%, #0a1f3f 48%, #071326 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at center, rgba(13,148,136,0.14), transparent 52%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.14,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '22px',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#0d9488',
            lineHeight: 1.8,
          }}
        >
          Machine Learning / Embedded AI / Wearable Sensing / Digital Twin / Robotics / Data Analytics
        </div>

        <h1
          style={{
            margin: 0,
            color: '#ffffff',
            fontSize: 'clamp(64px, 9vw, 110px)',
            lineHeight: 0.95,
            fontWeight: 400,
            letterSpacing: '-0.045em',
          }}
        >
          Dr. T. Ali
        </h1>

        <p
          style={{
            maxWidth: '780px',
            margin: 0,
            color: '#ffffff',
            fontSize: 'clamp(22px, 2.1vw, 30px)',
            lineHeight: 1.45,
            fontWeight: 300,
          }}
        >
          {leadText}
        </p>

        <p
          style={{
            maxWidth: '760px',
            margin: 0,
            color: 'rgba(255,255,255,0.82)',
            fontSize: 'clamp(16px, 1.25vw, 19px)',
            lineHeight: 1.95,
          }}
        >
          {summaryText}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            maxWidth: '760px',
            marginTop: '4px',
          }}
        >
          {expertiseTags.map((tag) => (
            <span
              key={tag}
              style={{
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#ffffff',
                padding: '11px 18px',
                fontSize: '12px',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                backgroundColor: 'rgba(255,255,255,0.03)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: '760px',
            border: '1px solid rgba(13,148,136,0.45)',
            backgroundColor: 'rgba(255,255,255,0.04)',
            padding: '22px 24px',
            marginTop: '6px',
          }}
        >
          <div
            style={{
              color: '#0d9488',
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            Current research focus · ongoing
          </div>

          <p
            style={{
              margin: 0,
              color: 'rgba(255,255,255,0.82)',
              fontSize: '16px',
              lineHeight: 1.8,
            }}
          >
            {ongoingText}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '6px',
          }}
        >
          <button
            onClick={() => scrollToSection('#contact')}
            onMouseEnter={() => setHovered('contact')}
            onMouseLeave={() => setHovered(null)}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: hovered === 'contact' ? '#0f172a' : '#ffffff',
              backgroundColor:
                hovered === 'contact' ? '#0d9488' : 'transparent',
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

          <button
            onClick={() => scrollToSection('#publications')}
            onMouseEnter={() => setHovered('publications')}
            onMouseLeave={() => setHovered(null)}
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
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '18px',
            marginTop: '6px',
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '12px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0d9488')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
