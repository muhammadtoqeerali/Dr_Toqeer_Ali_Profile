import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const honors = [
  {
    title: 'DATE Best Paper Award, Track A: Application Design',
    institution: 'IEEE Design, Automation and Test in Europe Conference (DATE)',
    period: 'Mar 2025',
    location: 'Antwerp, Belgium',
    detail: 'Awarded for "A Lightweight CNN for Real-Time Pre-Impact Fall Detection" (Turetta, Ali, Demrozi, Pravadelli).',
  },
  {
    title: 'PNRR Innovative PhD Scholarship',
    institution: 'Italian Ministry of University and Research (MUR)',
    period: 'Dec 2022',
    location: 'Italy',
    detail: 'Competitive, fully-funded industry-partnered PhD scholarship under the Italian National Recovery and Resilience Plan (PNRR), NextGenerationEU.',
  },
  {
    title: 'International PhD Mobility Grant',
    institution: 'University of Verona',
    period: 'Mar – Aug 2025',
    location: 'Verona, Italy',
    detail: 'Competitive grant supporting a six-month research visit to the Norwegian University of Life Sciences (NMBU), As, Norway, hosted by Dr. Fadi Al Machot\'s research group.',
  },
  {
    title: 'Gold Medal, Highest CGPA in MSc Programme',
    institution: 'HITEC University',
    period: '2020',
    location: 'Taxila, Pakistan',
    detail: 'Awarded for achieving the highest cumulative GPA (3.80/4.00, 94.59%) in the MSc in Computer Engineering programme.',
  },
]

const service = [
  {
    title: 'Peer Reviewer',
    institution: 'Discover Artificial Intelligence, Springer Nature',
    period: 'Apr 2026',
    detail: 'Invited to review manuscripts submitted to Discover Artificial Intelligence. Certificate of recognition issued by Springer Nature.',
  },
]

const conferences = [
  {
    event: 'IEEE PerCom 2026, CoMoRe-AI Workshop',
    period: 'Mar 2026',
    location: 'Pisa, Italy',
    detail: 'Oral presentation: "UNIVRFall: IMU-based Pre-Impact, Impact, and Post-Impact Fall Detection Dataset." Presented dataset collection methodology, annotation pipeline, benchmark comparisons with KFall, and open-access Zenodo release.',
  },
  {
    event: 'DATE 2025, Design, Automation and Test in Europe',
    period: 'Mar 2025',
    location: 'Antwerp, Belgium',
    detail: 'Paper presentation: "A Lightweight CNN for Real-Time Pre-Impact Fall Detection." Presented the CNN architecture optimised for STM32F722 microcontrollers. Paper received the Best Paper Award in Track A: Application Design.',
  },
]

export default function HonorsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 50,
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
      id="honors"
      ref={sectionRef}
      style={{
        backgroundColor: '#f8fafc',
        padding: '120px clamp(20px, 4vw, 60px)',
      }}
    >
      <div ref={contentRef} style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '60px',
            borderBottom: '1px solid #1a1a1a',
            paddingBottom: '20px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: '#000000',
            }}
          >
            Honors & Service
          </h2>
          <span
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#666666',
              textTransform: 'uppercase',
            }}
          >
            Awards & Recognition
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {honors.map((honor, i) => (
            <div
              key={i}
              style={{
                padding: '24px 28px',
                backgroundColor: '#ffffff',
                border: '1px solid #000000',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '16px',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: '#666666',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {honor.period} / {honor.location}
                </p>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#000000',
                    lineHeight: 1.3,
                    marginBottom: '4px',
                  }}
                >
                  {honor.title}
                </h4>
                <p style={{ fontSize: '14px', color: '#444444' }}>{honor.institution}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#555555',
                    lineHeight: 1.6,
                    paddingLeft: '16px',
                    borderLeft: '2px solid #0d9488',
                  }}
                >
                  {honor.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            Conference Presentations
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {conferences.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 24px',
                  backgroundColor: '#ffffff',
                  borderLeft: '3px solid #0d9488',
                }}
              >
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#000000', marginBottom: '4px' }}>
                  {c.event}
                </p>
                <p style={{ fontSize: '13px', color: '#666666', marginBottom: '10px' }}>
                  {c.period} / {c.location}
                </p>
                <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.5 }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#000000',
              marginBottom: '20px',
            }}
          >
            Academic Service
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {service.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 24px',
                  backgroundColor: '#ffffff',
                  borderLeft: '3px solid #64748b',
                }}
              >
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#000000', marginBottom: '4px' }}>
                  {s.title}
                </p>
                <p style={{ fontSize: '13px', color: '#666666', marginBottom: '6px' }}>
                  {s.institution} / {s.period}
                </p>
                <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.5 }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
