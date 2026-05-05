import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tags = ['Wearable Sensing', 'Embedded AI', 'Generative Modelling', 'Robotics', 'Deep Learning']

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const details = detailsRef.current
    const tagsEl = tagsRef.current
    if (!section || !text || !details || !tagsEl) return

    const ctx = gsap.context(() => {
      gsap.from(text, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from(details.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          once: true,
        },
      })

      gsap.from(tagsEl.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#ffffff',
        padding: '120px clamp(20px, 4vw, 60px)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          gap: '80px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ flex: '1 1 700px' }}>
          <p
            ref={textRef}
            style={{
              fontSize: 'clamp(22px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.35,
              letterSpacing: '-0.02em',
              color: '#000000',
              maxWidth: '1200px',
              marginBottom: '40px',
            }}
          >
            I design end-to-end AI and ML pipelines for time-series and computer-vision
            tasks - from sensor data collection and synthetic data generation via
            physics-informed digital twin simulation, through feature engineering and
            model development, to optimised on-device inference on resource-constrained
            embedded platforms including STM32 microcontrollers and Raspberry Pi.
          </p>

          <div ref={detailsRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '15px', color: '#444444', lineHeight: 1.7 }}>
              My doctoral work focused on real-time pre-impact fall detection in wearable systems, achieving
              86.69% segment-level F1 with a lightweight CNN on STM32F722, and 99.5% event-level F1 through
              a two-stage pipeline with generative augmentation (VAE, CT-GAN, VAE-GAN) and Random Forest
              aggregation. The system was hardware-validated on commercial wearable airbag safety jackets at
              ICE Lab Verona in collaboration with Protechto s.r.l.
            </p>
            <p style={{ fontSize: '15px', color: '#444444', lineHeight: 1.7 }}>
              I have collected and curated the UNIVRFall dataset, a 46.05-hour open benchmark covering
              61 (+10) participants with construction-specific elevation falls absent from prior benchmarks.
              The dataset is publicly available on Zenodo with detailed annotation notebooks on Kaggle.
            </p>
            <p style={{ fontSize: '15px', color: '#444444', lineHeight: 1.7 }}>
              My current work extends this into a physics-based digital twin simulator that translates
              biomechanically modelled human fall trajectories into realistic accelerometer and gyroscope
              signals, developed in collaboration with Prof. Iacopo Tamellin (Applied Mechanics, Multibody
              System Dynamics) at DIMI, University of Verona.
            </p>
            <p style={{ fontSize: '15px', color: '#444444', lineHeight: 1.7 }}>
              Beyond wearable sensing, I bring expertise in robotics, deep learning architectures, and
              data analysis across interdisciplinary domains spanning computer science, applied mechanics,
              and embedded engineering. I have over four years of university-level teaching experience
              in Pakistan and am currently co-supervising a master's thesis at the University of Verona.
            </p>
          </div>
        </div>

        <div
          ref={tagsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            paddingTop: '12px',
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                color: '#000000',
                padding: '10px 18px',
                border: '1px solid #1a1a1a',
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
