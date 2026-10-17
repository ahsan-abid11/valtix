export const mobileHeroStats = [
  { value: '60 FPS', label: 'Fluid Animation Rates', sub: 'Native thread execution' },
  { value: 'iOS & Android', label: 'Cross-Platform Parity', sub: 'Single unified codebase' },
  { value: '100% Offline', label: 'Local SQLite Sync', sub: 'Zero connection drops' },
  { value: 'Enterprise Grade', label: 'Biometrics & Security', sub: 'FaceID, TouchID & AES-256' }
];

export const mobileArchitectureFeatures = [
  {
    id: 'offline-sync',
    badge: 'CORE ENGINE',
    title: 'Offline-First Local Data Sync',
    tagline: 'Zero-interruption field operations',
    desc: 'Equipped with SQLite, WatermelonDB, and background conflict-resolution engines so your mobile sales force and warehouse staff stay productive in basements, flights, and remote sites.',
    metrics: ['Local SQLite DB', 'Delta Sync Engine', 'Conflict-Free State'],
    icon: 'offline'
  },
  {
    id: 'biometric-security',
    badge: 'BANK-GRADE DEFENSE',
    title: 'Hardware-Enclave Biometric Security',
    tagline: 'FaceID, TouchID & Secure KeyStore',
    desc: 'Protect executive and transactional apps with device-level encryption, multi-factor token refreshes, certificate pinning, and automatic session revocation upon root or jailbreak detection.',
    metrics: ['Keychain / KeyStore', 'Biometric Auth', 'SSL Pinning'],
    icon: 'shield'
  },
  {
    id: 'push-telemetry',
    badge: 'ENGAGEMENT & OPS',
    title: 'Smart Push Notifications & Real-Time Events',
    tagline: 'Targeted operational alerts via APNs & FCM',
    desc: 'Deliver transactional approvals, inventory reorder triggers, dispatch assignments, and interactive action buttons straight to your executive team’s notification trays in milliseconds.',
    metrics: ['FCM & APNs Engine', 'Interactive Actions', 'Background Telemetry'],
    icon: 'bell'
  },
  {
    id: 'hardware-integration',
    badge: 'IOT & PERIPHERALS',
    title: 'Hardware Camera, BLE & GPS Tracking',
    tagline: 'Barcode scanners, thermal printers & geotags',
    desc: 'Turn standard smartphones into rugged industrial scanners. Direct camera barcode scanning, Bluetooth POS receipt printing, and route geofencing designed for drivers and warehouse workers.',
    metrics: ['Live Geofencing', 'BLE Peripheral Sync', '1D/2D Barcode Scanning'],
    icon: 'hardware'
  }
];

export const mobileInteractivePlatforms = [
  {
    id: 'react-native',
    name: 'React Native & Expo Enterprise',
    badge: 'RECOMMENDED FOR SMES & SCALE-UPS',
    lead: 'Native 60fps performance on both iOS and Android from one unified, maintainable TypeScript codebase.',
    timeframe: '6 – 10 Weeks to Store',
    highlights: [
      'Shared business logic across web and mobile',
      'Over-the-air (OTA) hotfix updates via EAS',
      'Native Swift and Kotlin bridges when required',
      'Lower total cost of ownership and single engineer team'
    ],
    tech: ['TypeScript', 'React Native', 'Expo EAS', 'Hermes Engine'],
    bestFor: 'B2B client portals, sales companion apps, and transactional e-commerce'
  },
  {
    id: 'swift-kotlin',
    name: 'Pure Native iOS (Swift) & Android (Kotlin)',
    badge: 'MAXIMUM HARDWARE PERFORMANCE',
    lead: 'Purpose-engineered when every microsecond of hardware acceleration, CoreML, and specialized sensor interaction counts.',
    timeframe: '10 – 16 Weeks to Store',
    highlights: [
      'Direct access to newest Apple and Google SDKs day one',
      'Maximum battery and memory efficiency',
      'Complex custom 3D rendering and CoreGraphics pipelines',
      'Deep background daemon execution'
    ],
    tech: ['Swift UI', 'Kotlin Jetpack Compose', 'Metal / Vulkan', 'Room DB'],
    bestFor: 'Industrial hardware diagnostics, intensive graphic pipelines, and specialized driver equipment'
  },
  {
    id: 'flutter',
    name: 'Flutter Engine (Dart)',
    badge: 'PIXEL-PERFECT UI CANVAS',
    lead: 'Self-rendered Skia / Impeller canvas ensuring exactly matching pixel perfection across legacy and new device displays.',
    timeframe: '8 – 12 Weeks to Store',
    highlights: [
      'Identical pixel UI rendering across all screen sizes',
      'Extensive visual widget customization',
      'Rapid interactive prototype iterations',
      'Solid multi-platform desktop expansion'
    ],
    tech: ['Flutter', 'Dart', 'Impeller Engine', 'Bloc / Riverpod'],
    bestFor: 'Design-centric consumer experiences and cross-platform desktop/mobile companion apps'
  }
];

