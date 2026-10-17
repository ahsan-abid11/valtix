// Valtix Custom ERP Architecture, Modules, Platforms, and Process Data

export const erpPlatforms = [
  {
    id: "custom-web-erp",
    name: "Custom Web ERP",
    tagline: "Browser-Based Enterprise Business Applications",
    desc: "Browser-based business applications designed around your workflows, reporting needs and integrations.",
    techExamples: ["React", "Next.js", "Python", "Node.js", "PostgreSQL", "MySQL", "REST APIs"],
    capabilities: [
      "Responsive browser access across desktop, tablet, and mobile",
      "Custom operational dashboards and interactive data views",
      "Business forms, transactional workflows, and multi-step approvals",
      "Granular role-based access control (RBAC)",
      "RESTful API and webhook integrations",
      "Cloud or self-hosted on-premise deployment options"
    ],
    bestFor: "Retail, distribution, service businesses and teams requiring flexible cross-device access.",
    ctaText: "Explore Custom Web ERP",
    ctaLink: "#platform-comparison"
  },
  {
    id: "oracle-apex",
    name: "Oracle APEX Development",
    tagline: "Database-Centric Enterprise Workflows",
    desc: "Database-centric enterprise applications built around Oracle Database, SQL, PL/SQL and structured business workflows.",
    techExamples: ["Oracle APEX", "Oracle Database", "PL/SQL", "Oracle REST Data Services (ORDS)", "SQL Developer"],
    capabilities: [
      "Interactive reports, analytical facets, and editable tabular grids",
      "High-throughput transaction-focused applications",
      "Automated multi-tier approval workflows and audit trails",
      "Database-backed authorization and VPD row-level security",
      "Enterprise reporting, automated exports, and audit compliance",
      "Direct integration with existing Oracle Enterprise infrastructure"
    ],
    bestFor: "Organizations with Oracle infrastructure, data-intensive operations, financial workflows and enterprise reporting requirements.",
    ctaText: "Explore Oracle APEX",
    ctaLink: "#platform-comparison"
  },
  {
    id: "native-desktop-erp",
    name: "Native Desktop ERP",
    tagline: "Keyboard-Optimized High-Volume Operational Systems",
    desc: "Desktop business applications for operational environments that benefit from keyboard-oriented workflows, local network access and specialized hardware integration.",
    techExamples: ["C# / .NET", "Oracle Client", "PostgreSQL/SQL Server", "Barcode Scanners", "Thermal Label Printers", "Weigh Scales"],
    capabilities: [
      "Keyboard-efficient rapid transaction entry with zero-latency input",
      "Dense operational forms optimized for continuous operator use",
      "High-speed warehouse, dispatch, and wholesale trade counter workflows",
      "Supported industrial hardware and peripheral serial/USB integrations",
      "Local LAN deployment with direct low-latency database connectivity",
      "Offline operation where explicitly engineered and architected"
    ],
    bestFor: "Factories, warehouses, wholesale counters and other high-volume operational environments.",
    ctaText: "Explore Desktop ERP",
    ctaLink: "#platform-comparison"
  }
];

