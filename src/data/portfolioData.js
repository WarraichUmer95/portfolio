export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Flutter Developer",
  subtitle: "Cross-Platform Mobile App Specialist",
  description:
    "Passionate about creating beautiful, performant mobile applications that work seamlessly across iOS and Android platforms. Specialized in Flutter development with expertise in modern app architecture and user experience design.",
  stats: [
    { value: "20", label: "Applications Created" },
    { value: "12", label: "Live Applications" },
    { value: "2", label: "Platforms" },
    { value: "6", label: "Industry Sectors" },
    { value: "100%", label: "Client Satisfaction" },
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
      label: "Download CV",
      href: "cv.pdf",
      variant: "btn-secondary",
      iconClass: "fas fa-download",
      download: true,
    },
  ],
};

export const about = {
  title: "About Me",
  subtitle: "A snapshot of my skills, passion, and professional journey",
  heading: "Hello, I'm Gohar Zafar.",
  imageAlt: "Gohar Zafar",
  paragraphs: [
    "I'm a dedicated and results-driven Flutter developer with a deep passion for building cross-platform mobile applications that are both beautiful and highly functional. My journey in software development is fueled by a desire to solve complex problems and create intuitive, user-centric experiences.",
    "With a focus on clean, scalable code and modern architecture patterns like BLoC and Riverpod, I deliver applications that not only meet technical requirements but also provide a seamless and enjoyable experience for the end-user. I'm a lifelong learner, always eager to explore the latest advancements in the Flutter ecosystem and mobile development best practices.",
    "My collaborative spirit and strong communication skills enable me to work effectively in team environments, ensuring projects are delivered on time and to the highest standard of quality.",
  ],
  competencies: [
    { name: "Flutter Framework", iconClass: "fas fa-mobile-screen-button" },
    { name: "Dart Programming", iconClass: "fas fa-code" },
    { name: "State Management (BLoC/Riverpod)", iconClass: "fas fa-diagram-project" },
    { name: "Firebase & Firestore", iconClass: "fas fa-fire" },
    { name: "REST APIs & GraphQL", iconClass: "fas fa-network-wired" },
    { name: "Real-time Applications", iconClass: "fas fa-chart-line" },
    { name: "UI/UX Implementation", iconClass: "fas fa-palette" },
    { name: "CI/CD & DevOps", iconClass: "fas fa-gears" },
  ],
};

export const experience = [
  {
    years: "2025 - Present",
    role: "Senior Flutter Developer",
    company: "ZRRTech Solutions Pvt Ltd.",
    description:
      "Leading the development of complex, cross-platform mobile applications for enterprise clients. Architecting scalable solutions, mentoring junior developers, and implementing advanced features like real-time data synchronization and complex animations.",
  },
  {
    years: "2024 - 2025",
    role: "Mid-Level Flutter Developer",
    company: "Blue World City",
    description:
      "Developed and maintained several e-commerce and logistics applications using Flutter. Collaborated with UI/UX designers to translate wireframes into high-quality code and integrated with various third-party APIs for payments and analytics.",
  },
  {
    years: "2024 - 2025",
    role: "Remote Flutter Developer",
    company: "Qodix Labs Pvt Ltd.",
    description:
      "Developed and maintained several e-commerce and logistics applications using Flutter. Collaborated with UI/UX designers to translate wireframes into high-quality code and integrated with various third-party APIs for payments and analytics.",
  },
  {
    years: "2023 - 2024",
    role: "Junior Android Developer",
    company: "Vitalblaze Pvt Ltd.",
    location: "UK Based",
    description:
      "Gained foundational experience in mobile development, working on various small-scale projects. Assisted in bug fixing, feature implementation, and contributed to the full software development lifecycle.",
  },
  {
    years: "2021 - 2023",
    role: "Junior Android Developer",
    company: "Vaspert Tech Pvt Ltd.",
    description:
      "Gained foundational experience in mobile development, working on various small-scale projects. Assisted in bug fixing, feature implementation, and contributed to the full software development lifecycle.",
  },
];

