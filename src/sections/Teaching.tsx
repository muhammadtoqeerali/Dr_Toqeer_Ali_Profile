import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const teaching = [
  {
    role: 'Research Associate / Mentor',
    institution: 'Department of Engineering for Innovative Medicine (DIMI), University of Verona',
    period: 'January 2026 – May 2026',
    location: 'Verona, Italy',
    courses: [],
    notes: 'Within this research fellowship, I continue to mentor junior researchers on machine learning pipeline development, sensor data handling, and embedded deployment. The role also involves close interdisciplinary collaboration across computer science and applied mechanics, reinforcing the skill of communicating technical ideas clearly to audiences with different backgrounds.',
  },
  {
    role: 'PhD Researcher / Mentor',
    institution: 'Department of Computer Science, University of Verona & Protechto s.r.l.',
    period: 'December 2022 – December 2025',
    location: 'Verona, Italy',
    courses: [],
    notes: 'During the PhD, I mentored junior students in the research group and took on formal thesis supervision. Presenting research at international IEEE conferences reinforced that clarity in front of an audience draws on the same preparation as teaching in a classroom.',
  },
  {
    role: 'Lecturer',
    institution: 'SZABIST University',
    period: 'June 2022 – November 2022',
    location: 'Islamabad, Pakistan',
    courses: [
      'Computer Networks',
      'Programming Fundamentals',
      'Object-Oriented Programming (C++)',
      'Digital Logic Design',
      'Operating Systems',
    ],
    playlists: [
      { course: 'Computer Networks', url: 'https://youtube.com/@Drtoqeerali' },
      { course: 'Programming Fundamentals', url: 'https://youtube.com/@Drtoqeerali' },
      { course: 'OOP in C++', url: 'https://youtube.com/@Drtoqeerali' },
    ],
    notes: 'In this role I held full independent responsibility for course design, lecture delivery, assessment, and laboratory coordination, while also providing academic support to the Head of Department.',
  },
  {
    role: 'Laboratory Engineer (Permanent)',
    institution: 'SZABIST University',
    period: 'September 2019 – May 2022',
    location: 'Islamabad, Pakistan',
    courses: [
      'Computer Organisation and Assembly Language (COAL) - 8086 Microprocessor',
      'Database Management Systems (DBMS)',
      'Programming Fundamentals lab',
      'Object-Oriented Programming (OOP) lab',
      'Embedded Systems',
      'Digital Image Processing & Digital System Design',
      'Engineering Physics',
    ],
    playlists: [
      { course: '8086 Microprocessor', url: 'https://youtube.com/@Drtoqeerali' },
      { course: 'Database Systems', url: 'https://youtube.com/@Drtoqeerali' },
      { course: 'Fundamentals of Programming', url: 'https://youtube.com/@Drtoqeerali' },
      { course: 'OOP in C++', url: 'https://youtube.com/@Drtoqeerali' },
    ],
    notes: 'As a permanent lab engineer, I delivered practical sessions for foundational undergraduate courses and took on growing supervisory responsibilities for final year projects.',
  },
  {
    role: 'Visiting Laboratory Demonstrator',
    institution: 'SZABIST University',
    period: 'October 2018 – August 2019',
    location: 'Islamabad, Pakistan',
    courses: [
      'Programming Fundamentals',
      'COAL lab',
      'OOP lab',
      'Digital System Design labs',
    ],
    notes: 'My first teaching role, taken on alongside the early months of my master\'s degree. I ran laboratory sessions for first and second year students. This period is where the habit of reading a room and adapting explanations on the spot first developed.',
  },
  {
    role: 'Teaching Assistant',
    institution: 'HITEC University, Department of Computer Engineering',
    period: 'September 2018 – June 2020',
    location: 'Taxila, Pakistan',
    courses: [],
    notes: 'Running concurrently with the SZABIST roles, this position placed me directly alongside Prof. Dr. Imran Ashraf. Responsibilities included managing result sheets, marking assignments, conducting quizzes in class, and maintaining course records. This work gave me a clear understanding of the administrative structure that supports teaching.',
  },
]

const supervision = [
  {
    title: "Master's Thesis Co-supervisor",
    institution: 'Department of Computer Science, University of Verona',
    period: '2025 – present',
    location: 'Verona, Italy',
    project: 'An Intelligent Deep Learning Framework for Categorized Fall Detection',
    note: 'Ongoing supervision of a master\'s student within the research group.',
  },
  {
    title: 'Bachelor Final Year Project Supervisor',
    institution: 'SZABIST University',
    period: '2019 – 2022',
    location: 'Islamabad, Pakistan',
    projects: [
      'End-to-End Android-Based Secure and Privacy-Preserving Mobile Chat Application',
      'Home Automation System',
      'University Clearance System',
      'Bullet Hit-Point Detection System',
      'Classification of Lung Cancer using Deep Learning',
    ],
    note: 'Supervised five final-year bachelor projects across embedded systems, mobile security, IoT, and deep learning domains.',
  },
]

const youtubePlaylists = [
  'Computer Network Programming',
  'Fundamentals of Programming',
  'Object-Oriented Programming in C++',
  'Database Systems',
  '8086 Microprocessor (Computer Organisation & Assembly Language)',
  'General Informative & Supplementary Videos',
]