export const platformComparisonRows = [
  {
    feature: "Primary Access Method",
    web: "Modern desktop & mobile web browsers (Chrome, Edge, Safari)",
    apex: "Web browser accessing Oracle Database via ORDS gateway",
    desktop: "Installed native desktop client (Windows / .NET execution)"
  },
  {
    feature: "Database Options",
    web: "PostgreSQL, MySQL, SQL Server, or Oracle Database",
    apex: "Oracle Database (Standard Edition, Enterprise Edition, or Autonomous)",
    desktop: "Oracle Database, SQL Server, PostgreSQL, or local data store"
  },
  {
    feature: "Deployment Options",
    web: "Cloud VPS (AWS, Azure, DigitalOcean) or private self-hosted Linux server",
    apex: "Oracle Cloud Infrastructure (OCI), private cloud, or on-premise Oracle host",
    desktop: "Local client installation connected over LAN or private VPN to central server"
  },
  {
    feature: "Hardware Integration",
    web: "Standard USB/network printers and web-compatible barcode scanners via drivers",
    apex: "Browser-level peripherals, network label printers, and web APIs",
    desktop: "Direct serial, COM, USB, industrial scales, barcode readers & thermal printers"
  },
  {
    feature: "Offline Capabilities",
    web: "Primarily connected; partial cached sync where PWA architecture is designed",
    apex: "Connected environment required for live SQL/PL/SQL database execution",
    desktop: "Offline operation supported when local caching & sync queue are designed"
  },
  {
    feature: "Integration Options",
    web: "Comprehensive REST APIs, GraphQL, webhooks, third-party SaaS connectors",
    apex: "ORDS REST web services, DB links, PL/SQL packages, external APIs",
    desktop: "TCP/IP sockets, local OS DLLs, COM ports, REST APIs, database links"
  },
  {
    feature: "Typical Business Use Cases",
    web: "Multi-branch retail, field operations, customer portals, B2B sales management",
    apex: "Financial accounting, regulatory auditing, high-volume data grids, corporate reporting",
    desktop: "Manufacturing shop-floors, logistics hubs, weighbridge stations, trade counters"
  },
  {
    feature: "Ownership Considerations",
    web: "Full custom source-code ownership; standard open-source framework stack",
    apex: "Full application schema & PL/SQL ownership; standard Oracle platform runtime",
    desktop: "Full proprietary .NET application codebase & compiled client assets"
  },
  {
    feature: "Infrastructure & Maintenance Costs",
    web: "Flexible cloud VPS hosting from modest monthly tiers; scalable resources",
    apex: "Oracle licensing or OCI cloud credits depending on deployment model",
    desktop: "Local server or private LAN infrastructure; client endpoint maintenance"
  }
];

export const businessChallenges = [
  {
    num: "01",
    title: "Scattered Spreadsheets & Duplicate Data Entry",
    problem: "Sales, inventory, and finance teams maintain separate Excel sheets, wasting hours manually copying figures and reconciling conflicting versions.",
    outcome: "Unified Central Database",
    solution: "A custom ERP consolidates all operations into a single authoritative database with automated validation, eliminating double entry."
  },
  {
    num: "02",
    title: "Limited Stock & Transaction Visibility",
    problem: "Warehouse managers cannot see incoming shipments, while sales teams promise stock that has already been dispatched elsewhere.",
    outcome: "Live Inventory Ledger",
    solution: "Automated warehouse bin tracking, multi-branch stock transfers, and real-time reserved quantity indicators prevent overselling."
  },
  {
    num: "03",
    title: "Delayed Management & Financial Reporting",
    problem: "Compiling monthly profit & loss, cash flow, or aged debtor summaries requires days of manual calculation after the cycle closes.",
    outcome: "Immediate Operational Visibility",
    solution: "Automated ledger roll-ups generate P&L, balance sheets, and custom KPI reports on demand with verifiable drill-down audit logs."
  },
  {
    num: "04",
    title: "Disconnected Departments & Stalled Approvals",
    problem: "Purchase requests, discounts, and credit memos get delayed in email chains or verbal requests without clear authorization checkpoints.",
    outcome: "Enforced Digital Workflows",
    solution: "Configurable approval matrices automatically route high-value requisitions to authorized managers with complete timestamped audit trails."
  }
];