export const portfolioProjects = [
  {
    title: "TradeMe AE",
    category: "Auction & Bidding Platform",
    description:
      "A comprehensive UAE-based auction and bidding platform that enables users to participate in live auctions, place real-time bids, and manage their trading activities with advanced security features and seamless payment integration.",
    tags: [
      "Live Bidding",
      "Real-time Updates",
      "Secure Payments",
      "User Authentication",
      "Push Notifications",
    ],
    badge: "TM",
    accent: "accent-blue",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.trademe.ae&hl=en",
        iconClass: "fab fa-google-play",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/pk/app/trademe-ae/id6740152535",
        iconClass: "fab fa-apple",
      },
    ],
  },
  {
    title: "Khilafat Cola",
    category: "Beverages & Logistics",
    description:
      "Enterprise-grade beverages distribution application featuring 6 specialized modules for comprehensive logistics management, inventory tracking, sales analytics, and distribution network optimization for beverage companies.",
    tags: [
      "6 Modules System",
      "Inventory Management",
      "Distribution Tracking",
      "Sales Analytics",
      "Route Optimization",
    ],
    badge: "KC",
    accent: "accent-emerald",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.khilafat.cola&hl=en",
        iconClass: "fab fa-google-play",
      },
    ],
  },
  {
    title: "Unwind By Umaans",
    category: "E-Commerce Platform",
    description:
      "Modern e-commerce platform providing seamless shopping experience with intuitive product browsing, advanced search functionality, secure checkout process, and personalized recommendations for enhanced customer engagement.",
    tags: [
      "Product Catalog",
      "Secure Checkout",
      "Order Tracking",
      "Wishlist",
      "Payment Gateway",
    ],
    iconClass: "fas fa-shopping-bag",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.unwindby.umaans.unwind&hl=en",
        iconClass: "fab fa-google-play",
      },
    ],
  },
  {
    title: "Habbit Planner",
    category: "Productivity & Lifestyle",
    description:
      "Smart habit tracking and daily routine management application that helps users build positive habits, track progress with detailed analytics, set goals, and maintain consistent daily schedules with intelligent reminders.",
    tags: [
      "Habit Tracking",
      "Progress Analytics",
      "Smart Reminders",
      "Goal Setting",
      "Streak Counter",
    ],
    iconClass: "fas fa-tasks",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.hds.habittracker.routineplanner&hl=en",
        iconClass: "fab fa-google-play",
      },
    ],
  },
  {
    title: "Cut App",
    category: "Productivity & Lifestyle",
    description:
      "Enabling the users to interact vendors using AGORA SDK Audio and Video Call.",
    tags: ["Agora SDK", "Audio Call", "Video Call", "Services Application", "In-App Chat"],
    iconClass: "fas fa-scissors",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.app.cut6tium",
        iconClass: "fab fa-google-play",
      },
    ],
  },
  {
    title: "Banyan Home",
    category: "Home & Lifestyle",
    description:
      "Cross-platform home management application available on both Android and iOS, providing comprehensive tools for modern home organization, lifestyle management, and smart home integration with intuitive user interface.",
    tags: [
      "Cross-Platform",
      "Home Management",
      "Organization Tools",
      "Lifestyle Tracking",
      "Smart Integration",
    ],
    iconClass: "fas fa-home",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.banyanhome.app&hl=en",
        iconClass: "fab fa-google-play",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/banyan-home/id6743860965",
        iconClass: "fab fa-apple",
      },
    ],
  },
  {
    title: "MyLink Muslim Marriage App",
    category: "Social Networking & Matchmaking",
    description:
      "Halal Muslim marriage and matchmaking platform designed for serious relationships based on Islamic values. Features advanced matchmaking algorithms, profile verification, secure messaging, and video calling for meaningful connections.",
    tags: [
      "Halal Matchmaking",
      "Profile Verification",
      "Video Calling",
      "Secure Messaging",
      "Advanced Search",
      "Truth or Dare Games",
    ],
    badge: "ML",
    accent: "accent-pink",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.my.link.app",
        iconClass: "fab fa-google-play",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/mylink-muslim-marriage-app/id6742732774",
        iconClass: "fab fa-apple",
      },
    ],
  },
  {
    title: "Blue World City",
    category: "Real Estate & Property Management",
    description:
      "Official BWC mobile application for managing user accounts, payments, and property-related services. Provides comprehensive real estate management features with secure payment processing and account management capabilities.",
    tags: [
      "Account Management",
      "Payment Processing",
      "Property Services",
      "User Authentication",
      "Real-time Updates",
    ],
    badge: "BWC",
    accent: "accent-cobalt",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.bwc.mobile.members",
        iconClass: "fab fa-google-play",
      },
    ],
  },
  {
    title: "BWC Digital Wallet",
    category: "Financial Management & Ledger",
    description:
      "Customer-specific digital wallet application for managing dealer ledgers, financial transactions, and verification receipts. Streamlines dealer financial management with secure transaction tracking and comprehensive reporting.",
    tags: [
      "Dealer Ledger",
      "Financial Tracking",
      "Verification Receipts",
      "Transaction History",
      "Secure Payments",
    ],
    iconClass: "fas fa-wallet",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.wallet.bwc",
        iconClass: "fab fa-google-play",
      },
    ],
  },
  {
    title: "FSCS School Management",
    category: "Educational Management System",
    description:
      "Comprehensive school management application by BWC designed to streamline educational operations. Features student management, academic tracking, administrative tools, and communication systems for educational institutions.",
    tags: [
      "Student Management",
      "Academic Tracking",
      "Administrative Tools",
      "Communication System",
      "Performance Analytics",
    ],
    badge: "FS",
    accent: "accent-violet",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.forces.school",
        iconClass: "fab fa-google-play",
      },
    ],
  },
  {
    title: "FGC College Management",
    category: "Higher Education Management",
    description:
      "Advanced college management application for FGC (Forces College) providing comprehensive tools for higher education administration, student services, academic management, and institutional operations.",
    tags: [
      "College Administration",
      "Student Services",
      "Academic Management",
      "Institutional Operations",
      "Higher Education Tools",
    ],
    badge: "FGC",
    accent: "accent-gold",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.forces.college",
        iconClass: "fab fa-google-play",
      },
    ],
  },
];

