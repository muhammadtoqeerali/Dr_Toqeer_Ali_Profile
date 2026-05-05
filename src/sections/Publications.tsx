import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const journalsUnderReview = [
  {
    id: 'J.1',
    authors: 'Ali, M.T., Turetta, C., Demrozi, F., Al Machot, F. and Pravadelli, G.',
    title: 'Exploring Generative Data Augmentation for Real-Time Pre-Impact Fall Detection in Wearable Systems.',
    venue: 'IEEE Sensors Journal',
    status: 'Under review',
    year: '2025',
    detail: 'Systematic evaluation of VAE, Conditional TimeGAN, and hybrid VAE-GAN for synthesising realistic IMU falling patterns while preserving temporal dynamics. Joint work with NMBU.',
  },
]

const journalsPublished = [
  {
    id: 'J.2',
    authors: 'Ali, M.T., Turetta, C., Demrozi, F. and Pravadelli, G.',
    title: 'ICT-Based Solutions for Alzheimer\'s Disease Care: A Systematic Review.',
    venue: 'IEEE Access',
    year: '2024',
    detail: 'Survey of ICT-based solutions for Alzheimer\'s disease care, examining smart home systems, wearable monitoring, and AI-assisted caregiving technologies.',
  },
]

const conferences = [
  {
    id: 'C.1',
    authors: 'Turetta, C., Ali, M.T., Demrozi, F. and Pravadelli, G.',
    title: 'A Lightweight CNN for Real-Time Pre-Impact Fall Detection.',
    venue: 'IEEE DATE 2025, Design, Automation and Test in Europe',
    year: '2025',
    award: 'Best Paper Award, DATE 2025, Track A: Application Design',
    detail: 'Lightweight CNN achieving 86.69% segment-level F1 score on STM32F722 within the strict timing budget required to trigger wearable airbag protection.',
  },
  {
    id: 'C.2',
    authors: 'Ali, M.T., Turetta, C., Demrozi, F. and Pravadelli, G.',
    title: 'UNIVRFall: IMU-based Pre-Impact, Impact, and Post-Impact Fall Detection Dataset.',
    venue: 'CoMoRe-AI Workshop at IEEE PerCom 2026, Pisa, Italy',
    year: '2026',
    detail: 'Dataset collection methodology, annotation pipeline, benchmark comparisons with KFall, and open-access Zenodo release.',
  },
]

const otherPublications = [
  {
    id: 'O.1',
    authors: 'Rana, K., Niaz, A., Hanif, S. and Ali, M.T.',
    title: '4x4 Bit Multiplier Designs using Different CMOS Schematics, and their Comparison.',
    venue: 'Technical Journal, vol. 24, no. 04',
    year: '2019',
  },
]

export default function PublicationsSection() {
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
      id="publications"
      ref={sectionRef}
      style={{
        backgroundColor: '#ffffff',
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
            Publications
          </h2>
          <span
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#666666',
              textTransform: 'uppercase',
            }}
          >
            Peer-Reviewed Output
          </span>
        </div>

        <PubCategory title="Journal Articles - Under Review" items={journalsUnderReview} accent="#0d9488" />
        <PubCategory title="Journal Articles - Published" items={journalsPublished} accent="#0d9488" />
        <PubCategory title="Conference Proceedings" items={conferences} accent="#0d9488" />
        <PubCategory title="Other Publications" items={otherPublications} accent="#64748b" />
      </div>
    </section>
  )
}

function PubCategory({
  title,
  items,
  accent,
}: {
  title: string
  items: { id: string; authors: string; title: string; venue: string; year: string; status?: string; award?: string; detail?: string }[]
  accent: string
}) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h3
        style={{
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: accent,
          marginBottom: '20px',
        }}
      >
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: '24px 28px',
              backgroundColor: '#f8fafc',
              borderLeft: `3px solid ${accent}`,
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: accent,
                  fontVariantNumeric: 'tabular-nums',
                  whiteSpace: 'nowrap',
                }}
              >
                [{item.id}]
              </span>
              <span style={{ fontSize: '13px', color: '#555555' }}>
                {item.year}
                {item.status && <span style={{ color: accent, marginLeft: '8px', fontWeight: 500 }}>({item.status})</span>}
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.5, marginBottom: '6px' }}>
              <span style={{ fontWeight: 500, color: '#000000' }}>{item.title}</span>
            </p>
            <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.5, marginBottom: '6px' }}>
              {item.authors}
            </p>
            <p style={{ fontSize: '13px', color: '#0d9488', fontStyle: 'italic', marginBottom: '8px' }}>
              {item.venue}
            </p>
            {item.award && (
              <p style={{ fontSize: '13px', color: '#b45309', fontWeight: 500 }}>
                Award: {item.award}
              </p>
            )}
            {item.detail && (
              <p style={{ fontSize: '13px', color: '#777777', lineHeight: 1.5, marginTop: '8px' }}>
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
