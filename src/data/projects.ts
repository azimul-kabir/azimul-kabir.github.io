import type { ImageMetadata } from 'astro';
import actuaHero from '~/assets/actua-hero.png';
import creativeSparkHero from '~/assets/creative-spark-hero.png';
import creditMisHero from '~/assets/credit-mis-hero.webp';
import harmonyHero from '~/assets/harmony-hero.jpg';
import inventoryHero from '~/assets/inventory-hero.jpg';
import photoMigratorHero from '~/assets/photo-migrator-hero.png';

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
  /** Screenshot shown at the top of the project card. */
  image?: { src: ImageMetadata; alt: string };
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
    image: {
      src: actuaHero,
      alt: 'Actua for Android showing the budget, category, transaction and bills screens',
    },
  },
  {
    slug: 'harmony',
    name: 'Harmony',
    summary:
      'A self-hosted music manager that brings a Spotify library home: it downloads tracks, syncs playlists and organises files for Navidrome, Jellyfin or Plex.',
    tags: ['Python', 'FastAPI', 'Docker'],
    repo: 'azimul-kabir/harmony',
    image: {
      src: harmonyHero,
      alt: 'Harmony library and dashboard screens on desktop and mobile',
    },
  },
  {
    slug: 'photo-migrator',
    name: 'Photo Migrator',
    summary:
      'A safety-first tool for a Synology NAS or a Mac that merges overlapping photo and video backups into one verified, deduplicated, Immich-ready library without touching the originals.',
    tags: ['Python', 'SQLite', 'CLI', 'Web UI'],
    repo: 'azimul-kabir/photo-migrator',
    image: {
      src: photoMigratorHero,
      alt: "Photo Migrator's web interface after an import, beside a plan of 89 new files, 33 already in the library and 14 duplicates",
    },
  },
  {
    slug: 'credit-mis',
    name: 'Portfolio Pulse',
    summary:
      'An offline credit-portfolio MIS dashboard that turns month-end loan workbooks into management reporting.',
    tags: ['TypeScript', 'Banking', 'MIS'],
    privateNote: 'Internal tool',
    image: {
      src: creditMisHero,
      alt: 'Portfolio Pulse executive overview with funded liability, asset-quality and portfolio movement panels',
    },
  },
  {
    slug: 'inventory-management',
    name: 'Inventory Management',
    summary:
      'A self-hosted inventory and back-office system for small trading businesses, with a stock ledger, credit sales and purchases, and reports.',
    tags: ['Python', 'Django', 'Docker'],
    privateNote: 'Private',
    image: {
      src: inventoryHero,
      alt: 'Inventory Management dashboard and sales line-item editor in dark and light themes',
    },
  },
  {
    slug: 'creative-writing',
    name: 'Daily Creative Spark',
    summary:
      'A home web app that makes printable creative-writing worksheets for a young writer, with a 70-prompt bank, weekly packs, star charts and a progress portfolio.',
    tags: ['Python', 'Flask', 'PDF', 'Docker'],
    repo: 'azimul-kabir/creative-writing',
    image: {
      src: creativeSparkHero,
      alt: 'A Daily Creative Spark worksheet and monthly writing star chart beside a progress panel showing stories logged, longest streak and sentences per story',
    },
  },
  {
    slug: 'actuali',
    name: 'Actuali',
    summary:
      'A native iOS companion app for Actual Budget for budgeting, logging transactions and checking balances offline on iPhone or iPad. I contribute to it.',
    tags: ['Swift', 'iOS', 'Actual Budget'],
    repo: 'MattFaz/actuali',
    contribution: true,
  },
];

export const featured = projects.find((p) => p.featured)!;
