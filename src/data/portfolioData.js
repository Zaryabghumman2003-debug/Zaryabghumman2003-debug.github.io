/**
 * Central Business Portfolio Data Configuration
 * ---------------------------------------------
 * Edit values marked with [Editable] to customize dates, repository links,
 * or drop a static PDF at /public/Zaryab-Naveed-Ghuman-CV.pdf and set cvPdfUrl.
 */

export const PERSONAL_INFO = {
  name: 'Zaryab Naveed Ghuman',
  shortName: 'Zaryab Ghuman',
  location: 'Karachi, Pakistan',
  title: 'Technology Entrepreneur | Software Solutions Partner | Core Team Member at VantraOS',
  positioning:
    'I help businesses and startups turn operational bottlenecks into scalable software products—combining full-stack engineering, AI integration, and practical product execution.',
  email: 'Zaryabghumman2003@gmail.com',
  linkedin: 'https://linkedin.com/in/zaryab-ghumman',
  github: 'https://github.com/Zaryabghumman2003-debug',
  vantraosUrl: 'https://vantraos.com',
  // [Editable] Optional direct PDF path in /public; if null, opens printable/downloadable CV view
  cvPdfUrl: null,
  hero: {
    headline: 'Building Technology. Leading Innovation. Creating Impact.',
    subheading:
      "I'm Zaryab Naveed Ghuman — Technology Entrepreneur, Software Developer, and Core Team Member at VantraOS. I partner with founders and businesses to build practical web platforms, SaaS workflows, and AI-enabled solutions.",
    rotatingFocus: [
      'B2B SaaS & Operational Platforms (VantraOS)',
      'Custom Web Apps & Marketplaces (Kaamify)',
      'AI & Computer Vision Automation',
      'Startup Execution in Karachi (NASTP / DUET RPDU)',
    ],
    identityLabels: [
      { label: 'Software Developer — VantraOS', accent: 'indigo' },
      { label: 'Startup Ecosystem — NASTP / DUET RPDU', accent: 'sky' },
      { label: 'B2B Web, SaaS & AI Solutions', accent: 'violet' },
    ],
  },
};

export const BUSINESS_SERVICES = [
  {
    id: 'saas-web',
    title: 'Custom SaaS & Business Web Platforms',
    audience: 'For Startups, SMEs & Operations Teams',
    summary:
      'End-to-end architecture and frontend/backend engineering for multi-tenant platforms, client portals, quotation engines, and workflow automation tools.',
    deliverables: [
      'Responsive React, Next.js & PHP/Python web systems',
      'Role-based dashboards, reporting & JSON/PDF workflows',
      'Clean UI/UX built for conversion and daily team speed',
    ],
  },
  {
    id: 'marketplaces',
    title: 'Marketplaces & Service Booking Platforms',
    audience: 'For Local Ventures & Service Brands',
    summary:
      'Structured discovery catalogs, provider directories, gated-community service flows, and customer booking journeys tailored for regional businesses.',
    deliverables: [
      'Service catalogs, search & location-based filtering',
      'Provider profiles, lead capture & admin control views',
      'Scalable database modeling with MySQL, MongoDB & Supabase/Firebase',
    ],
  },
  {
    id: 'ai-cv',
    title: 'AI Integration & Computer Vision Systems',
    audience: 'For Automation & Smart Product Teams',
    summary:
      'Practical integration of computer vision pipelines and AI-assisted workflows into real business and academic tools.',
    deliverables: [
      'Object detection & video analytics with Python, YOLO & OpenCV',
      'AI-assisted scheduling, productivity & companion interfaces',
      'Modular Python APIs ready for product integration',
    ],
  },
  {
    id: 'digital-presence',
    title: 'Corporate Websites & Operations Tooling',
    audience: 'For Growing Companies & Institutions',
    summary:
      'High-credibility digital presence, WordPress/custom brand sites, and internal compliance or task-management tools.',
    deliverables: [
      'Fast, SEO-optimized corporate & founder landing pages',
      'WordPress & Oracle APEX business data applications',
      'Compliance, audit checklists & internal task trackers',
    ],
  },
];

