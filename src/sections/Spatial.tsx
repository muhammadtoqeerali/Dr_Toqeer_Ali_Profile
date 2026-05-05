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

const researchAreas = [
  'Machine Learning',
  'Embedded AI',
  'Wearable Sensing',
  'Digital Twin',
  'Robotics',
  'Data Analytics',
]

const profilePoints = [
  'End-to-end AI and ML pipelines for time-series and computer-vision tasks.',
  'Wearable sensing, edge computing, IoT systems, and healthcare technologies.',
  'Synthetic sensor data generation through generative modelling and physics-informed simulation.',
  'Efficient deployment on embedded and resource-constrained platforms.',
]

const collaborators = [
  {
    name: 'Prof. Graziano Pravadelli',
    role: 'PhD Supervisor · University of Verona',
  },
  {
    name: 'Prof. Florenc Demrozi',
    role: 'PhD Co-supervisor · University of Stavanger',
  },
  {
    name: 'Dr. Fadi Al Machot',
    role: 'International Collaborator · NMBU, Norway',
  },
  {
    name: 'Prof. Iacopo Tamellin',
    role: 'Digital Twin Collaborator · DIMI, University of Verona',
  },
]

const researchPartners = [
  'ICE Lab Verona',
  'Protechto s.r.l.',
]

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
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2,
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="profile-hero">
      <div className="profile-hero__glow" />
      <div className="profile-hero__grid" />

      <div ref={contentRef} className="profile-hero__inner">
        <div className="profile-hero__left">
          <div className="profile-hero__eyebrow">
            Machine Learning · Embedded AI · Wearable Sensing
          </div>

          <h1 className="profile-hero__title">
            Dr. Muhammad
            <span>Toqeer Ali</span>
          </h1>

          <p className="profile-hero__lead">
            I design intelligent, deployable AI systems for wearable sensing,
            embedded platforms, healthcare technologies, and real-world safety
            applications.
          </p>

          <p className="profile-hero__summary">
            PhD in Computer Science from the University of Verona, working
            across machine learning, deep learning, sensor data analytics,
            computational biomechanics, IoT integration, robotics, and
            interdisciplinary applied research.
          </p>

          <div className="profile-hero__actions">
            <button
              onClick={() => scrollToSection('#contact')}
              onMouseEnter={() => setHovered('contact')}
              onMouseLeave={() => setHovered(null)}
              className={hovered === 'contact' ? 'is-hovered' : ''}
            >
              Get in Touch
            </button>

            <button
              onClick={() => scrollToSection('#publications')}
              onMouseEnter={() => setHovered('publications')}
              onMouseLeave={() => setHovered(null)}
              className="profile-hero__link-button"
            >
              View Publications
            </button>
          </div>

          <div className="profile-hero__socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="profile-hero__panel">
          <div className="profile-hero__panel-label">Research Profile</div>

          <div className="profile-hero__panel-title">
            AI for wearable, embedded, and sensor-driven systems
          </div>

          <div className="profile-hero__points">
            {profilePoints.map((point) => (
              <div key={point} className="profile-hero__point">
                <span />
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className="profile-hero__focus">
            <div>Current focus · ongoing</div>
            <p>
              Developing a physics-based digital twin approach for generating
              realistic accelerometer and gyroscope signals from modelled human
              fall trajectories.
            </p>
          </div>

          <div className="profile-hero__collaborations">
            <div className="profile-hero__collab-label">
              Current collaborators
            </div>

            <div className="profile-hero__collab-list">
              {collaborators.map((person) => (
                <div key={person.name} className="profile-hero__collab-item">
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </div>
              ))}
            </div>

            <div className="profile-hero__partners">
              <span>Research partners</span>
              <div>
                {researchPartners.map((partner) => (
                  <em key={partner}>{partner}</em>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="profile-hero__areas">
          {researchAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