export const contact = {
  title: "Let's Work Together",
  subtitle:
    "Ready to bring your mobile app idea to life? Let's discuss your project and create something amazing together.",
  heading: "Get In Touch",
  description:
    "I'm always open to discussing new opportunities, interesting projects, and potential collaborations. Whether you need a complete mobile app solution or consulting on Flutter development, I'm here to help.",
  methods: [
    {
      label: "Email",
      value: "gohar.zafar123@gmail.com",
      href: "mailto:gohar.zafar123@gmail.com",
      iconClass: "fas fa-envelope",
    },
    {
      label: "Phone",
      value: "+923081865705",
      href: "tel:+923081865705",
      iconClass: "fas fa-phone",
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/gohardev95/",
      iconClass: "fab fa-linkedin",
    },
    {
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/gohar95?tab=repositories",
      iconClass: "fab fa-github",
    },
  ],
  form: {
    fields: [
      { label: "Full Name", name: "name", type: "text" },
      { label: "Email Address", name: "email", type: "email" },
      { label: "Subject", name: "subject", type: "text" },
    ],
    messageField: {
      label: "Message",
      name: "message",
      placeholder: "Brainstorm your ideas...",
    },
    submitLabel: "Send Message",
    submitIconClass: "fas fa-paper-plane",
  },
  closing: "Looking Forward to seeing you",
};