export const ENGAGEMENT_MODEL = {
  steps: [
    {
      step: '01',
      title: 'Discovery & Business Scope',
      detail:
        'Align on operational pain points, target users, core deliverables, and realistic launch milestones before writing production code.',
    },
    {
      step: '02',
      title: 'Architecture & Interactive UI',
      detail:
        'Define data models, security boundaries, and clean user journeys so stakeholders validate workflows early.',
    },
    {
      step: '03',
      title: 'Iterative Build & Integration',
      detail:
        'Ship clean, modular software in structured sprints with GitHub version control and transparent progress tracking.',
    },
    {
      step: '04',
      title: 'Deployment & Growth Support',
      detail:
        'Launch production-ready builds with documentation, handover clarity, and ongoing feature iteration as business needs evolve.',
    },
  ],
  models: [
    {
      name: 'MVP & Product Build',
      tag: 'Startups & Founders',
      detail: 'Take a new digital product or SaaS concept from structured scope to a deployed, testable platform.',
    },
    {
      name: 'Business Web & Systems',
      tag: 'SMEs & Agencies',
      detail: 'Build custom company websites, service portals, compliance trackers, or database-backed internal dashboards.',
    },
    {
      name: 'Dedicated Engineering Support',
      tag: 'Product Teams',
      detail: 'Collaborate directly with your technical or startup team on frontend, backend, or AI module delivery.',
    },
  ],
};

export const VANTRAOS_DATA = {
  name: 'VantraOS',
  tagline: 'Enterprise Cloud Operating System for Modern Banquets, Luxury Caterers & Hospitality Operations',
  website: 'https://vantraos.com',
  role: 'Software Developer & Core Team Member',
  ecosystems: [
    'NASTP (National Aerospace Science & Technology Park)',
    'DUET RPDU Office (Research, Planning & Development Unit)',
  ],
  status: 'Deployed Production Platform',
  overview:
    'VantraOS is a live, cloud-based operational supply chain platform built specifically for modern banquets, luxury caterers, and large-scale hospitality businesses. Rather than acting as a basic point-of-sale or receipt tool, it unifies event pipelines, recipe costing, multi-branch operations, and multi-wallet financial tracking in one secure system.',
  personalJourney:
    'Working as a Software Developer and Core Team Member at VantraOS within the NASTP and DUET RPDU startup ecosystem has given me direct exposure to taking a real-world software product from engineering workflows to deployed business usage—balancing technical reliability, domain requirements, and product scaling.',
  perspectives: [
    {
      title: 'Product Engineering for Real Operations',
      detail:
        'Designing software for high-velocity hospitality workflows means replacing fragmented spreadsheets with structured pipelines, reliable calculations, and clear operational accountability.',
    },
    {
      title: 'Navigating Startup Execution',
      detail:
        'Contributing within NASTP and DUET RPDU highlighted the realities of shipping production software: aligning engineering priorities with customer workflows, security expectations, and iterative growth.',
    },
    {
      title: 'From Product to Market Growth',
      detail:
        'Beyond writing code, participating in a live startup environment bridges product architecture with business strategy, onboarding realities, and long-term scalability.',
    },
  ],
  verifiedModules: [
    {
      id: 'pipeline',
      name: 'Unified Event Pipeline & Quote Engine',
      summary:
        'Converts client leads into branded PDF proposals with tiered guest counts, custom packages, and automated tax calculations in under 90 seconds, flowing directly into invoices and kitchen production sheets.',
      highlights: [
        'Lead-to-proposal workflow under 90s',
        'Tiered guest counts & custom menu packages',
        'One-click conversion to invoices & kitchen sheets',
      ],
    },
    {
      id: 'costing',
      name: 'Live Recipe Costing & Vendor Sheets',
      summary:
        'Connects kitchen recipes, raw ingredient tracking, and vendor pricing directly to event quotes so hospitality teams can protect operating margins and eliminate estimation errors.',
      highlights: [
        'Ingredient-level recipe costing',
        'Vendor sheet tracking & procurement alignment',
        'Margin visibility against event billing',
      ],
    },
    {
      id: 'multitenant',
      name: 'Multi-Tenant Branch Architecture',
      summary:
        'Isolates branch inventories, kitchen production sheets, and operating wallets via strict tenant domain routing and schema isolation while consolidating executive P&L views.',
      highlights: [
        'Per-branch inventory & kitchen sheet isolation',
        'Strict tenant domain routing & schema separation',
        'Consolidated executive P&L and monthly closings',
      ],
    },
    {
      id: 'wallets',
      name: 'Multi-Wallet Accounting & Security',
      summary:
        'Supports receivables tracking and custom profit-split structures across owners, partners, and sales teams, backed by Argon2id hashing, token revocation, and 256-bit SSL encryption.',
      highlights: [
        'Multi-wallet financial & receivables tracking',
        'Configurable owner, partner & sales profit splits',
        'Argon2id hashing & token revocation controls',
      ],
    },
  ],
  screenshotNote:
    'Interactive module preview built from verified vantraos.com product documentation. Replace or augment with local screenshots anytime in portfolioData.js.',
};

