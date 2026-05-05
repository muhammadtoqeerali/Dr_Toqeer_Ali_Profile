export interface Project {
  id: string
  title: string
  category: string
  img: string
  tagline: string
  description: string[]
  features: string[]
  year: string
  links: { label: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'UNIVRFall Dataset',
    category: 'Open Dataset',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=900&fit=crop&q=80',
    tagline: 'Open IMU benchmark for pre-impact, impact, and post-impact fall detection.',
    description: [
      'The UNIVRFall dataset addresses a critical gap in wearable fall detection research: the scarcity of labelled pre-impact data needed to trigger protective devices before ground contact. It comprises 46.05 hours of IMU recordings from 61 (+10) participants, covering controlled laboratory scenarios and naturalistic construction-site recordings.',
      'A distinguishing feature is the inclusion of construction-specific elevation falls not present in prior benchmarks like KFall. The dataset spans pre-impact, impact, and post-impact phases, enabling research into early warning systems for occupational safety. All recordings are released under open access on Zenodo, with a detailed annotation methodology documented in an openly available Kaggle notebook. The dataset has been integrated with KFall for cross-dataset validation.',
    ],
    features: [
      '61 (+10) participants, 46.05 hours of IMU recordings',
      'Construction-specific elevation falls included',
      'Pre-impact, impact, and post-impact annotations',
      'Open access on Zenodo',
      'Kaggle annotation notebook available',
      'Cross-dataset validation with KFall',
    ],
    year: '2025-2026',
    links: [
      { label: 'Zenodo', url: 'https://zenodo.org/records/18346755' },
      { label: 'Kaggle', url: '#' },
    ],
  },
  {
    id: '02',
    title: 'Physics-based Digital Twin',
    category: 'Research Software',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&h=900&fit=crop&q=80',
    tagline: 'Biomechanically grounded simulator converting human fall trajectories into realistic IMU signals.',
    description: [
      'This simulator addresses the chronic challenge of scarce labelled fall data by generating synthetic IMU signals from biomechanically modelled human fall trajectories. Working in close collaboration with Prof. Iacopo Tamellin (DIMI, Applied Mechanics, Multibody System Dynamics), the system uses multibody system dynamics and co-simulation to ensure that simulated kinematic and dynamic trajectories reflect realistic musculoskeletal properties.',
      'The generated accelerometer and gyroscope signals are validated quantitatively against real recordings from the UNIVRFall and KFall datasets, benchmarking synthetic-to-real fidelity across a range of fall scenarios and body configurations. Early results demonstrate convincing sensor signal reconstruction. The ongoing target is deployment as a scalable training-data augmentation pipeline for embedded wearable fall detection systems, removing the dependency on costly and risky physical data collection.',
    ],
    features: [
      'Multibody system dynamics integration',
      'Realistic accelerometer and gyroscope synthesis',
      'Validation against UNIVRFall and KFall benchmarks',
      'Synthetic-to-real fidelity benchmarking',
      'Scalable training-data augmentation pipeline',
      'Collaboration with Applied Mechanics group at DIMI',
    ],
    year: '2026 (ongoing)',
    links: [
      { label: 'GitHub', url: 'https://github.com/muhammadtoqeerali/Physics_based_Digital_twin' },
    ],
  },
  {
    id: '03',
    title: 'Fall Detection Pipeline',
    category: 'Embedded AI',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop&q=80',
    tagline: 'End-to-end wearable fall detection for STM32 microcontrollers with generative augmentation.',
    description: [
      'Developed in collaboration with Protechto s.r.l. under the industrial PhD programme, this end-to-end pipeline delivers real-time pre-impact fall detection on STM32F722 microcontrollers within the strict timing budget required to trigger wearable airbag safety jackets before ground contact.',
      'The system uses a lightweight CNN achieving 86.69% segment-level F1 score. A two-stage pipeline combining generative data augmentation (VAE, CT-GAN, VAE-GAN) with a Random Forest event-level aggregator reaches 99.5% event-level F1 with precision of 99.9% and false negatives below 1%, validated via 5-fold subject-independent cross-validation. Hardware validation was conducted on commercial airbag safety jackets at ICE Lab Verona, a Siemens and University of Verona partnership laboratory.',
    ],
    features: [
      'STM32F722 microcontroller deployment',
      'Lightweight CNN for real-time inference',
      'Generative augmentation: VAE, CT-GAN, VAE-GAN',
      'Random Forest event-level aggregation',
      'Hardware-validated on commercial airbag jackets',
      '99.5% event-level F1 score',
    ],
    year: '2023-2025',
    links: [
      { label: 'GitHub', url: 'https://github.com/muhammadtoqeerali/Protechto_master' },
    ],
  },
  {
    id: '04',
    title: 'PhD Research Presentation',
    category: 'Web Tool',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=900&fit=crop&q=80',
    tagline: 'Interactive HTML/PHP web application presenting three years of PhD research.',
    description: [
      'Built as a custom web application to present three years of doctoral research in an interactive, multi-user slide format. The tool supports inline commenting by collaborators, enabling richer discussion than standard presentation software allows.',
      'Deployed publicly on Vercel for easy access by the research committee, collaborators, and peers. The application demonstrates full-stack web development skills alongside academic communication, bridging technical research with accessible digital presentation.',
    ],
    features: [
      'Interactive multi-user slide format',
      'Inline collaborator commenting',
      'Custom HTML/PHP architecture',
      'Publicly deployed on Vercel',
      'Richer than standard presentation software',
    ],
    year: '2025',
    links: [
      { label: 'Live Demo', url: 'https://final-ppt.vercel.app' },
      { label: 'GitHub', url: 'https://github.com/muhammadtoqeerali/Final-PPT' },
    ],
  },
  {
    id: '05',
    title: 'Early Projects Group',
    category: 'BSc / IoT / Web',
    img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1600&h=900&fit=crop&q=80',
    tagline: 'Arduino health monitoring, iris recognition attendance, and university clearance systems.',
    description: [
      'A collection of foundational projects from BSc and early career that established full-stack web development, embedded systems, and image processing fundamentals. The Arduino-Based Health Monitoring System reads pulse rate and ambient temperature from sensors and transmits readings to a web server for real-time remote display by healthcare professionals.',
      'The Iris Recognition Web-Based Attendance System combines a camera module for iris image capture with a software pipeline for iris localisation, pattern matching, and automated attendance reporting to a university web portal. The Online Web-Based Student Clearance System enables final-year students to apply for graduation clearance online, linking student accounts to departmental offices and automating requirement verification. These projects underpin the engineering instincts that now guide research system design.',
    ],
    features: [
      'Arduino + sensor IoT health monitoring with web dashboard',
      'Iris localisation and pattern matching pipeline',
      'Web-based attendance reporting system',
      'PHP/MySQL full-stack development',
      'University clearance automation platform',
    ],
    year: '2018-2021',
    links: [
      { label: 'GitHub', url: 'https://github.com/muhammadtoqeerali' },
    ],
  },
]
