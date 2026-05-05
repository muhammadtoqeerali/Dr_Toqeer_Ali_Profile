import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const education = [
  {
    degree: 'PhD in Computer Science',
    institution: 'University of Verona',
    period: 'Dec 2022 – Dec 2025',
    location: 'Verona, Italy',
    details: [
      'PNRR-funded industrial PhD in collaboration with Protechto s.r.l. (NextGenerationEU, CollaborICE/MICS Extended Partnership)',
      'Thesis: Real-Time Pre-Impact Fall Detection in Wearable Systems: Lightweight Deep Learning Architectures for Embedded Deployment',
      'Supervisor: Prof. Graziano Pravadelli | Co-supervisor: Prof. Florenc Demrozi',
      'Six-month research visit to Norwegian University of Life Sciences (NMBU), As, Norway, hosted by Dr. Fadi Al Machot\'s research group',
    ],
  },
  {
    degree: 'MSc in Computer Engineering',
    institution: 'HITEC University, Taxila',
    period: 'Sep 2018 – Jul 2020',
    location: 'Pakistan',
    details: [
      'Thesis: Run-Time Extraction of Memory Efficiency Metrics for Application Optimization, enhancing the MCPROF tool with MAE and MUE metrics',
      'Supervisor: Dr. Imran Ashraf | CGPA: 3.80 / 4.00 (94.59%) | Distinction',
      'Gold Medal for highest CGPA in the MSc programme',
    ],
  },
  {
    degree: 'BSc in Computer Engineering',
    institution: 'HITEC University, Taxila',
    period: 'Sep 2014 – Jul 2018',
    location: 'Pakistan',
    details: [
      'Thesis: Iris Recognition University Web-Based Attendance System - hardware-software pipeline for iris image capture, localisation, pattern matching, and web-based attendance reporting',
      'Supervisor: Dr. Hashim Ali | CGPA: 2.88 / 4.00 (71.73%)',
    ],
  },
]

const appointments = [
  {
    title: 'Research Associate',
    institution: 'Department of Engineering for Innovative Medicine (DIMI), University of Verona',
    period: 'January 2026 – May 31, 2026',
    location: 'Verona, Italy',
    details: [
      'Extending PhD fall detection research into a physics-based digital twin simulator that translates modelled human fall trajectories directly into realistic accelerometer and gyroscope signals, enabling scalable generation of labelled synthetic IMU training data without physical data collection.',
      'Working in close collaboration with Prof. Iacopo Tamellin (DIMI, Applied Mechanics, Multibody System Dynamics) to model the biomechanics of human body behaviour during falls. His expertise in multibody system dynamics and co-simulation ensures that the simulated kinematic and dynamic trajectories reflect realistic musculoskeletal properties, making the generated IMU signals physically authentic and suitable for model training.',
      'Validating generated signals quantitatively against real recordings from the UNIVRFall and KFall datasets, benchmarking synthetic-to-real fidelity across a range of fall scenarios and body configurations.',
      'Early results demonstrate convincing sensor signal reconstruction; ongoing work targets deployment as a scalable training-data augmentation pipeline for embedded wearable fall detection systems.',
    ],
  },
]

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const items = itemsRef.current
    if (!section || !items) return

    const ctx = gsap.context(() => {
      gsap.from(items.children, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
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
      id="education"
      ref={sectionRef}
      style={{
        backgroundColor: '#f8fafc',
        padding: '120px clamp(20px, 4vw, 60px)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
            Education & Appointments
          </h2>
          <span
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#666666',
              textTransform: 'uppercase',
            }}
          >
            Academic Background
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: '#0d9488',
              textTransform: 'uppercase',
            }}
          >
            Current Appointment
          </h3>
          {appointments.map((app, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px',
                padding: '32px',
                backgroundColor: '#ffffff',
                border: '2px solid #0d9488',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: '#0d9488',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  {app.period}
                </p>
                <h3
                  style={{
                    fontSize: 'clamp(20px, 2vw, 28px)',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    color: '#000000',
                    marginBottom: '6px',
                  }}
                >
                  {app.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#444444', lineHeight: 1.5 }}>
                  {app.institution}
                </p>
                <p style={{ fontSize: '13px', color: '#888888', marginTop: '4px' }}>
                  {app.location}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {app.details.map((detail, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: '14px',
                      color: '#555555',
                      lineHeight: 1.6,
                      paddingLeft: '16px',
                      borderLeft: '2px solid #0d9488',
                    }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={itemsRef} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {education.map((edu, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '24px',
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '1px solid #000000',
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
                  {edu.period}
                </p>
                <h3
                  style={{
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    color: '#000000',
                    marginBottom: '6px',
                  }}
                >
                  {edu.degree}
                </h3>
                <p style={{ fontSize: '15px', color: '#444444' }}>
                  {edu.institution}
                </p>
                <p style={{ fontSize: '13px', color: '#888888', marginTop: '4px' }}>
                  {edu.location}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {edu.details.map((detail, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: '14px',
                      color: '#555555',
                      lineHeight: 1.6,
                      paddingLeft: '16px',
                      borderLeft: '2px solid #0d9488',
                    }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