export const ABOUT_DATA = {
  paragraphs: [
    "I'm a Computer Science undergraduate at Dawood University of Engineering and Technology (DUET) in Karachi (2024–2028) and a Software Developer & Core Team Member at VantraOS.",
    'My work sits at the intersection of software engineering and startup execution. Being active within the NASTP startup ecosystem and DUET RPDU Office has shaped how I approach technology—not just as code in isolation, but as practical systems designed to solve real operational and business problems.',
    'Across B2B startup work, marketplace builds, internships, and technical projects, I focus on full-stack web development, AI and computer vision integration, and delivering dependable digital products with measurable business utility.',
  ],
  highlights: [
    { label: 'Location', value: 'Karachi, Pakistan (Available for Remote & Local Engagements)' },
    { label: 'Startup Role', value: 'Software Developer & Core Team Member — VantraOS' },
    { label: 'Ecosystem', value: 'NASTP & DUET RPDU Office' },
    { label: 'Education', value: 'BS Computer Science — DUET (2024–2028 Expected)' },
  ],
};

export const STARTUP_JOURNEY = [
  {
    step: '01',
    title: 'Startup Ecosystem',
    subtitle: 'NASTP & DUET RPDU',
    description:
      'Immersed in the startup and innovation environment across NASTP and the DUET Research, Planning & Development Unit (RPDU), collaborating around product thinking, technical execution, and industry problem-solving.',
    status: 'Ecosystem Foundation',
  },
  {
    step: '02',
    title: 'Building a Technology Product',
    subtitle: 'VantraOS Product Development & Deployment',
    description:
      'Engaged in the development and deployment of VantraOS—an enterprise cloud platform tailored to solve operational, costing, and financial leakage challenges in modern banquet and hospitality operations.',
    status: 'Production Product',
  },
  {
    step: '03',
    title: 'Core Product & Engineering Role',
    subtitle: 'Software Developer & Core Team Member',
    description:
      'Contributing to software development and product workflows at VantraOS, bridging technical implementation with real-world operational requirements alongside the founding and product team.',
    status: 'Active Role',
  },
  {
    step: '04',
    title: 'Growth & Scaling',
    subtitle: 'Expanding Product & Market Presence',
    description:
      'Focused on strengthening engineering reliability, refining user workflows, and supporting the ambition of scaling VantraOS to serve broader enterprise hospitality operations.',
    status: 'Ongoing Ambition',
  },
];