export const mobileProcessLifecycle = [
  {
    step: '01',
    phase: 'Architecture & UX',
    title: 'Figma Prototyping & Flow Mapping',
    desc: 'Wireframing user journeys, ergonomics, touch zones, offline state models, and design tokens matching the Valtix design aesthetic.',
    deliverable: 'Clickable Prototype & Architecture Spec'
  },
  {
    step: '02',
    phase: 'Core Build',
    title: 'Engine & Backend Integration',
    desc: 'Setting up secure REST/GraphQL connectors, SQLite caching layers, biometric auth handshakes, and state management.',
    deliverable: 'Functional Alpha Build'
  },
  {
    step: '03',
    phase: 'Testing & QA',
    title: 'Multi-Device TestFlight & Firebase Lab',
    desc: 'Automated testing across multiple screen sizes, low-bandwidth 3G emulation, battery drain audits, and memory leak verification.',
    deliverable: 'Security & Performance Audit'
  },
  {
    step: '04',
    phase: 'Deployment',
    title: 'App Store & Google Play Submission',
    desc: 'Handling Apple App Store Review guidelines, Google Play 14-day production testing tracks, privacy declarations, and signing keys.',
    deliverable: 'Live Production Store Links'
  },
  {
    step: '05',
    phase: 'Lifecycle',
    title: 'Continuous OTA & OS Compatibility',
    desc: 'Proactive updates for new iOS and Android releases, crash telemetry tracking, and seamless over-the-air hotfixes.',
    deliverable: 'Active SLA & Crashlytics Monitoring'
  }
];

export const mobileFaqs = [
  {
    question: 'How long does it take to get an app onto the Apple App Store and Google Play?',
    answer: 'A standard custom business app typically takes 6 to 10 weeks from initial wireframes to store approval. We handle Apple TestFlight distributions, certificate signing, App Store Review compliance, and Google Play production policies end-to-end.'
  },
  {
    question: 'Do we own the full source code and App Store developer accounts?',
    answer: 'Yes, 100%. All source code, repository commits, signing certificates, and deployment scripts belong exclusively to your company. We publish directly under your company’s Apple Developer and Google Play Console accounts.'
  },
  {
    question: 'Can the mobile app connect to our existing ERP or accounting system?',
    answer: 'Absolutely. We specialize in building secure REST and GraphQL API connectors to Oracle APEX, PostgreSQL, Zoho, custom ERPs, and cloud database backends with token-based JWT authentication.'
  },
  {
    question: 'What happens if a user loses internet connectivity while using the app?',
    answer: 'Our apps are architected offline-first. Transactions, invoices, or field inspections are saved securely to a local encrypted SQLite database on the device, and automatically synchronize back to the server as soon as connection is restored.'
  },
  {
    question: 'Will our mobile app require monthly subscriptions per user?',
    answer: 'No. Valtix builds custom bespoke software. You do not pay monthly per-seat licensing fees for your staff or customers to use the application.'
  }
];
