export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Mobile Application Developer",
  subtitle: "React Native Engineer for Cross-Platform Mobile Apps",
  description:
    "Results-driven mobile application developer with 5+ years of experience building modern iOS and Android products. I focus on React Native, scalable architecture, native integrations, and polished user experiences for real-world business applications.",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Key Projects" },
    { value: "2", label: "Platforms" },
    { value: "18+", label: "Core Technologies" },
    // { value: "2", label: "Product Companies" },
  ],
  ctas: [
    {
      label: "View Portfolio",
      href: "#portfolio",
      variant: "btn-primary",
      iconClass: "fas fa-eye",
    },
    {
      label: "Get In Touch",
      href: "#contact",
      variant: "btn-secondary",
      iconClass: "fas fa-envelope",
    },
    {
      label: "Download Resume",
      href: "/umer-nawaz-resume.pdf",
      variant: "btn-secondary",
      iconClass: "fas fa-download",
      download: true,
    },
  ],
};

export const about = {
  title: "About Me",
  subtitle: "A snapshot of my skills, passion, and professional journey",
  heading: "Hello, I'm Umer Nawaz.",
  imageAlt: "Umer Nawaz",
  paragraphs: [
    "I am a mobile application developer focused on building fast, scalable, and production-ready cross-platform apps with React Native. My work spans fintech, IoT, warehouse systems, telehealth, HRMS, POS, and subscription-based products.",
    "I enjoy solving product and engineering problems through clean architecture, thoughtful state management, native module integration, and strong collaboration with design, backend, QA, and product teams.",
    "Across my roles, I have delivered apps with real-time tracking, push notifications, deep linking, biometric authentication, offline sync, WebRTC, Socket.io, Firebase, and Turbo Modules for Android and iOS.",
  ],
  competencies: [
    { name: "React Native", iconClass: "fas fa-mobile-screen-button" },
    { name: "React JS", iconClass: "fab fa-react" },
    { name: "JavaScript", iconClass: "fas fa-code" },
    { name: "TypeScript", iconClass: "fas fa-file-code" },
    { name: "Redux / Redux-Saga", iconClass: "fas fa-diagram-project" },
    { name: "Zustand", iconClass: "fas fa-layer-group" },
    { name: "Context API", iconClass: "fas fa-cubes-stacked" },
    { name: "Firebase", iconClass: "fas fa-fire" },
    { name: "Turbo Modules", iconClass: "fas fa-plug-circle-bolt" },
    { name: "React Navigation", iconClass: "fas fa-route" },
    { name: "Deep Linking", iconClass: "fas fa-link" },
    { name: "Push Notifications", iconClass: "fas fa-bell" },
    { name: "REST APIs / GraphQL", iconClass: "fas fa-network-wired" },
    { name: "Socket.io", iconClass: "fas fa-comments" },
    { name: "WebRTC", iconClass: "fas fa-video" },
    { name: "In-App Purchases", iconClass: "fas fa-cart-shopping" },
    { name: "Git", iconClass: "fab fa-git-alt" },
  ],
  education: [
    {
      degree: "M.Sc Computer Science",
      school: "Punjab University College of Information Technology, Lahore",
      schoolUrl:
        "https://pu.edu.pk/home/faculty/24/Computing---Information-Technology",
      years: "10/2018 - 08/2020",
      detail: "CGPA: 2.92",
    },
    {
      degree: "B.Sc Computer Science",
      school: "Islamia University Bahawalpur",
      schoolUrl: "https://www.iub.edu.pk/",
      years: "08/2014 - 08/2016",
      detail: "Sadiqabad",
    },
  ],
};

export const experience = [
  {
    years: "03/2025 - Present",
    role: "Sr. Software Engineer",
    company: "TEKHQS",
    companyUrl: "https://tekhqs.com/",
    location: "Lahore",
    description:
      "Leading React Native delivery for fintech and IoT products, with a focus on native integrations, scalable state architecture, and secure mobile experiences.",
    highlights: [
      "Built MyDriverBook, a driver tracking application integrated with Jimi ELD devices for real-time activity monitoring and HOS compliance.",
      "Bridged native Jimi SDK functionality from Android and iOS into React Native through Turbo Modules for seamless cross-platform support.",
      "Worked on a blockchain wallet integration that enables secure cryptocurrency sending and receiving across a blockchain network.",
      "Implemented Zustand with REST APIs and Firebase to create a lightweight global state architecture with real-time synchronization.",
      "Built secure financial-app authentication flows including biometric login and collaborated closely with product, design, and backend teams.",
    ],
  },
  {
    years: "12/2020 - 03/2025",
    role: "Software Engineer",
    company: "Techverx",
    companyUrl: "https://www.techverx.com/",
    location: "Lahore",
    description:
      "Built and scaled production React Native applications across multiple domains, delivering polished UX, stable integrations, and maintainable mobile codebases.",
    highlights: [
      "Designed and developed cross-platform mobile applications with responsive UI, native-like behavior, and consistent experiences across iOS and Android.",
      "Integrated REST APIs and backend services with strong handling for async data flows, caching, error states, and optimistic UI updates.",
      "Implemented product-critical features including navigation systems, push notifications, deep linking, analytics, and real-time communication.",
      "Worked in Agile and Scrum teams with design, QA, backend, and product stakeholders while maintaining strong ownership and delivery discipline.",
      "Shipped solutions across warehouse management, telehealth, HRMS, POS, music streaming, training, crypto, and 360 media products.",
    ],
  },
];

