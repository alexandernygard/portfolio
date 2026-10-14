import marketplaceImage from '#lib/images/projects/marketplace.png';
import bachelorThesisImage from '#lib/images/projects/bachelor-thesis.png';
import bookInventoryImage from '#lib/images/projects/book-inventory.png';
import eeImage from '#lib/images/projects/ee.png';
import martianImage from '#lib/images/projects/martian.jpg';
import masterThesisImage from '#lib/images/projects/master-thesis.png';
import memoryImage from '#lib/images/projects/memory.png';
import portfolioImage from '#lib/images/projects/portfolio.png';
import quizzzImage from '#lib/images/projects/quizzz.png';
import type { TechKey } from './tech.ts';

export type Project = {
  name: string;
  description: string;
  image: string;
  tech: TechKey[];
  link: string;
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
    name: 'Master’s thesis',
    description:
      'Agent-system interface designs for enterprise platforms: an empirical comparison of tool calling, programmatic tool calling and a domain module for LLM agents working with Ardoq.',
    image: masterThesisImage,
    tech: ['python', 'docker'],
    link: 'https://github.com/alexandernygard/master-thesis',
    time: 'Jun 2026',
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