export const erpModules = [
  {
    id: "finance",
    name: "Finance and Accounting",
    tag: "CORE LEDGER",
    desc: "Comprehensive general ledger, double-entry bookkeeping, multi-currency accounting, and statutory reporting.",
    functions: [
      "Chart of accounts customized to your industry reporting standards",
      "Accounts Receivable (AR) & Accounts Payable (AP) management",
      "Automated bank feed reconciliation and payment batch processing",
      "Multi-currency transaction posting and realized/unrealized forex tracking",
      "Automated P&L, Balance Sheet, and Trial Balance generation"
    ],
    exampleWorkflow: "PO Created → Invoice Matched → Three-Way Verification → Scheduled Payment Batch",
    compatibility: "Custom Web ERP, Oracle APEX, Native Desktop ERP",
    previewMetrics: [
      { label: "Monthly Cash Flow", val: "$248,500", highlight: true },
      { label: "AR Aging (0-30 Days)", val: "$42,100", highlight: false },
      { label: "AP Matched Rate", val: "99.4%", highlight: true }
    ],
    previewRows: [
      { ref: "JE-9041", desc: "Vendor Monthly Service Retainer", amount: "$8,500.00", status: "Posted" },
      { ref: "JE-9042", desc: "Wholesale Product Inbound Shipment", amount: "$34,220.00", status: "Posted" },
      { ref: "JE-9043", desc: "Client Retainer Direct Settlement", amount: "$14,800.00", status: "Cleared" }
    ]
  },
  {
    id: "inventory",
    name: "Inventory and Stores",
    tag: "SUPPLY CHAIN",
    desc: "Granular stock tracking across multi-location warehouses, bin racks, serial numbers, and batch expiry dates.",
    functions: [
      "Multi-warehouse and branch inventory balance monitoring",
      "Batch, lot, and serial tracking for high-value or perishable products",
      "Automated reorder triggers based on safety stock thresholds",
      "Internal stock requisitions, inter-branch transfers, and dispatch notes",
      "Cycle counting and physical stocktake variance adjustment tools"
    ],
    exampleWorkflow: "Stock Alert Triggered → Purchase Requisition → Goods Receipt Note (GRN) → Bin Allocation",
    compatibility: "Custom Web ERP, Oracle APEX, Native Desktop ERP",
    previewMetrics: [
      { label: "Total SKUs Active", val: "4,820", highlight: false },
      { label: "Fulfillment Rate", val: "99.1%", highlight: true },
      { label: "Reorder Alerts", val: "6 Pending", highlight: true }
    ],
    previewRows: [
      { ref: "STK-108", desc: "Central Warehouse Hub — Bin A4", amount: "1,420 Units", status: "Optimal" },
      { ref: "STK-204", desc: "Regional Distribution Bay 2", amount: "620 Units", status: "Optimal" },
      { ref: "PO-4091", desc: "Inbound Container Raw Materials", amount: "800 Units", status: "In Transit" }
    ]
  },
  {
    id: "sales-purchasing",
    name: "Sales and Purchasing",
    tag: "COMMERCIAL",
    desc: "End-to-end commercial pipelines from sales quotations and price lists to purchase orders and vendor evaluations.",
    functions: [
      "Quotation builder with tiered client pricing and margin calculators",
      "Sales Order processing with stock reservation checks",
      "Vendor purchase order generation with delivery milestone tracking",
      "Sales commission calculation and representative performance tracking",
      "Credit limit enforcement and overdue customer account holds"
    ],
    exampleWorkflow: "Quote Issued → Client Confirms → Sales Order Created → Stock Reserved → Delivery Dispatched",
    compatibility: "Custom Web ERP, Oracle APEX, Native Desktop ERP",
    previewMetrics: [
      { label: "Open Orders Value", val: "$182,400", highlight: true },
      { label: "Avg Cycle Time", val: "2.4 Days", highlight: false },
      { label: "Quote Conversion", val: "64.8%", highlight: true }
    ],
    previewRows: [
      { ref: "SO-8102", desc: "Industrial Machinery Parts Order", amount: "$28,400.00", status: "Dispatched" },
      { ref: "SO-8103", desc: "Commercial Client Annual Supply", amount: "$52,000.00", status: "Processing" },
      { ref: "PO-3341", desc: "Bulk Raw Steel Requisition", amount: "$19,650.00", status: "Approved" }
    ]
  },
  {
    id: "hr-payroll",
    name: "HR and Payroll",
    tag: "WORKFORCE",
    desc: "Employee master records, attendance logging, leave approval workflows, and automated payroll processing.",
    functions: [
      "Centralized staff profiles, contracts, and credential vaults",
      "Biometric or digital timesheet logging and overtime formulas",
      "Leave quota management with supervisor approval hierarchies",
      "Automated monthly payroll calculation with deductions and allowances",
      "Bank payment batch file generation (including statutory WPS files)"
    ],
    exampleWorkflow: "Timesheet Clocked → Overtime Verified → Manager Approval → Automated Payroll Batch",
    compatibility: "Custom Web ERP, Oracle APEX",
    previewMetrics: [
      { label: "Active Headcount", val: "142 Staff", highlight: false },
      { label: "Payroll Accuracy", val: "100%", highlight: true },
      { label: "Leave Requests", val: "4 Open", highlight: false }
    ],
    previewRows: [
      { ref: "PAY-OCT", desc: "Monthly Staff Payroll Disbursement", amount: "142 Staff", status: "Approved" },
      { ref: "LV-409", desc: "Annual Vacation Request (5 Days)", amount: "Operations", status: "Approved" },
      { ref: "EMP-214", desc: "Probation Milestone Performance Review", amount: "Technical", status: "Scheduled" }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing and Production",
    tag: "OPERATIONS",
    desc: "Bill of Materials (BOM), production routing, work order staging, scrap tracking, and work-in-progress valuation.",
    functions: [
      "Multi-level Bill of Materials (BOM) creation and versioning",
      "Work order scheduling, machine routing, and workstation assignments",
      "Raw material allocation and actual usage variance reporting",
      "Quality inspection checkpoints and scrap/reject categorization",
      "Work-in-progress (WIP) costing calculated into finished inventory"
    ],
    exampleWorkflow: "Sales Order → BOM Explosion → Raw Materials Allocated → Work Order Run → Finished Goods Output",
    compatibility: "Custom Web ERP, Oracle APEX, Native Desktop ERP",
    previewMetrics: [
      { label: "Active Work Orders", val: "18 Orders", highlight: true },
      { label: "Machine Uptime", val: "94.2%", highlight: false },
      { label: "WIP Valuation", val: "$114,800", highlight: true }
    ],
    previewRows: [
      { ref: "WO-502", desc: "Assembly Line Batch — Series 400", amount: "500 Units", status: "In Production" },
      { ref: "BOM-14", desc: "Standard Component Blueprint v3.1", amount: "Verified", status: "Active" },
      { ref: "QC-88", desc: "Batch Quality Assurance Inspection", amount: "Pass Rate 99.2%", status: "Cleared" }
    ]
  },
  {
    id: "reporting-analytics",
    name: "Reporting and Analytics",
    tag: "INTELLIGENCE",
    desc: "Executive cockpits, operational KPIs, scheduled exports, and parameterized management reporting.",
    functions: [
      "Real-time operational dashboards with cross-department indicators",
      "Scheduled PDF and Excel reporting delivered directly to executive inboxes",
      "Custom query builders for ad-hoc business analysis",
      "Historical sales, demand forecasting, and inventory turnover trends",
      "Department-level budget vs actual expenditure tracking"
    ],
    exampleWorkflow: "Transaction Data Captured → Live Aggregation → Executive KPI Cards → Automated PDF Export",
    compatibility: "Custom Web ERP, Oracle APEX, Native Desktop ERP",
    previewMetrics: [
      { label: "Operating Margin", val: "24.6%", highlight: true },
      { label: "Inventory Turnover", val: "6.2x / Year", highlight: true },
      { label: "Reporting Delay", val: "0 Mins (Live)", highlight: false }
    ],
    previewRows: [
      { ref: "REP-FIN", desc: "Monthly Management Financial Pack", amount: "Consolidated", status: "Generated" },
      { ref: "REP-OPS", desc: "Warehouse Dispatch Throughput Summary", amount: "4,120 Orders", status: "Optimal" },
      { ref: "REP-SAL", desc: "Regional Revenue vs Target Matrix", amount: "+14.8% YoY", status: "Exceeding" }
    ]
  },
  {
    id: "crm-supplier",
    name: "Customer and Supplier Management",
    tag: "RELATIONSHIPS",
    desc: "Unified directory of clients, trade accounts, procurement vendors, credit terms, and interaction histories.",
    functions: [
      "Consolidated client profiles with historical orders, balances, and communication",
      "Approved vendor registries with lead times and quality ratings",
      "Configurable credit limits, grace periods, and payment term rules",
      "Customer document portals for quote approvals and invoice downloads",
      "Contract renewal reminders and SLA milestone alerts"
    ],
    exampleWorkflow: "Customer Enquiry → Credit Assessment → Account Terms Approved → Ongoing Ledger History",
    compatibility: "Custom Web ERP, Oracle APEX",
    previewMetrics: [
      { label: "Managed Accounts", val: "380 Companies", highlight: false },
      { label: "On-Time Payments", val: "96.4%", highlight: true },
      { label: "Vendor Scorecard", val: "94/100", highlight: true }
    ],
    previewRows: [
      { ref: "ACT-401", desc: "Tier 1 Enterprise Client — Credit Approved", amount: "$100k Limit", status: "Active" },
      { ref: "VEN-112", desc: "Primary Component Supplier (Germany)", amount: "30-Day Terms", status: "Verified" },
      { ref: "SLA-09", desc: "Annual Maintenance Agreement Renewal", amount: "Due in 45 Days", status: "Queued" }
    ]
  },
  {
    id: "security-audit",
    name: "Security and Access Control",
    tag: "GOVERNANCE",
    desc: "Fine-grained permissions, user roles, immutable audit logs, session security, and data protection.",
    functions: [
      "Role-Based Access Control (RBAC) down to specific screens, fields, and actions",
      "Immutable audit trails logging user, IP address, timestamp, and field changes",
      "Single Sign-On (SSO) and Multi-Factor Authentication (MFA) integration",
      "Automated encrypted database backups and recovery validation",
      "Sensitive data masking (e.g. employee salaries, supplier unit margins)"
    ],
    exampleWorkflow: "User Authenticates → Role Assessed → Field Masking Applied → Action Written to Audit Log",
    compatibility: "Custom Web ERP, Oracle APEX, Native Desktop ERP",
    previewMetrics: [
      { label: "Role Definitions", val: "14 Configured", highlight: false },
      { label: "Audit Coverage", val: "100% Actions", highlight: true },
      { label: "Backup Status", val: "Encrypted & Daily", highlight: true }
    ],
    previewRows: [
      { ref: "SEC-LOG", desc: "User Authentication & Session Validated", amount: "TLS 1.3 / MFA", status: "Secure" },
      { ref: "AUD-841", desc: "Sales Price Override Authorization", amount: "User: Director", status: "Logged" },
      { ref: "BKP-02", desc: "Automated Off-Site Snapshot Completed", amount: "Integrity Verified", status: "Passed" }
    ]
  },
  {
    id: "integrations",
    name: "Integrations and Automation",
    tag: "CONNECTIVITY",
    desc: "Connecting your ERP with existing databases, third-party software, payment gateways, and hardware devices.",
    functions: [
      "Bi-directional REST API and webhook architecture",
      "Direct database links with legacy Oracle, SQL Server, or MySQL tables",
      "E-commerce store inventory synchronization (Shopify, WooCommerce, Magento)",
      "Payment gateway integration for automated payment status verification",
      "Hardware drivers for thermal label printers, barcode scanners, and scales"
    ],
    exampleWorkflow: "E-Commerce Checkout → Webhook Received → ERP Sales Order Created → Stock Deducted",
    compatibility: "Custom Web ERP, Oracle APEX, Native Desktop ERP",
    previewMetrics: [
      { label: "Active Endpoints", val: "24 Connectors", highlight: false },
      { label: "Sync Reliability", val: "99.98%", highlight: true },
      { label: "Webhook Latency", val: "140ms", highlight: true }
    ],
    previewRows: [
      { ref: "INT-WEB", desc: "Online Store Stock Synchronization", amount: "Real-time sync", status: "Connected" },
      { ref: "INT-PAY", desc: "Payment Gateway Webhook Listener", amount: "Auto-reconciled", status: "Active" },
      { ref: "INT-DB", desc: "Legacy Oracle Database Link Pipeline", amount: "Nightly sync", status: "Scheduled" }
    ]
  }
];

export const industrySolutions = [
  {
    id: "manufacturing",
    name: "Manufacturing & Factories",
    tagline: "Production Orders & Material Consumption",
    desc: "Engineered for make-to-order and make-to-stock industrial manufacturers needing tight control over assembly floors, raw inputs, and job costs.",
    workflows: [
      "Multi-stage production work orders and scheduled machine routing",
      "Raw material consumption allocation and scrap rate tracking",
      "Work-in-progress (WIP) valuation and finished goods costing",
      "Quality inspection logs and machine preventative maintenance schedules"
    ]
  },
  {
    id: "wholesale-distribution",
    name: "Wholesale & Distribution",
    tagline: "Purchase Receipts & Batch Dispatch",
    desc: "Built for high-volume distributors managing fast-moving container shipments, supplier cycle audits, and complex client credit terms.",
    workflows: [
      "Goods Receipt Notes (GRN) linked to purchase orders with landed cost apportionment",
      "Inter-branch stock transfers and real-time reserved quantity checks",
      "Batch, lot, and expiry tracking with automated pick-pack-dispatch sheets",
      "Customer credit limits, aged receivables monitoring, and statement generation"
    ]
  },
  {
    id: "retail",
    name: "Retail & Multi-Location Operations",
    tagline: "Store Billing & Central Inventory",
    desc: "Unified operational software for multi-branch retail networks requiring central warehouse visibility, barcode checkout, and branch performance analytics.",
    workflows: [
      "Fast transaction checkout with barcode scanner and receipt printer integration",
      "Centralized stock visibility with inter-store transfer tracking",
      "Store-level daily revenue reconciliation against payment gateway payouts",
      "Consolidated gross margin reporting by product line and branch location"
    ]
  },
  {
    id: "services",
    name: "Professional & Service Businesses",
    tagline: "Client Billing & Project Workflows",
    desc: "Designed for engineering practices, corporate consultancies, and digital agencies selling project deliverables and monthly retainer contracts.",
    workflows: [
      "Recurring retainer billing automation and milestone payment stages",
      "Project timesheet logging and billable hours margin realization",
      "Expense disbursement tracking linked to client project IDs",
      "Partner equity profit-sharing schedules and tax-compliant financial ledgers"
    ]
  },
  {
    id: "warehousing",
    name: "Warehousing & Logistics",
    tagline: "Receiving, Put-Away & Dispatch",
    desc: "Specialized inventory and warehouse operations requiring rigorous physical stock controls, bin rack locations, and audit trails.",
    workflows: [
      "Inbound container receiving, barcode verification, and put-away routing",
      "Bin, rack, and zone location management for optimized picker paths",
      "Pick, pack, weigh, and dispatch workflows with label printing",
      "Periodic cycle counts and physical stocktake variance reconciliation"
    ]
  }
];

export const developmentProcessSteps = [
  {
    step: "01",
    title: "Discovery & Workflow Analysis",
    timeline: "Phase 1",
    desc: "We analyze your operational bottlenecks, transaction volumes, existing spreadsheets, and integration dependencies with department stakeholders.",
    deliverables: "Requirements Specification Document, Workflow Diagrams, Scope Architecture Plan"
  },
  {
    step: "02",
    title: "Database Design & System Architecture",
    timeline: "Phase 2",
    desc: "We design normalized database schemas, entity relationship models, indexing strategies, user permission hierarchies, and API boundaries.",
    deliverables: "Relational Database Schema (SQL/DDL), Architecture Blueprint, Interface Wireframes"
  },
  {
    step: "03",
    title: "Module Development & Integration",
    timeline: "Phase 3",
    desc: "We build your transactional forms, operational dashboards, workflow automations, and peripheral hardware integrations iteratively.",
    deliverables: "Functional ERP Modules, Staging Environment Access, Bi-weekly Review Milestones"
  },
  {
    step: "04",
    title: "Testing, Validation & Data Migration",
    timeline: "Phase 4",
    desc: "We test calculations, stress-test high transaction volumes, sanitize legacy Excel/ERP data, and execute pilot runs with real operational records.",
    deliverables: "Sanitized Data Migration Scripts, User Acceptance Testing (UAT) Sign-off, Test Logs"
  },
  {
    step: "05",
    title: "Deployment, Onboarding & Support",
    timeline: "Phase 5",
    desc: "We deploy the system to your chosen cloud or on-premise infrastructure, train administrators and staff, and provide continuous technical support.",
    deliverables: "Production Go-Live, Administrator Documentation, User Manuals, SLA Support Agreement"
  }
];

export const erpCostSecurityItems = [
  {
    category: "Software Ownership & IP Terms",
    summary: "Defined by contract upon final payment.",
    detail: "You receive the agreed custom application source code, database schemas, and documentation. You are not locked into proprietary SaaS black boxes and can maintain or enhance the software with internal or external developers."
  },
  {
    category: "Database Ownership & Portability",
    summary: "100% client data sovereignty at all times.",
    detail: "Your database (PostgreSQL, MySQL, Oracle, etc.) resides on your chosen hosting or local infrastructure. You have direct database access, full backup portability, and zero artificial export restrictions."
  },
  {
    category: "Third-Party Components & Licences",
    summary: "Transparent open-source & commercial libraries.",
    detail: "We explicitly document all third-party libraries, UI components, and drivers used in the solution. Any commercial runtime requirements (such as Oracle Database licences or Windows Server seats) are detailed upfront."
  },
  {
    category: "Hosting & Infrastructure Costs",
    summary: "Separate from initial software engineering fees.",
    detail: "Running an ERP involves infrastructure costs (e.g. cloud VPS, database instances, SSL certificates, or local server maintenance). We help you choose right-sized infrastructure to match your budget and transaction scale."
  },
  {
    category: "Backup & Disaster Recovery",
    summary: "Automated, verified snapshot strategies.",
    detail: "We configure automated daily/hourly database dumps, write-ahead log backups, and off-site cloud storage sync, complete with documented restoration procedures so your business can recover rapidly from incidents."
  },
  {
    category: "User Permissions & Audit Logging",
    summary: "Strict role-based governance & change tracking.",
    detail: "Granular access rules ensure employees only view and edit screens relevant to their role. Key financial and inventory actions are recorded in immutable audit logs showing who changed what, when, and from which IP."
  },
  {
    category: "Maintenance, Upgrades & Support",
    summary: "Structured SLA agreements & clear change boundaries.",
    detail: "We distinguish between routine warranty support (bug fixes on agreed scope) and post-launch change requests (new modules, workflows, or integrations). Transparent hourly or retainer arrangements ensure predictable ongoing costs."
  }
];

export const erpCaseStudies = [
  {
    id: "industrial-distributor",
    clientType: "Regional Industrial Distributor",
    badge: "SAMPLE PROJECT WALKTHROUGH",
    title: "Unifying Multi-Warehouse Inventory & Wholesale Accounting",
    problem: "The client operated two central warehouses and four trade counters using separate desktop accounting software and Excel sheets. Inventory discrepancies exceeded 6%, and inter-branch transfers required manual phone confirmation.",
    existingWorkflow: "Orders phoned in → Excel sheet checked → Stock physically verified → Invoice typed into legacy desktop accounting → Bank payments matched manually at month-end.",
    architecture: "Custom Web ERP (Next.js / Node.js) with PostgreSQL Database & Docker Containerization hosted on a dedicated private VPS.",
    modulesDeveloped: ["Multi-Warehouse Inventory & Bin Allocation", "Wholesale Sales Order Processing", "Three-Way Purchase Invoice Matching", "Direct Bank Payment Reconciliation"],
    implementation: "14-week phased development including cleansing 12,000 legacy SKU records, barcode printer integration, and 2-week parallel pilot run with trade counter staff.",
    verifiedOutcomes: "Stock discrepancy reduced under 0.8%; order-to-dispatch turnaround dropped from 6 hours to 45 minutes; end-of-month financial closing completed in 2 days instead of 11 days."
  },
  {
    id: "equipment-manufacturer",
    clientType: "Commercial Equipment Manufacturer",
    badge: "SAMPLE PROJECT WALKTHROUGH",
    title: "Production Order BOM Tracking & Oracle Database Modernization",
    problem: "A custom machinery manufacturer struggled with tracking multi-level component consumption across 18 active assembly workstations. Unplanned material shortages repeatedly stalled production lines.",
    existingWorkflow: "BOM blueprints printed on paper → Storekeeper manually deducted materials from desktop records at week-end → Job-cost variances discovered weeks after delivery.",
    architecture: "Oracle APEX Enterprise Application backed by Oracle Database Enterprise Edition, utilizing PL/SQL packages and ORDS REST endpoints.",
    modulesDeveloped: ["Multi-Tier Bill of Materials (BOM) Configurator", "Work Order Shop-Floor Routing", "Barcode Material Requisition", "Real-Time Work-in-Progress (WIP) Costing"],
    implementation: "16-week delivery including custom PL/SQL transactional packages, touch-screen shop floor terminals, and automated procurement reorder triggers.",
    verifiedOutcomes: "Eliminated unplanned component shortages by 92%; real-time work-in-progress cost visibility established across all active machinery builds."
  }
];

export const erpFaqs = [
  {
    q: "What is custom ERP software development?",
    a: "Custom ERP (Enterprise Resource Planning) software development is the process of designing and building unified business management software specifically around your company's unique workflows, approval hierarchies, data models, and integrations. Unlike off-the-shelf software (like NetSuite or SAP) that forces your business to adapt to rigid predefined modules, a custom ERP is engineered to fit your existing operations, reporting requirements, and infrastructure."
  },
  {
    q: "How much does a custom ERP system cost?",
    a: "The investment in a custom ERP depends on scope, platform choice, module complexity, integration requirements, and legacy data migration needs. Focused modular systems (e.g. inventory and invoicing for a single business unit) typically range from modest commercial project budgets, while multi-department enterprise systems with manufacturing BOMs and Oracle databases require larger investments. We provide detailed scope specifications with fixed milestone pricing so costs remain transparent and predictable."
  },
  {
    q: "How long does ERP implementation take?",
    a: "Implementation timelines vary depending on scope, data readiness, and organizational complexity. Focused single-module rollouts or lightweight web business tools typically take 6 to 10 weeks. Comprehensive multi-department enterprise ERPs spanning inventory, finance, production, and HR generally take 12 to 24 weeks delivered in milestone phases. We prioritize phased go-lives so your team starts benefiting from working software early in the process."
  },
  {
    q: "Do I own the source code after development?",
    a: "Yes. Source-code ownership terms are defined directly in our development contracts. Upon completion of milestone payments, you own the bespoke application source code, custom database schemas, and configuration scripts. You are never trapped in a proprietary vendor lock-in arrangement where your software disappears if you terminate a subscription."
  },
  {
    q: "Are there recurring user or licensing fees?",
    a: "Valtix does not charge per-user monthly seat fees for the custom software we develop for you. Your ongoing costs are limited to the actual infrastructure required to run the application (such as cloud hosting, server maintenance, backup storage, or commercial database licences like Oracle if chosen) and any ongoing support or maintenance agreements you choose to establish with us."
  },
  {
    q: "Which platform is best for my business?",
    a: "The ideal platform depends on your operational environment. Custom Web ERP is best for businesses needing responsive browser access across offices, branches, and remote devices. Oracle APEX is ideal for organizations with existing Oracle infrastructure, high-density data grids, and strict reporting requirements. Native Desktop ERP is best for shop floors, wholesale counters, and warehouses requiring keyboard-only entry speed, local network operation, and industrial peripheral hardware."
  },
  {
    q: "Can you migrate data from Excel or an existing ERP?",
    a: "Yes. Data migration is a formal phase of our development process. We write sanitization scripts to extract, clean, map, and import your master records (charts of accounts, customer and vendor lists, active inventory SKUs, opening balances, and bill of materials) from Excel, QuickBooks, Zoho, Tally, legacy Oracle databases, or SQL Server systems."
  },
  {
    q: "Can you integrate with Oracle Database and third-party APIs?",
    a: "Yes. We have deep engineering expertise in database architectures, including Oracle Database, SQL, PL/SQL, Oracle REST Data Services (ORDS), PostgreSQL, and SQL Server. We also build bi-directional REST APIs and webhooks to integrate with payment gateways, e-commerce stores, logistics couriers, and biometric hardware."
  },
  {
    q: "How are backups and access permissions managed?",
    a: "We configure fine-grained Role-Based Access Control (RBAC) so that users only see screens, columns, and actions authorized for their role. For data safety, we set up automated, encrypted database snapshot schedules with off-site replication and test recovery procedures to ensure business continuity in the event of hardware or cloud outages."
  },
  {
    q: "Do you provide ongoing maintenance and support?",
    a: "Yes. Following deployment, we provide post-launch warranty support to ensure smooth adoption. We also offer ongoing maintenance agreements covering server patching, database optimization, periodic backups, user onboarding assistance, and scheduled sprints for developing new features as your company expands."
  }
];
