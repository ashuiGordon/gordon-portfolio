import type {
  Internship,
  PortfolioProfile,
  PortfolioProject,
} from "@/types/portfolio";

export const profile: PortfolioProfile = {
  name: "Gordon",
  email: "caozhi0812@163.com",
  githubUrl: "https://github.com/ashuiGordon",
  githubHandle: "ashuiGordon",
  role: "AI Product Manager & Builder",
  focus: "Agentic products · data tooling · developer experience",
  tagline:
    "I turn ambiguous AI workflows into products people can inspect, trust, and use.",
};

export const projects: PortfolioProject[] = [
  {
    slug: "openscience",
    title: "OpenScience",
    createdAt: "2026-08-12",
    status: "private",
    language: "Swift + Python",
    stars: 0,
    summary:
      "Local-first, evidence-linked research you can audit, replay, and export.",
    detail:
      "An offline-first research workspace built around traceable evidence, deterministic runs, and portable outputs.",
    tags: ["SwiftUI", "Python", "Local-first", "Research"],
    image: null,
    imageAlt: "OpenScience terminal-style project placeholder",
    links: [],
  },
  {
    slug: "argo",
    title: "Argo",
    createdAt: "2026-05-21",
    status: "public",
    language: "TypeScript",
    stars: 3,
    summary: "A local-first control room for Claude Code and Codex teams.",
    detail:
      "Visual multi-agent orchestration with worktree isolation, safety approvals, local memory, and deployment workflows.",
    tags: ["TypeScript", "React", "Multi-agent", "MCP"],
    image: "/project-assets/argo-cover.png",
    imageAlt: "Argo multi-agent collaboration platform cover",
    links: [
      { label: "live site", href: "https://ashuigordon.github.io/argo/" },
      { label: "github", href: "https://github.com/ashuiGordon/argo" },
    ],
  },
  {
    slug: "stata-cli",
    title: "stata-cli",
    createdAt: "2026-05-11",
    status: "public",
    language: "Python",
    stars: 56,
    summary: "An agent-native bridge from Stata to modern coding workflows.",
    detail:
      "A structured JSON CLI and persistent daemon that let coding agents run Stata, inspect data, and collect econometric results.",
    tags: ["Python", "Stata", "CLI", "Econometrics", "AI agents"],
    image: "/project-assets/stata-cli-banner.png",
    imageAlt: "stata-cli product banner",
    links: [
      {
        label: "project site",
        href: "https://ashuigordon.github.io/stata-cli/",
      },
      { label: "github", href: "https://github.com/ashuiGordon/stata-cli" },
    ],
  },
  {
    slug: "reverseimage-search",
    title: "Reverse Image Search",
    createdAt: "2025-08-26",
    status: "public",
    language: "Python",
    stars: 2,
    summary: "Semantic image retrieval with DINOv2 embeddings and Milvus.",
    detail:
      "A modular computer-vision search stack with vector indexing, semantic similarity, and a Streamlit exploration interface.",
    tags: ["Python", "DINOv2", "Milvus", "Computer vision"],
    image: "/project-assets/reverseimage-search-social.png",
    imageAlt: "Reverse Image Search GitHub preview",
    links: [
      {
        label: "github",
        href: "https://github.com/ashuiGordon/Reverseimage_search",
      },
    ],
  },
  {
    slug: "mathematical-modeling-guide",
    title: "Mathematical Modeling Guide",
    createdAt: "2025-08-14",
    status: "public",
    language: "mdBook + Python",
    stars: 6,
    summary: "A systematic, AI-native field guide to mathematical modeling.",
    detail:
      "A Chinese learning path from classical evaluation and optimization to machine learning and agent-assisted modeling.",
    tags: ["Modeling", "mdBook", "Python", "Machine learning"],
    image: "/project-assets/mathematical-modeling-guide-social.png",
    imageAlt: "Mathematical Modeling Guide GitHub preview",
    links: [
      {
        label: "read online",
        href: "https://ashuigordon.github.io/Mathematical-Modeling-Guide/",
      },
      {
        label: "github",
        href: "https://github.com/ashuiGordon/Mathematical-Modeling-Guide",
      },
    ],
  },
];

export const internships: Internship[] = [
  {
    id: "bytedance-computing-2026",
    company: "ByteDance",
    companyZh: "字节跳动",
    role: "AI Product Manager Intern",
    team: "Computing",
    period: "2026.06 — Present",
    summary:
      "Designing execution, collaboration, and artifact experiences for AI agents.",
    logo: "/company-logos/bytedance.svg",
  },
  {
    id: "sensetime-infrastructure-2026",
    company: "SenseTime",
    companyZh: "商汤科技",
    role: "Full-stack Developer Intern",
    team: "AI Infrastructure",
    period: "2026.04 — 2026.06",
    summary:
      "Prototyped and shipped multi-agent workflows for intelligent contract review.",
    logo: "/company-logos/sensetime.png",
  },
  {
    id: "bytedance-gmpt-bi-2025",
    company: "ByteDance",
    companyZh: "字节跳动",
    role: "AI Product Manager Intern",
    team: "GMPT-BI",
    period: "2025.10 — 2026.04",
    summary:
      "Productized data-analysis agents, MCP tools, and risk-analysis workflows.",
    logo: "/company-logos/bytedance.svg",
  },
  {
    id: "lawgenesis-ai-product-2025",
    company: "Law Genesis",
    companyZh: "缔零科技",
    role: "AI Product Manager Intern",
    team: null,
    period: "2025.07 — 2025.10",
    summary:
      "Improved multimodal safety, information-gathering agents, and browser automation.",
    logo: "/company-logos/lawgenesis.png",
  },
  {
    id: "didi-data-analysis-2025",
    company: "DiDi",
    companyZh: "滴滴出行",
    role: "Data Analyst Intern",
    team: null,
    period: "2025.04 — 2025.07",
    summary:
      "Modeled user behavior, city expansion, and causal impact for growth decisions.",
    logo: "/company-logos/didi.svg",
  },
];
