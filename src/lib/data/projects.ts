import marketplaceImage from '#lib/images/projects/marketplace.png';
import arrowsmithImage from '#lib/images/projects/arrowsmith.png';
import bachelorThesisImage from '#lib/images/projects/bachelor-thesis.png';
import bookInventoryImage from '#lib/images/projects/book-inventory.png';
import componentsImage from '#lib/images/projects/components.png';
import dashboardsImage from '#lib/images/projects/dashboards.png';
import eeImage from '#lib/images/projects/ee.png';
import floorplateImage from '#lib/images/projects/floorplate.png';
import ghWatcherImage from '#lib/images/projects/gh-watcher.jpg';
import glimpseImage from '#lib/images/projects/glimpse.png';
import iconMotionTableImage from '#lib/images/projects/icon-motion-table.png';
import lommebokImage from '#lib/images/projects/lommebok.png';
import martianImage from '#lib/images/projects/martian.jpg';
import masterThesisImage from '#lib/images/projects/master-thesis.png';
import memoryImage from '#lib/images/projects/memory.png';
import nyggisAccountsImage from '#lib/images/projects/nyggis-accounts.png';
import nyggisImage from '#lib/images/projects/nyggis.png';
import portfolioImage from '#lib/images/projects/portfolio.png';
import quizzzImage from '#lib/images/projects/quizzz.png';
import scalableWebAppsImage from '#lib/images/projects/scalable-web-apps.png';
import tallyImage from '#lib/images/projects/tally.png';
import thesisResearcherImage from '#lib/images/projects/thesis-researcher.png';
import urImage from '#lib/images/projects/ur.jpg';
import wikiweaveImage from '#lib/images/projects/wikiweave.png';
import type { TechKey } from './tech.ts';

export type Project = {
  name: string;
  description: string;
  image: string;
  tech: TechKey[];
  /** Source code, or the live app when the repo is private. Omit when neither is public. */
  link?: string;
  time: string;
};

