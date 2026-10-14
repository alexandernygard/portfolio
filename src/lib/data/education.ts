export type Period = {
  label: string;
  courses: { topic: string; name: string }[];
};

export type Year = {
  label: string;
  time?: string;
  location?: string;
  periods: Period[];
};

export type School = {
  degree: string;
  programme?: string;
  institution: string;
  time: string;
  /** Short span for the margin, e.g. "2024–26". */
  span: string;
  location: string;
  /** Topic key to label, used to highlight related courses. */
  topics?: Record<string, string>;
  curriculum?: Year[];
  /** Extra line under the institution, e.g. an exchange semester. */
  note?: string;
  thesis?: { title: string; link: string };
};

/** Expand `{ topic: [courses] }` into a flat, ordered course list. */
function period(label: string, groups: Record<string, string[]>): Period {
  return {
    label,
    courses: Object.entries(groups).flatMap(([topic, names]) =>
      names.map((name) => ({ topic, name })),
    ),
  };
}

export const education: School[] = [
  {
    degree: 'MSc Security and Cloud Computing',
    programme: 'Erasmus Mundus Joint Master (SECCLO)',
    institution: 'Aalto University & Technical University of Denmark',
    time: 'September 2024 to June 2026',
    span: '2024–26',
    location: 'Helsinki & Copenhagen',
    thesis: {
      title: 'Agent-System Interface Designs for Enterprise Platforms',
      link: 'https://github.com/alexandernygard/master-thesis',
    },
    topics: {
      cloud: 'Cloud',
      security: 'Security',
      web: 'Web dev',
      research: 'Research',
      work: 'Work',
    },
    curriculum: [
      {
        label: 'Year 1',
        time: '2024–2025',
        location: 'Helsinki, Finland',
        periods: [
          period('Semester 1', {
            cloud: [
              'Cloud Software and Systems',
              'Designing and Building Scalable Web Applications',
            ],
            security: ['Information Security', 'Network Security', 'Cryptography'],
            web: ['Web Software Development'],
            work: ['Internship'],
          }),
          period('Semester 2', {
            cloud: ['Big Data Platforms', 'Microservice Architectures and Serverless Computing'],
            security: ['Platform Security'],
            research: [
              'Seminar in Computer Science',
              'Academic Communication for MSc Students',
              'SECCLO Summer School',
            ],
            work: ['Internship'],
          }),
        ],
      },
      {
        label: 'Year 2',
        time: '2025–2026',
        location: 'Copenhagen, Denmark',
        periods: [
          period('Semester 1', {
            security: ['Ethical Hacking', 'Cybersecurity Fundamentals', 'Program Analysis'],
            research: ['Research Topics in Cybersecurity', 'Model Checking'],
          }),
          period('Semester 2', {
            research: ['Master Thesis Project'],
          }),
        ],
      },
    ],
  },
  {
    degree: 'BSc Computer Science and Engineering',
    institution: 'Delft University of Technology',
    time: 'August 2021 to June 2024',
    span: '2021–24',
    location: 'Delft, Netherlands',
    note: 'Exchange semester at the Hong Kong University of Science and Technology (HKUST)',
    thesis: {
      title: 'Improving the Accuracy of Federated Learning Simulations',
      link: 'https://github.com/alexandernygard/bachelor-thesis',
    },
    topics: {
      math: 'Math',
      systems: 'Systems',
      software: 'Software dev',
      theory: 'Theory',
      data: 'Data & AI',
      exchange: 'Exchange',
      research: 'Research',
    },
    curriculum: [
      {
        label: 'Year 1',
        periods: [
          period('Quarter 1', {
            math: ['Reasoning and Logic'],
            systems: ['Computer Organisation'],
            software: ['Object-oriented Programming'],
          }),
          period('Quarter 2', {
            math: ['Calculus'],
            software: ['OOP Project'],
            data: ['Web and Database Technology'],
          }),
          period('Quarter 3', {
            math: ['Linear Algebra'],
            theory: ['Algorithms and Data Structures'],
            data: ['Information and Data Management'],
          }),
          period('Quarter 4', {
            math: ['Probability Theory and Statistics'],
            systems: ['Computer Networks'],
            software: ['Software Quality and Testing'],
          }),
        ],
      },
      {
        label: 'Year 2',
        periods: [
          period('Quarter 1', {
            software: ['Software Engineering Methods'],
            data: ['Big Data Processing', 'Machine Learning'],
          }),
          period('Quarter 2', {
            math: ['Computer Graphics'],
            theory: ['Algorithm Design'],
            data: ['Data Mining'],
          }),
          period('Quarter 3', {
            software: ['Concepts of Programming Languages'],
            theory: ['Automata, Computability and Complexity'],
            data: ['Computational Intelligence'],
          }),
          period('Quarter 4', {
            software: ['Software Project'],
          }),
        ],
      },
      {
        label: 'Year 3',
        periods: [
          period('Quarters 1–2', {
            exchange: ['Exchange semester at Hong Kong University of Science and Technology'],
          }),
          period('Quarter 3', {
            software: ['Functional Programming', 'Human Computer Interaction'],
            data: ['Collaborative AI'],
          }),
          period('Quarter 4', {
            research: ['Thesis Project'],
          }),
        ],
      },
    ],
  },
  {
    degree: 'International Baccalaureate Diploma',
    institution: 'UWC ISAK Japan',
    time: 'August 2019 to May 2021',
    span: '2019–21',
    location: 'Karuizawa, Japan',
    topics: {
      math: 'Math',
      sciences: 'Sciences',
      humanities: 'Humanities',
    },
    curriculum: [
      {
        label: 'Courses',
        periods: [
          period('Higher level', {
            math: ['Mathematics: Analysis and Approaches'],
            sciences: ['Computer Science'],
            humanities: ['Global Politics'],
          }),
          period('Standard level', {
            humanities: ['English Language and Literature', 'Norwegian Language and Literature'],
            sciences: ['Physics'],
          }),
        ],
      },
    ],
  },
  {
    degree: 'Certificate of Competence',
    institution: 'Kristelig Gymnasium',
    time: 'August 2018 to June 2019',
    span: '2018–19',
    location: 'Oslo, Norway',
  },
];
