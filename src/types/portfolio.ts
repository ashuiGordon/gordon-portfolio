export interface PortfolioLink {
  label: string;
  href: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  createdAt: string;
  status: "public" | "private";
  language: string;
  stars: number;
  summary: string;
  detail: string;
  tags: string[];
  image: string | null;
  imageAlt: string;
  links: PortfolioLink[];
}

export interface Internship {
  id: string;
  company: string;
  companyZh: string;
  role: string;
  team: string | null;
  period: string;
  summary: string;
  logo: string;
}

export interface PortfolioProfile {
  name: string;
  email: string;
  githubUrl: string;
  githubHandle: string;
  role: string;
  focus: string;
  tagline: string;
}