export const portfolioProjects = [
  {
    title: "MyDriverBook",
    category: "Driver Tracking & ELD Integration",
    description:
      "Cross-platform React Native app for driver activity, trip data, and compliance workflows with Jimi ELD device integration and Turbo Module bridges for native Android and iOS.",
    tags: [
      "Turbo Modules",
      "Jimi ELD",
      "Real-time Tracking",
      "Compliance",
      "Native SDK Bridge",
    ],
    badge: "MDB",
    accent: "accent-blue",
  },
  {
    title: "Magic WMS",
    category: "Warehouse Management System",
    description:
      "Mobile warehouse solution for inbound and outbound operations with dynamic forms, real-time tracking, and API-driven inventory, shipment, and order synchronization.",
    tags: [
      "Warehouse Tracking",
      "Inventory APIs",
      "Order Processing",
      "Shipment Sync",
      "Real-time Updates",
    ],
    badge: "WMS",
    accent: "accent-emerald",
  },
  {
    title: "Komiti",
    category: "Group Savings & Crypto Payouts",
    description:
      "Savings-circle application with weekly and monthly payout cycles, group contributions, MetaMask wallet integration, and real-time group activity updates.",
    tags: [
      "Fintech",
      "MetaMask",
      "Crypto Wallet",
      "Group Contributions",
      "Real-time Updates",
      "Savings Circle",
      "Payout Cycles",
    ],
    iconClass: "fas fa-coins",
  },
  {
    title: "Wellness Checker",
    category: "Wellness & Health Tracking",
    description:
      "React Native application for wellness assessments, health check workflows, and backend-powered synchronization for Android and iOS users.",
    tags: [
      "Wellness Monitoring",
      "Questionnaire Flows",
      "Geo-Fencing",
      "Push Notifications",
      "Fall Detection",
      "Video Calling",
      "In-App Messaging",
      "Quick Notes",
    ],
    iconClass: "fas fa-heart-pulse",
  },
  {
    title: "Crootive",
    category: "HRMS & Attendance",
    description:
      "HRMS mobile app with attendance, check-in/check-out, break tracking, employee request forms, and role-based manager approval workflows with real-time status updates.",
    tags: [
      "HRMS",
      "Attendance",
      "Role-Based Access",
      "Request Forms",
      "Approval Workflow",
    ],
    badge: "HR",
    accent: "accent-violet",
  },
  {
    title: "Friday POS",
    category: "Point of Sale System",
    description:
      "React Native POS system for fine dining and takeaway operations with offline LAN connectivity, online-offline synchronization, and efficient order workflows.",
    tags: [
      "POS",
      "Offline Mode",
      "LAN Sync",
      "Inventory Sync",
      "Order Management",
      "Takeaway",
      "Fine Dining",
      "Online-Offline Sync",
    ],
    badge: "POS",
    accent: "accent-gold",
  },
  {
    title: "The Pusic",
    category: "Music Streaming Platform",
    description:
      "Cross-platform music streaming application with YouTube integration, playlists, subscriptions, scheduled playback automation, and prayer-time pause and play controls.",
    tags: [
      "YouTube Integration",
      "Subscriptions",
      "Scheduling",
      "Playlist Management",
      "Prayer Time Controls",
    ],
    iconClass: "fas fa-music",
  },
  {
    title: "Quure",
    category: "Telehealth & EMR Platform",
    description:
      "Telemedicine application with EMR workflows, real-time Socket.io chat, file attachments, video consultations, and targeted push notifications via Pusher Beams.",
    tags: [
      "Telehealth",
      "EMR",
      "In-App Messaging",
      "Video Consultations",
      "Push Notifications",
      "Medical Records",
      "Doctor Consultation",
      "OCR",
    ],
    badge: "EMR",
    accent: "accent-pink",
  },
  {
    title: "Elevate PRO5+",
    category: "Athletic Training Platform",
    description:
      "Training platform for baseball and softball athletes featuring premium subscriptions, tutorial video access, live virtual coaching sessions, and real-time chat.",
    tags: [
      "Athlete Development",
      "Coaching Platform",
      "In-App Subscriptions",
      "Video Training",
      "Real-time Chat",
      "Premium Content",
      "Video Calling",
    ],
    badge: "PRO",
    accent: "accent-cobalt",
  },
  {
    title: "VPIX Motor Street 360",
    category: "360 Vehicle Showcase",
    description:
      "Interactive app for capturing, publishing, and exploring 360-degree vehicle views with a video-to-panorama pipeline and user-friendly publishing flows.",
    tags: [
      "Automotive",
      "Vehicle Showcase",
      "Media Processing",
      "Publishing Workflow",
      "Panorama Generation",
    ],
    iconClass: "fas fa-car-side",
  },
];

export const contact = {
  title: "Let's Work Together",
  subtitle:
    "If you need a React Native engineer for cross-platform apps, native integrations, or production mobile features, let's connect.",
  heading: "Get In Touch",
  description:
    "I'm open to discussing mobile engineering roles, freelance work, and product collaborations. I can help with React Native app development, architecture, native SDK integrations, real-time features, and polished iOS and Android delivery.",
  methods: [
    {
      label: "Email",
      value: "warraichumer95@gmail.com",
      href: "mailto:warraichumer95@gmail.com",
      iconClass: "fas fa-envelope",
    },
    {
      label: "Phone",
      value: "+92 304 4100995",
      href: "tel:+923044100995",
      iconClass: "fas fa-phone",
    },
    {
      label: "LinkedIn",
      value: "Let's get connected",
      href: "https://linkedin.com/in/umer-warraich-aab0891b1",
      iconClass: "fab fa-linkedin",
    },
    {
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#contact",
      iconClass: "fas fa-location-dot",
    },
  ],
  closing: "Thanks for visiting my portfolio.",
};
