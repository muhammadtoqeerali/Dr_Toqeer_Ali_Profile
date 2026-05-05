import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { projects } from '../data/projects'

interface ProjectDetailProps {
  projectId: string
  onBack: () => void
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projects.find((r) => r.id === projectId)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.from(contentRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
    })
  }, [])

  if (!project) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center' }}>
        <p>Project not found.</p>
        <button onClick={onBack} style={{ marginTop: '20px', cursor: 'pointer' }}>
          Back
        </button>
      </div>
    )
  }

  return (
    <div
      ref={contentRef}
      style={{
        paddingTop: '100px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px clamp(20px, 4vw, 60px)' }}>
        <button
          onClick={onBack}
          style={{
            fontSize: '13px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '40px',
            color: '#000000',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          }}
        >
          Back to Projects
        </button>

        <div style={{ marginBottom: '40px' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#666666',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            {project.id} / {project.category} / {project.year}
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#000000',
              marginBottom: '16px',
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(18px, 2vw, 24px)',
              color: '#444444',
              lineHeight: 1.4,
              maxWidth: '700px',
            }}
          >
            {project.tagline}
          </p>
        </div>

        <div
          style={{
            width: '100%',
            height: 'clamp(300px, 40vw, 540px)',
            backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '48px',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: '#000000',
              }}
            >
              Overview
            </h3>
            {project.description.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#444444',
                  marginBottom: '16px',
                }}
              >
                {p}
              </p>
            ))}
          </div>

          <div>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                color: '#000000',
              }}
            >
              Key Features
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.features.map((f, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#444444',
                    padding: '10px 0',
                    borderBottom: '1px solid #e5e5e5',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <span style={{ color: '#0d9488', fontSize: '18px', lineHeight: 1 }}>/</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                border: '1px solid #000000',
                fontSize: '13px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#000000',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#000000'
              }}
            >
              {link.label} /
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
