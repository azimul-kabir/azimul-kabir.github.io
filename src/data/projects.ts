export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  /** owner/name of a public GitHub repository. Omitted for private projects. */
  repo?: string;
  links?: { label: string; href: string }[];
  /** Set for projects that are private or internal, so no public link is shown. */
  privateNote?: string;
  /** Path of a case-study page on this site. */
  caseStudy?: string;
  featured?: boolean;
  /** A project owned by someone else that I contribute to. */
  contribution?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'actua',
    name: 'Actua',
    summary:
      'A native Android client for Actual Budget with offline budgets, encrypted sync, reports, rules and imports.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android'],
    repo: 'azimul-kabir/actua',
    links: [
      { label: 'Website', href: 'https://actua.pages.dev' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.azimulkabir.actua',
      },
    ],
    caseStudy: '/projects/actua',
    featured: true,
  },
  {
    slug: 'harmony',
    name: 'Harmony',
    summary:
      'A self-hosted music library manager that syncs playlists, organises files and feeds Navidrome, Jellyfin or Plex.',
    tags: ['Python', 'FastAPI', 'Docker'],
    repo: 'azimul-kabir/harmony',
  },
  {
    slug: 'photo-migrator',
    name: 'Photo Migrator',
    summary:
      'A safety-first tool that merges overlapping photo and video archives into one deduplicated, verified library for Immich.',
    tags: ['Python', 'SQLite', 'CLI'],
    repo: 'azimul-kabir/photo-migrator',
  },
  {
    slug: 'credit-mis',
    name: 'Portfolio Pulse',
    summary:
      'An offline credit-portfolio MIS dashboard that turns month-end loan workbooks into management reporting.',
    tags: ['TypeScript', 'Banking', 'MIS'],
    privateNote: 'Internal tool',
  },
  {
    slug: 'hnf-agro-inventory',
    name: 'HnF Agro Inventory',
    summary:
      'An offline-capable inventory and accounting application for a small agricultural business.',
    tags: ['Python', 'Django', 'Docker'],
    privateNote: 'Private',
  },
  {
    slug: 'creative-writing',
    name: 'Creative Spark',
    summary:
      'Turns a daily writing prompt into a print-ready creative-writing worksheet for home learning.',
    tags: ['Python', 'Flask', 'PDF'],
    privateNote: 'Private',
  },
  {
    slug: 'actuali',
    name: 'Actuali',
    summary:
      'A native iOS companion app for Actual Budget. I contribute to it as a contributor.',
    tags: ['Swift', 'iOS', 'Actual Budget'],
    repo: 'MattFaz/actuali',
    contribution: true,
  },
];

export const featured = projects.find((p) => p.featured)!;
