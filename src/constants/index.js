import {
  gpt3Image,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  reactLogo,
  flutterLogo,
  laravelLogo,
  harvoxxLogo,
  inmotionLogo,
  catexLogo,
  contengenie,
  podcastr,
  mailconversio,
  shopifyClone,
  patGym,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: reactLogo,
  },
  {
    title: 'Backend Developer',
    icon: laravelLogo,
  },
  {
    title: 'App Developer',
    icon: flutterLogo,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'FrontEnd Developer Intern',
    company_name: 'Inmotion Hub',
    icon: inmotionLogo,
    iconBg: '#E6DEDD',
    date: 'February 2021 - July 2021',
    points: [
      'Implementing responsive design to ensure proper display on different devices and screen sizes.',
      'Applying consistent styling and layout to maintain a cohesive user experience.',
      'Writing and modifying JavaScript code to add interactivity and dynamic behavior to web pages.',
      'Testing and ensuring that web applications work correctly across different web browsers (e.g., Chrome, Firefox, Safari, Edge).',
      'Working closely with back-end developers, designers, and other team members to implement features and resolve issues.',
    ],
  },
  {
    title: 'Flutter Developer intern',
    company_name: 'Harvoxx tech hub',
    icon: harvoxxLogo,
    iconBg: '#383E56',
    date: 'September 2021 - April 2022',
    points: [
      'Developing and Maintaining Flutter Mobile Applications.',
      'Implementing responsive design and ensuring cross-platform compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },

  {
    title: 'Full stack Developer',
    company_name: 'Catex Technologies',
    icon: catexLogo,
    iconBg: '#E6DEDD',
    date: 'December 2022 - Present',
    points: [
      'Implement responsive designs that work seamlessly across different devices and screen sizes.',
      'Learn and work with AI tools such as OpenAI, ChatGPT to create problem solving softwares.',
      'Integrate RESTful APIs and third-party services to enhance application functionality.',
      'Assist in identifying and resolving technical issues and challenges as they arise.',
      'Conduct thorough testing, debugging, and troubleshooting of web applications.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Shoppify Clone',
    description:
      'This is a practice project, built with React to clone the Shopify e-commerce platform. In building thisproject I worked with Axios API, React Hooks, React DOM, Re-chart and other libraries.',
    tags: [
      {
        name: 'React,',
        color: 'blue-text-gradient',
      },
      {
        name: 'Boostrap',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: shopifyClone,
    source_code_link: 'https://shopify-clone-lime.vercel.app/',
  },

  {
    name: 'Gym Application',
    description:
      'This is a tutorial project, built using React Js, and Material UI Library. To achieve this application, I utilized RapidAPI and the worked with the exerciseDb API, and youtube search and download API',
    tags: [
      {
        name: 'React,',
        color: 'blue-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'green-text-gradient',
      },
      {
        name: 'RapidAPI',
        color: 'pink-text-gradient',
      },
    ],
    image: patGym,
    source_code_link: 'https://pats-gym.netlify.app/',
  },
  {
    name: 'Content Genie',
    description:
      'Content Genie is an advanced, comprehensive AI-powered content management platform designed to enhance your social media marketing strategies and campaigns.',
    tags: [
      {
        name: 'Laravel,',
        color: 'blue-text-gradient',
      },
      {
        name: 'Bootsrap',
        color: 'green-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: contengenie,
    source_code_link: 'https://app.contentgenie.ai/login',
  },
  {
    name: 'Podcastr',
    description:
      "Podcastr is an innovative podcast management software empowered by AI, dedicated to streamlining your podcasting experience while expanding your audience's reach.",
    tags: [
      {
        name: 'Laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'Boostrap',
        color: 'pink-text-gradient',
      },
    ],
    image: podcastr,
    source_code_link: '#',
  },
  {
    name: 'Mailconversio AI',
    description:
      'Mailconversio is a cutting-edge email marketing solution meticulously crafted to triple your email open rates, engage your audience, and significantly amplify your conversion numbers.',
    tags: [
      {
        name: 'Laravel',
        color: 'blue-text-gradient',
      },
      {
        name: 'Nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'Boostrap',
        color: 'pink-text-gradient',
      },
    ],
    image: mailconversio,
    source_code_link: 'https://app.mailconversio.io/',
  },

  {
    name: 'Gpt3',
    description: 'A practice project for React development, creating a landing page for an AI platform.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
    ],

    image: gpt3Image,
    source_code_link: 'https://gpt3-qvdldktuy-patinnojoe.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
