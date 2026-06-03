export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [

  {
    id: 1,
    name: 'Joydeep Bandyopadhaya',
    position: 'Project Director at Cognizant',
    review:
      "Rajdeep is a highly skilled and dedicated software engineer with a strong foundation in computer science. His ability to quickly grasp complex concepts and apply them to real-world problems is commendable. He is a valuable asset to any team and I highly recommend him.",
  },

  {
    id: 2,
    name: 'Raveendra KS',
    position: 'Software Engineering Manager at Ellucian',
    review:
      "Rajdeep is a skilled and dedicated Software Engineer who made valuable contributions to the Banner and Colleague products at Ellucian. He consistently solved complex technical problems, demonstrated strong ownership, and effectively served as a Scrum Master to support team success. I highly recommend him for his technical expertise, leadership, and commitment to excellence.",
  },

  {
    id: 3,
    name: 'Hemanth Savasere',
    position: 'Lead Software Engineer At Societe Generale',
    review:
      'Working with Rajdeep was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. His ideas for Hackathons are amazing. Highly recommend him for any web dev projects.',
  },
  {
    id: 4,
    name: 'Sudeep Pournami',
    position: 'Director of A.I at Natwest Group',
    review:
      "Rajdeep is a hardworking and talented software engineer with a strong passion for innovation and problem-solving. As a NatWest Hackathon winner and an active contributor to the FINOS organization, he has consistently demonstrated technical excellence, teamwork, and dedication. I highly recommend him for his commitment, skills, and ability to deliver impactful results."
  },

];

export const myProjects = [
  {
    title: 'Crypto Exchanger – Web3 Cryptocurrency Exchange Platform',
    desc: 'A Web3 cryptocurrency exchange platform that allows users to connect wallets, access real-time crypto prices, and convert digital assets through an intuitive and responsive interface.',
    subdesc:
      'Built as a unique Software-as-a-Service app with React.js, Web3.js, Ethereum, Solidity, MetaMask, Ethers.js, Netlify.',
    href: 'https://drive.google.com/file/d/13MenZgMAKBVs7GtL6IasxBHhv6QO5wTP/view?usp=sharing',
    texture: '/textures/project/Crypto.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/Metamask.png',
      },
      /*{
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },*/
      {
        id: 4,
        name: 'Ethereum',
        path: '/assets/Ethereum.png',
      },
      {
        id: 5,
        name: 'Web3.js',
        path: '/assets/Web3js.jpg'
      }
    ],
  },
  {
    title: 'Nova - AI-Powered Cybersecurity Threat Detection System',
    desc: 'Built a machine learning-based intrusion detection platform that analyzes network traffic in real time, achieving 99.78% accuracy using a Random Forest model trained on the KDD Cup 99 dataset. Features include live monitoring, threat analytics, attack visualization, and automated threat logging.',
    subdesc:
      'With Nova, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using React, FastAPI, Python, Scikit-learn, Pandas, Chart.js, Vite,.',
    href: 'https://drive.google.com/file/d/1Ltnea1T3CXLYvbT_Z1GxgYKRveWK7nmF/view?usp=sharing',
    texture: '/textures/project/Cybersecurity.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      /*{
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },*/
      {
        id: 2,
        name: 'FastAPI',
        path: '/assets/Flask.png',
      },
      {
        /*  id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },*/
        id: 3,
        name: 'Scikit-learn',
        path: '/assets/Scikit.png',
      },
      {
        id: 4,
        name: 'Pandas',
        path: '/assets/Pandas.png'
      },
      {
        id: 5,
        name: 'Python',
        path: '/assets/Python.png',
      },
    ],
  },


];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Ellucian',
    pos: ' R&D Software Engineer Intern',
    duration: 'Feb 2nd 2026 - June 1st 2026',
    title: [
      'Acted as a Scrum Master in Agile teams, facilitating sprint planning, daily stand-ups, backlog grooming, and cross-functional collaboration.',
      'Built and shipped production-grade SaaS features via Ellucian E-Live for cloud-based digital campus platforms.',
      'Developed scalable modules for document workflows, compliance tracking, and approval systems for 50M+ users.',
      'Engineered secure file upload systems with validation, encryption, and FERPA-aligned controls.',
      'Implemented RBAC, audit logging, and secure data access for handling sensitive PII.',
      'Built a RAG pipeline using Docker + AWS (Lambda, S3, Secrets Manager) for context-aware data retrieval.',
      'Designed pipelines for data ingestion, embedding, and retrieval for scalable AI systems.',
      'Developed workflow orchestration (EIP) for enterprise SaaS automation and compliance engines.',
      'Integrated REST APIs, event-driven systems, and document platforms for end-to-end automation.',
      'Ensured high reliability (<3s response time) via input validation and secure API design.',
      'Built WCAG-compliant React UI experience cards and dashboards for document management.',
      'Applied secure coding practices and audit trails aligned with cybersecurity and cloud security standards.',
    ],
    icon: '/assets/Ellucian.png',
    animation: 'victory',
  },
];