export const EXPERIENCE_DATA = [
  {
    role: 'Software Developer & Core Team Member',
    organization: 'VantraOS',
    context: 'NASTP / DUET RPDU Ecosystem',
    period: 'Active — [Editable Dates]',
    type: 'Featured Startup Role',
    featured: true,
    description:
      'Contributing to product development and scaling workflows for a deployed cloud operating system serving modern banquet and hospitality operations.',
    highlights: [
      'Working on real-world product engineering and feature delivery within a live SaaS environment.',
      'Collaborating inside the NASTP and DUET RPDU startup ecosystem.',
      'Aligning software implementation with practical business and operational requirements.',
    ],
  },
  {
    role: 'Web Development Intern',
    organization: 'Coretech Innovations',
    context: 'Web Engineering Internship',
    period: '2026 — [Editable Exact Dates]',
    type: 'Internship',
    featured: false,
    repoUrl: 'https://github.com/Zaryabghumman2003-debug/-coretech-web-internship',
    description:
      'Completed structured web development sprint tasks covering semantic HTML, responsive CSS Flexbox/Grid layouts, and Git/GitHub engineering workflows.',
    highlights: [
      'Built responsive web portfolio interfaces using semantic HTML5 and modular CSS layouts.',
      'Practiced disciplined Git branching, commits, and documentation workflows.',
      'Awarded Web Development Internship Certificate upon completion.',
    ],
  },
  {
    role: 'Intern',
    organization: 'Provincial Ombudsman Sindh',
    context: 'Public Sector / Institutional Internship',
    period: '[Editable Dates]',
    type: 'Internship',
    featured: false,
    description:
      'Gained institutional and administrative technology exposure supporting digital workflows and office operations.',
    highlights: [
      'Supported day-to-day operational and documentation processes in a formal public-sector environment.',
      'Strengthened professional communication, reporting, and organizational discipline.',
    ],
  },
  {
    role: 'IT Intern',
    organization: 'Alkhidmat Karachi',
    context: 'Information Technology & Operations',
    period: '[Editable Dates]',
    type: 'Internship',
    featured: false,
    description:
      'Contributed to IT support and technical operations within one of Karachi’s largest social welfare organizations.',
    highlights: [
      'Assisted with IT infrastructure, troubleshooting, and operational systems support.',
      'Applied technical problem-solving in a fast-paced community and organizational setting.',
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 'kaamify',
    title: 'Kaamify Web Platform',
    subtitle: 'Gated-Community Home Services Marketplace',
    category: 'Marketplace & Local Commerce',
    businessValue:
      'Connects residents in Karachi gated communities with verified technicians through structured society-level service discovery.',
    description:
      'Full-stack web platform for Karachi’s gated-community home services marketplace (Naya Nazimabad, Saima Arabian Villas, Gulshan-e-Iqbal, DHA), featuring society explorers, service catalogs, and verified provider directories.',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Supabase SSR'],
    githubUrl: 'https://github.com/Zaryabghumman2003-debug/Kaamify-Web',
    repoStatus: 'Public GitHub Repository',
    highlights: [
      'Society-targeted discovery routes (/services, /societies, /providers, /search).',
      'Clean B2C marketplace structure designed for trust and rapid service booking.',
      'Built on Next.js App Router with Supabase SSR architecture.',
    ],
    accent: 'sky',
  },
  {
    id: 'regulariq',
    title: 'RegularIQ',
    subtitle: 'Compliance Management Application',
    category: 'Enterprise & Compliance',
    businessValue:
      'Helps organizations centralize regulatory checklists, reduce manual audit gaps, and maintain clear operational accountability.',
    description:
      'A structured compliance management application designed to help organizations organize regulatory tracking, checklists, and operational compliance workflows cleanly.',
    stack: ['Web Application', 'Compliance Workflows', 'Database Management'],
    githubUrl: null, // [Editable] Add GitHub URL when public
    repoStatus: 'Repository Link Editable in portfolioData.js',
    highlights: [
      'Centralized compliance tracking and structured checklist organization.',
      'Built to reduce manual oversight gaps in operational compliance workflows.',
      'Clean dashboard-driven presentation for rapid status review.',
    ],
    accent: 'indigo',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'Task & Workflow Management Platform',
    category: 'Operations & Productivity',
    businessValue:
      'Equips teams and professionals with priority analytics, workflow charts, and portable JSON backup without server friction.',
    description:
      'A full-featured task management web application featuring authentication flows, an analytics dashboard with priority distribution, inline task editing, and JSON data portability.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'localStorage'],
    githubUrl: 'https://github.com/Zaryabghumman2003-debug/Portfolio-Task-Flow-APP',
    repoStatus: 'Public GitHub Repository',
    highlights: [
      'Dashboard with total/completed/pending/overdue counters and progress ring.',
      'Full CRUD with real-time search, priority/status filters, and keyboard shortcuts (Ctrl+N, Ctrl+/).',
      'Dark/light mode toggle plus JSON export and import for persistent local storage.',
    ],
    accent: 'violet',
  },
  {
    id: 'nexus',
    title: 'Nexus (Sonic Nexus)',
    subtitle: 'Community & Social Platform Prototype',
    category: 'Scalable Frontend Architecture',
    businessValue:
      'Demonstrates full community engagement infrastructure—feeds, interactive polls, messaging, moderation, and monetization UI.',
    description:
      'Modern social networking platform prototype built with React and Tailwind CSS featuring a dynamic feed, stories, interactive polls, messaging, an in-app AI companion, and moderation panels.',
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Lucide Icons'],
    githubUrl: 'https://github.com/Zaryabghumman2003-debug/Nexus-Social-Media-App',
    repoStatus: 'Public GitHub Repository',
    highlights: [
      'Centralized React Context + useReducer state architecture.',
      'Includes feeds, user profiles, polls, stories, real-time-style messaging, and media editing.',
      'Integrated in-app AI companion, content moderation, and security UI panels.',
    ],
    accent: 'cyan',
  },
  {
    id: 'object-detection',
    title: 'Object Detection System',
    subtitle: 'Real-Time Computer Vision Pipeline',
    category: 'AI & Computer Vision',
    businessValue:
      'Provides automated visual detection and frame-level annotation adaptable to retail, security, or operational monitoring workflows.',
    description:
      'Computer vision application built with Python, YOLO, and OpenCV to detect, classify, and annotate objects across visual feeds with bounding-box inference.',
    stack: ['Python', 'YOLO', 'OpenCV'],
    githubUrl: 'https://github.com/Zaryabghumman2003-debug/Object-detection-System',
    repoStatus: 'Public GitHub Repository',
    highlights: [
      'Integrates YOLO object detection models with OpenCV frame processing.',
      'Real-time bounding box visualization and class confidence labeling.',
      'Modular Python codebase ready for webcam or video-stream inputs.',
    ],
    accent: 'sky',
  },
  {
    id: 'smart-study-planner',
    title: 'Smart Study Planner',
    subtitle: 'AI-Assisted Planning & Scheduling',
    category: 'AI Integration',
    businessValue:
      'Applies AI-assisted scheduling logic to break down complex timelines into structured, actionable daily execution blocks.',
    description:
      'An intelligent planning application incorporating AI-assisted scheduling and organization to structure coursework, deadlines, and preparation plans.',
    stack: ['AI Integration', 'JavaScript', 'Web UI'],
    githubUrl: null, // [Editable] Add GitHub URL when public
    repoStatus: 'Repository Link Editable in portfolioData.js',
    highlights: [
      'AI-supported plan structuring around subjects and target timelines.',
      'Focuses on actionable daily sessions and clear prioritization.',
      'Clean interface designed for consistent daily execution.',
    ],
    accent: 'emerald',
  },
];

export const GITHUB_CONFIG = {
  username: 'Zaryabghumman2003-debug',
  profileUrl: 'https://github.com/Zaryabghumman2003-debug',
  // Verified public repositories from GitHub API used as instant initial/fallback data
  fallbackRepos: [
    {
      name: 'Kaamify-Web',
      html_url: 'https://github.com/Zaryabghumman2003-debug/Kaamify-Web',
      description: 'Karachi gated-community home services marketplace built with Next.js 15, TypeScript, Tailwind CSS & Supabase.',
      language: 'TypeScript',
      category: 'Business & SaaS',
    },
    {
      name: 'Brand-Builder',
      html_url: 'https://github.com/Zaryabghumman2003-debug/Brand-Builder',
      description: 'Building our brands — brand development web application with Vite, TypeScript & server integration.',
      language: 'TypeScript',
      category: 'Business & SaaS',
    },
    {
      name: 'Data-Visualizer',
      html_url: 'https://github.com/Zaryabghumman2003-debug/Data-Visualizer',
      description: 'Visualization of Data — interactive analytics & charting web application.',
      language: 'TypeScript',
      category: 'Business & SaaS',
    },
    {
      name: 'Portfolio-Task-Flow-APP',
      html_url: 'https://github.com/Zaryabghumman2003-debug/Portfolio-Task-Flow-APP',
      description: 'TaskFlow — Complete task management web application with analytics dashboard & JSON sync.',
      language: 'JavaScript',
      category: 'Business & SaaS',
    },
    {
      name: 'Nexus-Social-Media-App',
      html_url: 'https://github.com/Zaryabghumman2003-debug/Nexus-Social-Media-App',
      description: 'Sonic Nexus — Full social platform prototype with feed, polls, messaging & AI companion.',
      language: 'JavaScript',
      category: 'Web & UI',
    },
    {
      name: 'Tie-Breaker',
      html_url: 'https://github.com/Zaryabghumman2003-debug/Tie-Breaker',
      description: 'A decision-making web application built with Vite, TypeScript & server backend.',
      language: 'TypeScript',
      category: 'Web & UI',
    },
    {
      name: 'Object-detection-System',
      html_url: 'https://github.com/Zaryabghumman2003-debug/Object-detection-System',
      description: 'Real-time object detection pipeline built with Python, YOLO, and OpenCV.',
      language: 'Python',
      category: 'AI & Systems',
    },
    {
      name: 'OS_Simulator',
      html_url: 'https://github.com/Zaryabghumman2003-debug/OS_Simulator',
      description: 'EduOS — Interactive browser & Electron operating system simulator built with React & Vite.',
      language: 'TypeScript',
      category: 'AI & Systems',
    },
    {
      name: '-coretech-web-internship',
      html_url: 'https://github.com/Zaryabghumman2003-debug/-coretech-web-internship',
      description: 'CoreTech Web Development Internship sprint deliverables and responsive UI tasks.',
      language: 'HTML',
      category: 'Web & UI',
    },
  ],
};

export const SKILLS_DATA = [
  {
    category: 'Programming',
    items: ['Python', 'PHP', 'C++'],
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Web & Platforms',
    items: ['WordPress', 'Firebase'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Development Tools',
    items: ['GitHub', 'Oracle APEX'],
  },
  {
    category: 'AI & Computer Vision',
    items: ['YOLO', 'OpenCV'],
  },
  {
    category: 'Other',
    items: ['Adobe Photoshop', 'MS Office'],
  },
];

export const EDUCATION_DATA = [
  {
    institution: 'Dawood University of Engineering and Technology (DUET)',
    degree: 'BS Computer Science',
    period: '2024 – 2028 (Expected)',
    location: 'Karachi, Pakistan',
    details:
      'Undergraduate studies in Computer Science alongside active involvement in DUET RPDU and campus technical communities.',
  },
  {
    institution: 'WAPDA Cadet College Tarbela',
    degree: 'Intermediate (Higher Secondary)',
    period: '2021 – 2023',
    location: 'Tarbela, Pakistan',
    details:
      'Completed intermediate education in a disciplined cadet college environment, building leadership and analytical foundations.',
  },
];

export const ACHIEVEMENTS_DATA = [
  {
    title: 'Web Development Internship Certificate',
    issuer: 'Coretech Innovations',
    year: '2026',
    type: 'Certification',
  },
  {
    title: 'Participant & Presenter',
    issuer: 'IEEE Expo 2025',
    year: '2025',
    type: 'Expo & Presentation',
  },
  {
    title: 'Certificate of Appreciation',
    issuer: "Procom'26",
    year: '2026',
    type: 'Recognition',
  },
  {
    title: 'Volunteer',
    issuer: 'AI International Conference',
    year: 'Verified CV Entry',
    type: 'Conference',
  },
];