const coursesPrepared = [
  'Machine Learning and Deep Learning',
  'Embedded Systems and Computer Organisation and Assembly Language',
  'Signal Processing and Digital Image Processing',
  'Object-Oriented Programming and Programming Fundamentals',
  'Operating Systems and Computer Networks',
  'Digital Logic Design and Digital System Design',
  'Database Systems',
  'Edge AI, TinyML, and IoT Applications for Healthcare',
]

export default function TeachingSection() {
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
      id="teaching"
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
            Teaching & Supervision
          </h2>
          <span
            style={{
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#666666',
              textTransform: 'uppercase',
            }}
          >
            Academic Service
          </span>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontSize: '15px',
              color: '#444444',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}
          >
            Teaching has been a continuous part of my career since 2018, progressing from visiting laboratory
            sessions in Pakistan to doctoral-level student supervision in Italy. Each role carried new
            responsibilities and added a different dimension to how I plan, deliver, and support learning. Beyond
            the classroom, I have extended this commitment to an open YouTube channel where full course
            playlists are freely available, covering several of the subjects I have taught.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
          {teaching.map((entry, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '20px',
                padding: '24px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e5e5e5',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: '#0d9488',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {entry.period}
                </p>
                <h4
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#000000',
                    marginBottom: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {entry.role}
                </h4>
                <p style={{ fontSize: '14px', color: '#444444', lineHeight: 1.5 }}>
                  {entry.institution}, {entry.location}
                </p>
              </div>
              <div>
                {entry.courses.length > 0 && (
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                    {entry.courses.map((c, j) => (
                      <li key={j} style={{ fontSize: '14px', color: '#555555', lineHeight: 1.5 }}>
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.playlists && entry.playlists.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                    {entry.playlists.map((pl, j) => (
                      <a
                        key={j}
                        href={pl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '13px', color: '#0d9488', textDecoration: 'underline' }}
                      >
                        {pl.course} Playlist
                      </a>
                    ))}
                  </div>
                )}
                {entry.notes && (
                  <p style={{ fontSize: '13px', color: '#666666', fontStyle: 'italic', lineHeight: 1.6 }}>
                    {entry.notes}
                  </p>
                )}
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
              paddingBottom: '12px',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            Thesis Supervision
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {supervision.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 24px',
                  backgroundColor: '#f8fafc',
                  borderLeft: '3px solid #0d9488',
                }}
              >
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#000000', marginBottom: '4px' }}>
                  {s.title}
                </p>
                <p style={{ fontSize: '13px', color: '#666666', marginBottom: '6px' }}>
                  {s.institution} / {s.period} / {s.location}
                </p>
                {s.project && (
                  <p style={{ fontSize: '14px', color: '#444444', marginBottom: '6px' }}>
                    Project: {s.project}
                  </p>
                )}
                {s.projects && (
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {s.projects.map((p, j) => (
                      <li key={j} style={{ fontSize: '13px', color: '#555555' }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && (
                  <p style={{ fontSize: '13px', color: '#666666', fontStyle: 'italic', marginTop: '8px' }}>
                    {s.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#000000',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            Open Educational Content
          </h3>
          <p style={{ fontSize: '15px', color: '#444444', lineHeight: 1.7, marginBottom: '16px' }}>
            Alongside formal teaching, I have published complete course playlists on my YouTube channel{' '}
            <a href="https://youtube.com/@Drtoqeerali" target="_blank" rel="noopener noreferrer" style={{ color: '#0d9488', textDecoration: 'underline' }}>
              youtube.com/@Drtoqeerali
            </a>, making structured learning material freely available beyond any single institution. Each playlist follows the same course structure used in the classroom.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {youtubePlaylists.map((pl, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#0d9488', fontSize: '14px' }}>▸</span>
                <span style={{ fontSize: '14px', color: '#555555' }}>{pl}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: '#000000',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            Teaching Philosophy
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'Understanding before procedure. Students who learn steps without understanding the reasoning behind them tend to fail the moment a problem changes slightly. I spend time on the why before the how.',
              'Theory connected to real problems. Abstract material becomes easier to care about when students can see it doing something they recognise. I use contemporary examples from smartphones and embedded devices.',
              'Active engagement. Years of lab teaching made clear that students learn differently when they are producing something rather than watching. I carry this into lectures through committed-answer questions and short in-class exercises.',
              'Honesty about difficulty. When a hard topic is presented as straightforward, struggling students conclude the problem is theirs alone. Naming the difficulty and treating persistence through it as normal gives students confidence.',
              'Research informing teaching. My doctoral work on embedded machine learning gives me live examples I can bring into courses on embedded systems, signal processing, and programming, demonstrating that curriculum fundamentals remain active in current practice.',
            ].map((item, i) => (
              <p
                key={i}
                style={{
                  fontSize: '14px',
                  color: '#555555',
                  lineHeight: 1.7,
                  paddingLeft: '16px',
                  borderLeft: '2px solid #0d9488',
                }}
              >
                {item}
              </p>
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
              paddingBottom: '12px',
              borderBottom: '1px solid #e5e5e5',
            }}
          >
            Courses I Am Prepared to Teach
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '12px',
            }}
          >
            {coursesPrepared.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 18px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e5e5e5',
                  fontSize: '14px',
                  color: '#444444',
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
