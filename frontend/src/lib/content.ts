export const siteConfig = {
  name: "STRADEXI",
  tagline: "Turn repetitive business work into intelligent systems.",
  description:
    "STRADEXI designs and deploys intelligent workflow systems that eliminate repetitive operational work across staffing, logistics, recruiting, and other B2B operations.",
  bookingUrl: "https://cal.com/sanjana-jaat-kuifve/30min",
  bookingFallbackUrl: "mailto:sanjanajaat23@gmail.com?subject=Book%20a%20discovery%20call",
  linkedin: "https://www.linkedin.com/in/sanjana-jaat-281224408",
  email: "sanjanajaat23@gmail.com",
  github: "https://github.com/",
  founder: {
    name: "Sanjana Jaat",
    role: "Full-Stack Developer · AI Engineer",
    linkedin: "https://www.linkedin.com/in/sanjana-jaat-281224408",
    email: "sanjanajaat23@gmail.com",
  },
  navigation: [
    { label: "Live Demo", href: "/demo" },
    { label: "Systems", href: "/systems" },
    { label: "Industries", href: "/industries" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Technology", href: "/technology" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
  ],
};

export function openBookingLink() {
  const target = siteConfig.bookingUrl || siteConfig.bookingFallbackUrl;

  if (typeof window === "undefined") {
    return;
  }

  try {
    const popup = window.open(target, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = siteConfig.bookingFallbackUrl;
    }
  } catch {
    window.location.href = siteConfig.bookingFallbackUrl;
  }
}

export const portfolioProjects = [
  {
    name: "AI Workflow Automation Platform",
    title: "AI Workflow Automation Platform",
    type: "Workflow Platform",
    description:
      "A workflow orchestration platform for designing, connecting, and executing operational automations with AI, HTTP, email, condition, and delay nodes.",
    repo: "https://github.com/",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SQLAlchemy",
      "SQLite",
      "Alembic",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SQLAlchemy",
      "SQLite",
      "Alembic",
    ],
  },
  {
    name: "NovaCRM AI",
    title: "NovaCRM AI",
    type: "AI CRM",
    description:
      "An AI-assisted CRM analytics project combining customer intelligence, structured data processing, predictive analysis, and business dashboards.",
    repo: "https://github.com/",
    stack: ["Python", "Pandas", "Scikit-Learn", "SQL", "Power BI", "Excel"],
    technologies: ["Python", "Pandas", "Scikit-Learn", "SQL", "Power BI", "Excel"],
  },
  {
    name: "NovaRAG",
    title: "NovaRAG",
    type: "RAG Platform",
    description:
      "A retrieval-augmented generation platform for document ingestion, chunking, vector search, and grounded AI responses.",
    repo: "https://github.com/",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "FAISS",
      "Hugging Face",
      "SQLite",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "FAISS",
      "Hugging Face",
      "SQLite",
    ],
  },
];

export const industries = [
  {
    name: "Healthcare Staffing",
    title: "Healthcare Staffing",
    slug: "healthcare-staffing",
    description:
      "Automate candidate intake, resume extraction, screening, matching, credential workflows, recruiter alerts, and follow-up.",
    workflow: [
      "Candidate Applies",
      "Resume Parsed",
      "AI Screening",
      "Credential Check",
      "Job Matching",
      "Recruiter Alert",
      "Follow-up",
      "ATS Updated",
    ],
  },
  {
    name: "Logistics",
    title: "Logistics",
    slug: "logistics",
    description:
      "Connect shipment updates, exception detection, TMS updates, operations alerts, customer notifications, and reporting.",
    workflow: [
      "Shipment Update",
      "Data Received",
      "Exception Detected",
      "Operations Alert",
      "TMS Updated",
      "Customer Notification",
      "Dashboard Updated",
    ],
  },
];

export const automationCategories = [
  {
    name: "Operations",
    title: "Operations",
    description:
      "Remove repetitive operational handoffs and manual data movement.",
    examples: [
      "Inbound intake automation",
      "Exception routing",
      "System synchronization",
    ],
  },
  {
    name: "Recruiting",
    title: "Recruiting",
    description:
      "Automate intake, screening, matching, communication, and follow-up.",
    examples: [
      "Resume parsing",
      "Candidate screening",
      "Recruiter alerting",
    ],
  },
  {
    name: "Healthcare Staffing",
    title: "Healthcare Staffing",
    description:
      "Build staffing workflows around candidate, credential, and placement operations.",
    examples: [
      "Credential checks",
      "Placement workflows",
      "Candidate communication",
    ],
  },
  {
    name: "Logistics",
    title: "Logistics",
    description:
      "Automate shipment data, exceptions, notifications, and TMS workflows.",
    examples: [
      "Shipment updates",
      "Exception detection",
      "TMS sync",
    ],
  },
  {
    name: "Sales / CRM",
    title: "Sales / CRM",
    description:
      "Keep lead, contact, opportunity, and follow-up workflows moving automatically.",
    examples: [
      "Opportunity updates",
      "CRM enrichment",
      "Sales workflow syncing",
    ],
  },
];

export const technologyStack = [
  {
    name: "Python",
    category: "Language",
    description: "Core backend logic and workflow orchestration.",
  },
  {
    name: "FastAPI",
    category: "API",
    description: "High-performance application endpoints and service logic.",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Interactive interfaces and workflow dashboards.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe application development and utilities.",
  },
  {
    name: "SQL",
    category: "Data",
    description: "Structured data storage and business records.",
  },
  {
    name: "LLM / AI",
    category: "Intelligence",
    description: "AI-driven extraction, classification, and decision support.",
  },
  {
    name: "RAG",
    category: "AI",
    description: "Grounded retrieval and answer generation for operational workflows.",
  },
  {
    name: "LangChain",
    category: "AI",
    description: "Workflow components for retrieval and prompt orchestration.",
  },
  {
    name: "REST APIs",
    category: "Integration",
    description: "Connections between applications and external platforms.",
  },
  {
    name: "Vector Search",
    category: "Data",
    description: "Semantic lookup for operational and document-driven tasks.",
  },
  {
    name: "Workflow Automation",
    category: "Systems",
    description: "Reliable orchestration of operations, rules, and approvals.",
  },
  {
    name: "Database Systems",
    category: "Data",
    description: "Persistent storage and reporting for business systems.",
  },
];