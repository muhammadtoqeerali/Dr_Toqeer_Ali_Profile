import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const collaborations = [
  {
    name: 'Prof. Graziano Pravadelli',
    affiliation: 'University of Verona, Italy',
    period: '2022 – present',
    role: 'Primary PhD supervisor',
    description:
      'Ongoing collaboration on lightweight embedded deep learning for wearable fall detection, generative augmentation for IMU data, and real-time sensor analytics. Joint work has led to two conference publications [C.1, C.2] and one journal submission [J.1].',
  },
  {
    name: 'Prof. Florenc Demrozi',
    affiliation: 'University of Stavanger, Norway',
    period: '2022 – present',
    role: 'PhD co-supervisor',
    description:
      'Collaboration on system-level pipeline design, dataset curation, cross-dataset evaluation, and embedded deployment strategy. Co-author on all major PhD publications.',
  },
  {
    name: 'Dr. Fadi Al Machot',
    affiliation: 'NMBU, Ås, Norway',
    period: '2025 – present',
    role: 'International research collaborator',
    description:
      'Host supervisor during the six-month NMBU research visit and ongoing collaborator. His expertise in generative modelling and augmentation for sensor data directly shaped the augmentation strategy integrated into the PhD thesis. Co-author on the IEEE Sensors Journal submission [J.1].',
  },
  {
    name: 'Prof. Iacopo Tamellin',
    affiliation: 'DIMI, University of Verona, Italy',
    period: '2026 – present',
    role: 'Digital twin project collaborator',
    description:
      'Collaborator on the physics-based digital twin project (SHIELD). Contributes expertise in multibody system dynamics, mechanical modelling, and co-simulation, ensuring that modelled humanoid kinematics used to generate synthetic IMU data are biomechanically grounded and physically authentic.',
  },
  {
    name: 'ICE Lab Verona',
    affiliation: 'Siemens and University of Verona Partnership',
    period: '2022 – 2025',
    role: 'Hardware evaluation partner',
    description:
      'Provided the Industry 4.0 testbed environment for microcontroller testing and real-world validation of fall detection algorithms on commercial wearable airbag safety jackets.',
  },
  {
    name: 'Protechto s.r.l.',
    affiliation: 'Verona, Italy',
    period: '2022 – 2025',
    role: 'Industrial PhD partner',
    description:
      'Industrial partner of the PNRR PhD programme. Collaboration on application requirements, embedded deployment targets, and real-world system validation under the PREPARE, UNISCO, and CollaborICE/MICS projects.',
  },
]

export default function Collaborations() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const list = listRef.current
    if (!section || !title || !list) return

    const ctx = gsap.context(() => {
      gsap.from(title.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from(list.children, {
        y: 42,
        opacity: 0,
        duration: 0.85,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: list,
          start: 'top 78%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section id="collaborations" ref={sectionRef} className="collaborations-section">
      <div className="collaborations-shell">
        <div ref={titleRef} className="collaborations-heading">
          <div className="collaborations-kicker">Academic and Industrial Network</div>
          <h2>Research Collaborations</h2>
          <p>
            A selection of academic supervisors, international collaborators, and
            industrial partners contributing to my work in embedded AI, wearable
            sensing, synthetic IMU data, and real-world system validation.
          </p>
        </div>

        <div ref={listRef} className="collaborations-grid">
          {collaborations.map((item) => (
            <article key={item.name} className="collaboration-card">
              <div className="collaboration-card__top">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.affiliation}</p>
                </div>
                <span>{item.period}</span>
              </div>

              <div className="collaboration-card__role">{item.role}</div>

              <p className="collaboration-card__description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
