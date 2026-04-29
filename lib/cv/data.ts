export type TimelineEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export type SkillGroups = Record<string, string[]>;

export type EducationEntry = {
  degree: string;
  school: string;
  year: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type Fact = { label: string; value: string };

export type Profile = {
  name: string;
  greeting: string;
  intro: string;
  facts: Fact[];
  practice: string[];
};

export const PROFILE: Profile = {
  name: "Rosniel",
  greeting: "Hi, I’m",
  intro:
    "Senior fullstack developer with 4+ years building end-to-end web applications. Strong in Python (Django, Flask) on the backend and React + TypeScript on the frontend, with hands-on experience deploying and managing infrastructure on AWS and Azure.",
  facts: [
    { label: "Based in", value: "Curitiba, BR" },
    { label: "From", value: "Havana, Cuba" },
    { label: "Experience", value: "4+ years" },
    { label: "Languages", value: "EN · ES" },
  ],
  practice: [
    "I build production web apps end to end — from database schema and API design through React UI and deployment. I care about clean architecture, testing, and continuous delivery, and I’ve led code reviews and shaped engineering standards on each team I’ve joined.",
    "Recent work spans process-automation platforms, digital invoicing, ticket-management systems, and inventory tools. Several of those are still running in production today.",
  ],
};

export const TIMELINE: readonly TimelineEntry[] = [
  {
    company: "Alamops",
    role: "Fullstack Developer",
    location: "Remote · Cuba",
    period: "Jun 2025 — Present",
    bullets: [
      "Building a process-automation platform: REST APIs in Flask, React + TypeScript on the frontend.",
      "Owning AWS infrastructure (EC2, S3, RDS) with autoscaling that cut operational cost.",
      "Containerised the stack with Docker; lead code reviews and set team-wide standards.",
    ],
  },
  {
    company: "Innovación Fiscal MX",
    role: "Fullstack Developer",
    location: "Havana, Cuba",
    period: "Apr 2024 — Apr 2025",
    bullets: [
      "Led full-stack development of a digital invoicing platform — Django backend + React/TS/Tailwind UI.",
      "Integrated payment gateways via REST with hardened error handling and validation.",
      "Implemented JWT auth with role-based access control across the product.",
    ],
  },
  {
    company: "Comercializadora de Servicios Médicos Cubanos, S.A.",
    role: "Fullstack Developer",
    location: "La Habana, Cuba",
    period: "2023 — Jan 2025",
    bullets: [
      "Built a ticket-management system with a Django backend and React frontend.",
      "Deployed on Azure App Service with monitoring through Azure Monitor.",
      "Wrote unit tests with Pytest, reaching 80%+ backend coverage.",
      "Awarded **Best Computational Scientist of the Year** for performance in software development.",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack Developer",
    location: "La Habana, Cuba",
    period: "2022 — 2024",
    bullets: [
      "Delivered 8+ fullstack projects (Django/Flask + React) for local and international clients.",
      "Cut load times by ~30% through query tuning and Redis caching.",
      "Integrated Stripe and PayPal with server-side validation in Python.",
      "Built an inventory-management system still in active use today.",
    ],
  },
];

export const SKILLS: SkillGroups = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  Backend: ["Django", "Flask", "REST APIs", "JWT auth", "Pytest"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Data: ["PostgreSQL", "Redis"],
  Cloud: [
    "AWS (EC2, S3, RDS)",
    "Azure (App Service, Monitor)",
    "Docker",
    "CI/CD",
    "GitHub Actions",
  ],
  Practice: ["Agile", "Code review", "Performance optimisation"],
};

export const EDUCATION: EducationEntry = {
  degree: "Technical Degree, Computer Science",
  school: "Pablo de la Torrente Brau · Cuba",
  year: "2023",
};

export const CONTACT: readonly ContactLink[] = [
  {
    label: "Email",
    value: "r16221639@gmail.com",
    href: "mailto:r16221639@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "/in/rosniel-allesta ↗",
    href: "https://www.linkedin.com/in/rosniel-allesta",
    external: true,
  },
];