export const projects: Project[] = [
  {
    name: 'Portfolio',
    description: 'This site. Built with SvelteKit and TypeScript, deployed on Cloudflare.',
    image: portfolioImage,
    tech: ['svelte', 'typescript', 'tailwind'],
    link: 'https://github.com/alexandernygard/portfolio',
    time: 'Dec 2022 – Present',
  },
  {
    name: 'Ur',
    description:
      'A keyboard-first macOS time tracker for the work day: when it starts and ends, which projects the hours go to, timesheets with flex, and a year of activity at a glance. Installs with Homebrew.',
    image: urImage,
    tech: ['swift', 'swiftui'],
    link: 'https://github.com/alexandernygard/ur',
    time: 'Oct 2026',
  },
  {
    name: 'Lommebok',
    description:
      'Personal finance planning on a draggable month-by-month timeline: buy and sell a home, see where each mortgage payment goes and compare scenarios decades ahead. A Claude assistant turns a plain description of your situation into the numbers, and every change can be undone.',
    image: lommebokImage,
    tech: ['react', 'typescript', 'hono', 'drizzle', 'cloudflare', 'claude'],
    time: 'Oct 2026',
  },
  {
    name: 'Nyggis accounts',
    description:
      'Self-hosted sign-in and access control for all my apps: Google and GitHub login, one session across every subdomain as a JWT that apps verify locally, and an admin console for groups, grants, invites and per-app access modes. User events reach apps as webhooks through a queue.',
    image: nyggisAccountsImage,
    tech: ['typescript', 'cloudflare'],
    link: 'https://auth.nyggis.com',
    time: 'Oct 2026',
  },
  {
    name: 'Tally',
    description:
      'A finance dashboard that an AI agent builds and edits while you watch. Pages are small TypeScript projects written against a typed SDK, typechecked before they land and run in a sandboxed worker in the browser.',
    image: tallyImage,
    tech: ['typescript', 'solid', 'bun', 'claude'],
    time: 'Oct 2026',
  },
  {
    name: 'Component library',
    description:
      'One design system for React and Svelte: shadcn/ui on Radix and shadcn-svelte on Bits UI, sharing a single set of tokens. Three packages published to npm with Changesets, each with its own Storybook, and used across my apps.',
    image: componentsImage,
    tech: ['react', 'svelte', 'typescript', 'tailwind', 'storybook'],
    link: 'https://github.com/alexandernygard/components',
    time: 'Oct 2026',
  },
  {
    name: 'GH Watcher',
    description:
      'A native macOS app for keeping an eye on GitHub: CI runs, pull requests, issues, a live commit graph, the notification inbox and a menu bar status item, kept near-realtime with conditional requests. Installs with Homebrew.',
    image: ghWatcherImage,
    tech: ['swift', 'swiftui'],
    link: 'https://github.com/alexandernygard/gh-watcher',
    time: 'Oct 2026',
  },
  {
    name: 'nyggis.com',
    description:
      'The front door for my apps: one page listing everything I host under nyggis.com, with sign-in through Nyggis accounts for the ones that need it.',
    image: nyggisImage,
    tech: ['sveltekit', 'typescript', 'cloudflare'],
    link: 'https://nyggis.com',
    time: 'Oct 2026',
  },
  {
    name: 'WikiWeave',
    description:
      'Point it at a website and a topic, and Claude agents turn the site into a Markdown wiki. A lead agent scouts the pages and plans the folder tree, then hands sections to parallel workers that scrape and write each article, and reviews the result. A single-file dashboard shows the wiki growing live.',
    image: wikiweaveImage,
    tech: ['typescript', 'nodejs', 'claude'],
    time: 'Sep 2026',
  },
  {
    name: 'arrowsmith',
    description:
      'A small flowchart language that people and LLMs can both write, and a CLI that lays it out with dagre and renders SVG or PNG. Errors come back with line numbers so a model can fix its own output, and a browser demo has Claude write the diagram from a plain description.',
    image: arrowsmithImage,
    tech: ['javascript', 'nodejs', 'claude'],
    time: 'Sep 2026',
  },
  {
    name: 'Glimpse',
    description:
      'A macOS menu bar app for catching things during the day: a global hotkey takes a screenshot or opens a note, and Claude gives each capture a title, summary, category, tags and the text in the screenshot. Everything is searchable in a timeline grouped by day.',
    image: glimpseImage,
    tech: ['swift', 'swiftui', 'claude'],
    time: 'Sep 2026',
  },
  {
    name: 'Dashboards',
    description:
      'Chat with an assistant that builds dashboards on ERP data. Each dashboard is a declarative spec with data bindings, reshaped by transforms that run in a QuickJS sandbox, and every change is a version you can restore.',
    image: dashboardsImage,
    tech: ['go', 'react', 'typescript', 'bun', 'claude'],
    time: 'Sep 2026',
  },
  {
    name: 'Floorplate',
    description:
      'A floor-plan editor for drawing rooms to scale and arranging doors, windows and furniture, with a Claude assistant that edits the plan directly. Every assistant turn is saved as a version you can roll back.',
    image: floorplateImage,
    tech: ['svelte', 'typescript', 'hono', 'cloudflare', 'claude'],
    time: 'Sep 2026',
  },
  {
    name: 'Icon Motion Table',
    description:
      'Pick a Lucide icon, give it motion with presets, keyframes or a request to Claude, and tweak it until it feels right.',
    image: iconMotionTableImage,
    tech: ['svelte', 'typescript', 'bun', 'cloudflare', 'claude'],
    link: 'https://animate-icons.nyggis.com',
    time: 'Sep 2026',
  },
  {
    name: 'Master’s thesis',
    description:
      'Agent-system interface designs for enterprise platforms: an empirical comparison of tool calling, programmatic tool calling and a domain module for LLM agents working with Ardoq.',
    image: masterThesisImage,
    tech: ['python', 'docker'],
    link: 'https://github.com/alexandernygard/master-thesis',
    time: 'Jun 2026',
  },
  {
    name: 'Thesis research pipeline',
    description:
      'The tool I used to find and read papers for my master’s thesis: searches OpenAlex and Semantic Scholar, downloads and converts PDFs to Markdown for LLM analysis, and syncs a library of over a hundred papers to a dashboard for review.',
    image: thesisResearcherImage,
    tech: ['python', 'sveltekit', 'cloudflare'],
    time: 'Apr – May 2026',
  },
  {
    name: 'Scalable web apps',
    description:
      'Two course projects built for load: a programming practice app with a Redis-queued grading service, and a Q&A platform with LLM-generated answers, autoscaled on Kubernetes with Prometheus and Grafana monitoring. Both load tested with k6 and covered by Playwright end-to-end tests.',
    image: scalableWebAppsImage,
    tech: ['deno', 'hono', 'astro', 'svelte', 'postgresql', 'redis', 'kubernetes', 'k6'],
    time: 'Sep 2024 – Jan 2025',
  },
  {
    name: 'Bachelor’s thesis',
    description:
      'Improving the accuracy of federated learning simulations by using traces from a real-world deployment.',
    image: bachelorThesisImage,
    tech: ['python', 'pytorch', 'flower'],
    link: 'https://github.com/alexandernygard/bachelor-thesis',
    time: 'Jun 2024',
  },
  {
    name: 'Quizzz',
    description:
      'A multiplayer desktop quiz game that raises awareness of energy use and sustainable consumer habits.',
    image: quizzzImage,
    tech: ['java', 'spring'],
    link: 'https://github.com/alexandernygard/OOPP-Quizzz',
    time: 'Sep 2021 – Feb 2022',
  },
  {
    name: 'Memory game',
    description: 'A browser game where players compete to match the most pairs.',
    image: memoryImage,
    tech: ['html', 'css', 'javascript', 'nodejs'],
    link: 'https://github.com/alexandernygard/MemoryGame',
    time: 'Nov 2021 – Jan 2022',
  },
  {
    name: 'Marketplace platform',
    description: 'An online marketplace for buying and selling second-hand items with your peers.',
    image: marketplaceImage,
    tech: ['python', 'flask', 'html', 'css', 'sqlite'],
    link: 'https://github.com/alexandernygard/Marketplace-platform',
    time: 'Nov 2020 – May 2021',
  },
  {
    name: 'Deepfake detection study',
    description:
      'Extended Essay comparing 129 models across three deep learning architectures (CNN, RNN, MLP).',
    image: eeImage,
    tech: ['python', 'tensorflow'],
    link: 'https://github.com/alexandernygard/EE-Project',
    time: 'Feb – Sep 2020',
  },
  {
    name: 'Book inventory',
    description:
      'A desktop book-keeping system for a personal library, with a documented case study.',
    image: bookInventoryImage,
    tech: ['python'],
    link: 'https://github.com/alexandernygard/Book-Inventory',
    time: 'Dec 2019 – Mar 2020',
  },
  {
    name: 'Martian IoT communication',
    description:
      'A messaging and translation system for communication between Earth, the Moon and Mars.',
    image: martianImage,
    tech: ['cpp'],
    link: 'https://github.com/alexandernygard/martianUnit2Project',
    time: 'Sep – Dec 2019',
  },
];
