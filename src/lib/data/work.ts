import type { TechKey } from './tech.ts';

export type Role = {
  title: string;
  time: string;
  tech?: TechKey[];
};

export type Employer = {
  company: string;
  website: string;
  location: string;
  /** Short span for the margin, e.g. "2024–26". */
  span: string;
  roles: Role[];
};

export const work: Employer[] = [
  {
    company: 'PwC Norway',
    website: 'https://www.pwc.no/',
    location: 'Oslo',
    span: '2026–',
    roles: [{ title: 'Associate Consultant', time: 'August 2026 to present' }],
  },
  {
    company: 'Ardoq',
    website: 'https://www.ardoq.com/',
    location: 'Oslo',
    span: '2024–26',
    roles: [
      {
        title: 'Software Engineering Apprentice',
        time: 'September 2024 to June 2026',
        tech: ['clojure', 'postgresql', 'typescript', 'react', 'docker'],
      },
      {
        title: 'Software Engineering Intern',
        time: 'July to August 2024',
        tech: ['clojure', 'postgresql', 'redis', 'typescript', 'react'],
      },
    ],
  },
  {
    company: 'Picnic Technologies',
    website: 'https://picnic.app/',
    location: 'Amsterdam',
    span: '2024',
    roles: [
      {
        title: 'Backend Developer (working student)',
        time: 'April to June 2024',
        tech: ['java', 'spring', 'maven', 'docker', 'datadog', 'grafana', 'prometheus', 'teamcity'],
      },
    ],
  },
  {
    company: 'Hammer Market Intelligence',
    website: 'https://www.hammer-intel.com/',
    location: 'Arnhem, hybrid',
    span: '2023–24',
    roles: [
      {
        title: 'Junior Data Scientist',
        time: 'April 2023 to April 2024',
        tech: ['python', 'flask', 'selenium', 'docker', 'react', 'typescript'],
      },
    ],
  },
  {
    company: 'Vera Connect',
    website: 'https://www.veraconnect.app/',
    location: 'Rotterdam',
    span: '2023',
    roles: [
      {
        title: 'Full-Stack Software Engineering Intern',
        time: 'April to June 2023',
        tech: ['nodejs', 'typescript', 'postgresql', 'prisma', 'react', 'reactnative', 'docker'],
      },
    ],
  },
];
