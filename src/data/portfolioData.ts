import {
  ProjectItem,
  ExperienceItem,
  CertificationItem,
  AcademicProfile,
} from '../types';
import profileAvatar from '../assets/images/profile_avatar_1787816690269.jpg';
import progreeCert1 from '../assets/images/progree_cert_1.png';
import progreeCert2 from '../assets/images/progree_cert_2.png';


export const PERSONAL_INFO = {
  name: 'Abdullah Shaak',
  brandName: 'ABDULLAH',
  role: 'Software Engineer & Systems Architect',
  shortBio: 'B.S. Computer Science @ AWKUM. Building high-performance, local-first applications.',
  extendedBio:
    'Specializing in complex system design, algorithmic efficiency, and creating seamless developer experiences. Transforming theoretical computer science into production-ready architecture.',
  status: 'AVAILABLE FOR ENGINEERING ROLES',
  commitsYtd: 2481,
  email: 'abdullahshaak@gmail.com',
  github: 'https://github.com/abdullah129026',
  linkedin: 'https://www.linkedin.com/in/muhammad-abdullah-shah-78227b3a3/',
  twitter: 'https://twitter.com',
  location: 'Mardan, Pakistan',
  university: 'Abdul Wali Khan University (AWKUM)',
  logoUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBtZiDk7ffsWqWu3yGnetWCaUC70rm9vkinLQ4_t-0lhprQnVsCz20BahhtLV6AMg9jEhj8fvnNnUM1lV-khzSWqhosGQrMIRgelvcmhjrWXsv6Uu8z67Q4mKuaJmD1C4PR73RQeq59BESI7YQQ9i5RpYLnwso4gh2BxZp5mUGZJbOyTD7J5BzQNvD6gdp612_4TsvbXT1aUi4GrwoWNWExih-Sv7TDEyZSdOs_rvAfHKpGgM6yxi1a',
  avatarUrl: profileAvatar,
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'competition-hub',
    title: 'CompetitionHub',
    category: 'flagship',
    stack: ['React 18', 'Fastify', 'Firebase', 'TypeScript', 'WebSockets'],
    version: 'v2.4.0',
    description:
      'Flagship machine learning competition platform. Architected for high-throughput submission evaluation, real-time leaderboards, and massive dataset distribution.',
    longDescription:
      'A full-scale competitive data science ecosystem designed to orchestrate asynchronous container execution sandboxes for algorithmic evaluation. Handles multi-gigabyte dataset sharding, streaming leaderboard compute, and high-concurrency real-time WebSocket telemetry updates.',
    highlights: [
      'Sub-50ms live leaderboard reranking via Redis Sorted Sets',
      'Sandboxed Docker executor daemon evaluating arbitrary Python code in strict namespaces',
      'Zero-copy dataset streaming over Fastify stream pipes',
      'Over 10,000 active concurrent submission loads simulated with zero socket drops',
    ],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcgtKmt84L3ga-VMZ6HlIuSbUdbafCdZxtm1LAPh2jWy_4NTrELSyoXA4hjSEFDXUh5jvEqsL6_maQh62eXD5sSV4p8LS_XYtj6TcY37zFkWTRU6UuInpKZgqh0ssRha7JMTjzEST2Zb4LQgPv3PuCSI-ZPb10JNLhKUAgB5rjp5O2nbkkXE0nYuTHiquAb105IKnT3peqyeXXXx9CW6CuIqA1Me-AdpfsWRu0rCvhPXS32Iw3fOb9',
    metrics: '99.98% Evaluation Uptime // 50k+ daily calls',
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
  {
    id: 'panacea',
    title: 'Panacea',
    subtitle: '// MULTI-TENANT PMS',
    category: 'flagship',
    stack: ['Kysely', 'PostgreSQL', 'React', 'TypeScript', 'Node.js'],
    version: 'v1.8.2',
    description:
      'Enterprise-grade Property Management System. Implements robust tenant isolation, complex access control, and comprehensive reporting pipelines.',
    longDescription:
      'A secure, multi-tenant cloud operations platform for large-scale property and hospitality portfolios. Employs Row-Level Security (RLS) policies in PostgreSQL, dynamic query building with Kysely, and automated financial transaction reconciliation.',
    highlights: [
      'Schema-level & row-level tenant boundary isolation guaranteeing zero data leakage',
      'Automated rent scheduling, ledger balancing, and audit log generation',
      'Custom React dashboard with keyboard-first data entry shortcuts and virtualized tables',
      'Integrated Stripe webhook listeners with idempotent transaction handling',
    ],
    metrics: 'Strict Tenant Isolation // SOC2 Compliant architecture',
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
  {
    id: 'expense-tracker-pwa',
    title: 'Expense Tracker PWA',
    category: 'architecture',
    version: 'v2.1.0',
    icon: 'offline_bolt',
    stack: ['ServiceWorkers', 'IndexedDB', 'React', 'Tailwind CSS'],
    description:
      'Offline-first Progressive Web App utilizing IndexedDB and Background Sync APIs to ensure seamless operation in low-connectivity environments.',
    longDescription:
      'Engineered for maximum reliability in zero-network conditions. All state transitions write instantaneously to client-side IndexedDB, queue mutations in a resilient service worker cache, and execute 2-way delta synchronization upon reconnection.',
    highlights: [
      'Zero-latency instant offline writes with optimistic UI rendering',
      'Background Sync API retries with exponential backoff on flaky cellular networks',
      'Cryptographic hash reconciliation for conflict detection',
    ],
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
  {
    id: 'query-ui-tooling',
    title: 'Query UI Tooling',
    category: 'architecture',
    version: 'v1.0.4',
    icon: 'terminal',
    stack: ['C++', 'ImGui', 'SQLite', 'DirectX/OpenGL'],
    description:
      'Custom database query interface built entirely in C++ for maximum performance and minimal memory footprint, interfacing directly with native DB drivers.',
    longDescription:
      'An ultra-lightweight desktop SQL analysis tool designed for systems engineers. Features native memory mapping (mmap), sub-5ms query parsing, and custom Dear ImGui render passes yielding 120 FPS UI performance with under 15MB total RAM usage.',
    highlights: [
      'Sub-15MB RAM footprint on gigabyte-sized result buffers',
      'Zero garbage-collection pauses due to deterministic memory allocators',
      'Direct integration with SQLite C headers and custom AST analyzer',
    ],
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
  {
    id: 'syncnotes',
    title: 'SyncNotes',
    category: 'architecture',
    version: 'v0.9.beta',
    icon: 'sync_alt',
    stack: ['WebSockets', 'Node.js', 'React', 'OT Algorithm'],
    description:
      'Real-time collaborative markdown editor implementing Operational Transformation (OT) over WebSockets for conflict-free concurrent editing.',
    longDescription:
      'A distributed collaborative document editing engine implementing text-level Operational Transformation. Employs a state-machine server authority to transform incoming intention deltas against concurrent client revisions in real time.',
    highlights: [
      'Mathematically verified convergence algorithm for multi-cursor synchronization',
      'Heartbeat connection pooling with automatic reconnection backpressure management',
      'Instant markdown AST rendering with syntax highlighting and live preview splits',
    ],
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
  {
    id: 'microlms',
    title: 'MicroLMS',
    category: 'micro',
    version: 'v1.2.0',
    stack: ['Vue', 'Express', 'Mongo', 'Tailwind'],
    description:
      'Lightweight learning management system for coding bootcamps.',
    longDescription:
      'A stripped-down, focused LMS with automated assignment test-runner webhooks, markdown lecture notes, and student progress telemetry.',
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
  {
    id: 'aerocast',
    title: 'AeroCast',
    category: 'micro',
    version: 'v1.1.0',
    stack: ['Go', 'REST', 'Cobra CLI'],
    description:
      'CLI weather application fetching aggregated data from multiple APIs.',
    longDescription:
      'Terminal weather utility compiled to a single standalone binary in Go. Fetches radar imagery, atmospheric pressure vectors, and multi-source forecasts.',
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
  {
    id: 'packet-sniffer',
    title: 'RawNet Monitor',
    category: 'micro',
    version: 'v0.8.4',
    stack: ['C', 'libpcap', 'Linux Sockets'],
    description:
      'Low-level network packet analysis utility inspecting TCP/IP header distributions.',
    longDescription:
      'Command-line packet inspection suite parsing raw socket buffers with zero-copy packet rings and ASCII protocol decoding.',
    githubUrl: 'https://github.com/abdullah129026',
    liveUrl: 'https://example.com',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'progree-inc',
    role: 'Software Eng. Intern',
    company: 'PROGREE INC.',
    period: '2022 — 2023',
    statusBadgeColor: 'bg-primary text-[#003543]',
    responsibilities: [
      'Architected and deployed microservices in Go, reducing system latency by 35% across primary data ingestion pipelines.',
      'Designed comprehensive caching layers using Redis, mitigating database load during peak traffic spikes.',
      'Collaborated with senior site reliability engineers to migrate legacy EC2 instances into orchestrated Kubernetes clusters.',
    ],
    attachments: [
      {
        title: 'ATTACHMENT: INTERNSHIP_CERTIFICATE.PDF',
        filename: 'PROGREE_INTERNSHIP_CERT_1',
        caption: 'Progree Inc. software engineering internship certificate (1)',
        altText: 'Official Progree Inc. internship completion certificate',
        imageUrl: progreeCert1,
      },
      {
        title: 'ATTACHMENT: INTERNSHIP_CERTIFICATE.PDF',
        filename: 'PROGREE_INTERNSHIP_CERT_2',
        caption: 'Progree Inc. software engineering internship certificate (2)',
        altText: 'Official Progree Inc. internship completion certificate',
        imageUrl: progreeCert2,
      },
    ],
  },
  {
    id: 'fintex-tech',
    role: 'Backend Developer Intern',
    company: 'FINTEX TECH',
    period: '2021 — 2022',
    statusBadgeColor: 'bg-[#4cd6ff] text-[#003543]',
    responsibilities: [
      'Developed robust RESTful APIs in Node.js to support mobile banking client features, adhering to strict financial compliance standards.',
      'Optimized PostgreSQL queries, resolving critical N+1 issues and improving endpoint response times by over 200ms on average.',
      'Implemented automated unit and integration testing pipelines in GitHub Actions.',
    ],
    attachments: [
      {
        title: 'ATTACHMENT: FINTEX_ARCHIVE.ZIP',
        filename: 'DATA_CENTER_ALPHA.JPG',
        caption: 'High-security financial cluster server room',
        altText:
          'A wide-angle, high-contrast architectural shot of a sleek modern server room at Fintex Tech with racks of glowing servers.',
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDMyYFJiVzZFwMLh6WQjo7n-2VnmCPoKb7e3oihYpA1nphWqJRrcfUsRZpq4JjcZaVvFtkvRkBtPSLjnMOMw24hWjhYfGxd5GHeXAyHOyv6i3qzAL7vcrJNMyKgvLjEuo72lwcg1Ad4DNCvLRw0KIcpfksP1SdDzQWDc2KC9nfLcj9hvaeXS3_M5teWyP5bdFZ4WjKFe5j3WrvMUUmUKLZx3ymT0SOs3ZWAfcPiStanLozyqwaCTg2P',
      },
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [];

export const ACADEMIC_DATA: AcademicProfile = {
  degreeType: 'Bachelor of Science',
  major: 'Computer Science',
  status: 'In Progress',
  completion: 'Expected 2027',
  university: 'Abdul Wali Khan University',
  location: 'Mardan, PK',
  years: '2023 — 2027',
  gpa: '3.88 / 4.00',
  mapImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD04IpDgNwe5Vu2vxgDcmi_GjOrVRwkVhOUz7yZGmSWxsUoeSqwWOnzFFTuFj5FGB9zFjxtDxG6DTeRIm7U78WUXfwbXW3zi9ItQ1TKfy8poMv7nv_Oy8dYk5RxNoIT9KorDUYhfGsD5TdXDEutvkvpdNVgftTMHQb7ghntt2sTz01dNSORJ627bTaF3_LueZhzZ8OZ0tLyMsZvedzfxwbbcFibX0ZIHjq7Ndfno49axGP43RmRPBlW',
  coursework: [
    {
      code: 'CS-301',
      title: 'Data Structures & Algorithms',
      description:
        'Complexity analysis, graph theory, advanced tree structures, and algorithmic optimization techniques.',
      colorClass: 'text-primary',
      tagBgClass: 'bg-primary/10 text-primary',
      icon: 'account_tree',
      topics: [
        'Asymptotic Notation & Recurrence Relations',
        'Red-Black Trees & AVL Self-Balancing Trees',
        'Dijkstra, A*, and Bellman-Ford Shortest Path',
        'Dynamic Programming & Bitmasking Techniques',
      ],
    },
    {
      code: 'CS-402',
      title: 'Operating Systems',
      description:
        'Process synchronization, memory management, file systems, and concurrency control mechanisms.',
      colorClass: 'text-secondary',
      tagBgClass: 'bg-secondary/10 text-secondary',
      icon: 'memory',
      topics: [
        'Semaphores, Mutexes & Peterson Algorithm',
        'Virtual Memory Paging & TLB Translation',
        'Deadlock Prevention & Banker Algorithm',
        'Unix VFS & Ext4 Inode In-Depth Layout',
      ],
    },
    {
      code: 'CS-350',
      title: 'Computer Networks',
      description:
        'OSI model, TCP/IP stack, routing protocols, network security, and distributed systems communication.',
      colorClass: 'text-tertiary',
      tagBgClass: 'bg-tertiary/10 text-tertiary',
      icon: 'router',
      topics: [
        'TCP 3-Way Handshake & Congestion Windows',
        'BGP & OSPF Autonomous Routing Protocols',
        'TLS 1.3 Cryptographic Handshake Specs',
        'Socket Programming in C and Buffer Ring Queues',
      ],
    },
    {
      code: 'CS-415',
      title: 'Database Systems',
      description:
        'Relational algebra, SQL, normalization, transaction processing, and NoSQL architectural paradigms.',
      colorClass: 'text-[#a4e6ff]',
      tagBgClass: 'bg-[#a4e6ff]/10 text-[#a4e6ff]',
      icon: 'database',
      topics: [
        'Boyce-Codd Normal Form (BCNF) Decomposition',
        'ACID Properties & Two-Phase Locking (2PL)',
        'B+ Tree Indexing & WAL Buffer Write Logs',
        'Vector Embeddings & Distributed LSM Trees',
      ],
    },
    {
      code: 'CS-520',
      title: 'Software Architecture',
      description:
        'Design patterns, microservices, monolithic vs distributed architectures, and system scalability principles.',
      colorClass: 'text-[#4cd6ff]',
      tagBgClass: 'bg-[#4cd6ff]/10 text-[#4cd6ff]',
      icon: 'architecture',
      topics: [
        'Event-Driven Sagas & CQRS Event Sourcing',
        'CAP Theorem Trade-Offs in Distributed State',
        'Domain-Driven Design (DDD) Bounded Contexts',
        'Hexagonal & Clean Onion Architecture Boundaries',
      ],
    },
  ],
};

export const MANIFESTO_TEXT = `
# THE ARCHITECT'S MANIFESTO

### 1. Determinism Over Ambiguity
Code is computational contract. When building distributed systems or client-side interfaces, hidden side-effects are liabilities. We prioritize explicit data flow, strict typing, and pure functional state transformations.

### 2. Local-First As A First Principle
The user’s device is not merely a dumb terminal for remote cloud servers. By treating client memory and storage (IndexedDB, OPFS) as authoritative local stores with background synchronization, applications remain instantaneous, resilient, and immune to network volatility.

### 3. Mechanical Sympathy
Software must respect the physical constraints of silicon: cache lines, memory allocation overhead, and thread concurrency. Whether structuring a database schema in PostgreSQL or rendering 60 FPS graphics in WebGL, true engineering balances clean abstraction with hardware awareness.

### 4. Zero Unnecessary Complexity
We measure architectural excellence not by how many microservices we deploy, but by how elegantly a problem is solved with minimal moving parts. Simplicity is the pinnacle of engineering discipline.
`;
