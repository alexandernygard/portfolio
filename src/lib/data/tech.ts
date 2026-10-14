const names = {
  aws: 'AWS',
  azure: 'Azure',
  clojure: 'Clojure',
  cpp: 'C++',
  css: 'CSS',
  datadog: 'Datadog',
  docker: 'Docker',
  express: 'Express',
  flask: 'Flask',
  gcp: 'Google Cloud',
  flower: 'Flower',
  github: 'GitHub',
  gitlab: 'GitLab',
  go: 'Go',
  grafana: 'Grafana',
  haskell: 'Haskell',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript',
  jira: 'Jira',
  maven: 'Maven',
  mongodb: 'MongoDB',
  nodejs: 'Node.js',
  postgresql: 'PostgreSQL',
  prisma: 'Prisma',
  prometheus: 'Prometheus',
  python: 'Python',
  pytorch: 'PyTorch',
  react: 'React',
  reactnative: 'React Native',
  redis: 'Redis',
  scala: 'Scala',
  selenium: 'Selenium',
  spring: 'Spring',
  sqlite: 'SQLite',
  svelte: 'Svelte',
  sveltekit: 'SvelteKit',
  tailwind: 'Tailwind',
  teamcity: 'TeamCity',
  tensorflow: 'TensorFlow',
  typescript: 'TypeScript',
} as const;

export type TechKey = keyof typeof names;

/** "Clojure, PostgreSQL and Redis" */
export function techList(keys: readonly TechKey[]) {
  const words = keys.map((key) => names[key]);
  return new Intl.ListFormat('en-GB', { type: 'conjunction' }).format(words);
}

export const stack: { label: string; items: TechKey[] }[] = [
  {
    label: 'Languages',
    items: ['clojure', 'typescript', 'java', 'python', 'go', 'scala', 'haskell'],
  },
  {
    label: 'Frameworks',
    items: ['react', 'sveltekit', 'spring', 'nodejs', 'flask', 'pytorch', 'tensorflow'],
  },
  {
    label: 'Cloud & data',
    items: ['aws', 'azure', 'gcp', 'docker', 'postgresql', 'redis', 'mongodb'],
  },
];
