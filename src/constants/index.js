import {
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  vue,
  reacthamza,
  nodejshamza,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "Vue",
    icon: vue,
  }

 
  
];

const experiences = [
  {
    title: "DÉVELOPPEUR WEB FRONT-END / DESIGNER GRAPHIQUE",
    company_name: "Chaaben technologie Groupe",
    icon: javascript,
    iconBg: "#383E56",
    date: "Avr. 2020 - Sept 2021",
    points: [
      "Analyser les besoins des utilisateurs et réaliser une analyse fonctionnelle.",
      "Collaborer avec les équipes de développement back-end, les designers et les chefs de projet pour comprendre les exigences fonctionnelles et techniques, et contribuer à la planification et aux estimations de projets.",
      "Réaliser les mockups des pages, découper et intégrer les chartes graphiques tout en assurant la responsivité et le support multi-navigateur.",
    ],
  },
  {
    title: "DÉVELOPPEUR WEB FRONT-END",
    company_name: "Chaaben technologie Groupe",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Sept. 2021 - Juil. 2022",
    points: [
      "Gérer plusieurs projets commerciaux.",
      "Création et intégration de sites web responsive.",
      "Analyse de besoins du client, attribution de tâches dans l’équipe.",
      "Participer activement au développement et à la conception des interfaces utilisateur en utilisant des technologies telles qu'Angular, CSS, JavaScript, HTML et Vue.js. Assurer la qualité, la performance et la compatibilité multiplateforme des applications front-end.",
    ],
  },
  {
    title: "DÉVELOPPEUR WEB FULLSTACK",
    company_name: "Innovation Formation",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Juil. 2022 – décembre 2022 ",
    points: [
      "Concevoir les plans de projet (objectifs, budgets, agendas, ressources)",
      "Définir les tâches à accomplir et coordonner leur exécution avec l'équipe.",
      "Développement de sites web avec HTML, CSS, JavaScript, React, Node JS.",
      "Gestion et amélioration des composants existants côtés back et front.",
      "Conception et l’implémentation de fonctionnalités et d’interfaces utilisateur de haute qualité.",
    ],
  },
  {
    title: "Développement web Back-end (Node js)/Développement web Front-end (React)",
    company_name: "Secopa",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Création des collections postman pour chaque projet pour mieux tester les routes des API lors du développement.",
      "Développement de sites web et applications.",
      "création et gestion de bases de données.",
      "Conception et mise en place de bout en bout d’un site web interactif et Dynamique.",
      "Planifier les projets établir un calendrier.",
      "Création et amélioration des interfaces pour chaque service.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am happy and proud to share with you my achievement! Introduction to React.js at GOMYCODE!.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: reacthamza,
  },
  {
    testimonial:
      "I am happy and proud to share with you my achievement! Introduction to Node.js at GOMYCODE!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: nodejshamza,
  },
];

const projects = [
  {
    name: "TO DO APP",
    description:
      "Web-based platform that allows users to set up the schedule of activites for each day in the week. this can help them clear the path for them to walk straight into their objectives.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node-js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/HamzaHammoudainova/Hamza-Hammouda-TO-DO-APP-Project",
  },
  {
    name: "External Database ",
    description:
      "Web application that maps into a very large Company Database created with Odoo Web application, it makes it so easy to map into any of the product you want with all the information being available. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node-js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/HamzaHammoudainova?tab=repositories",
  },
  {
    name: "Ecommerce Shopping platform",
    description:
      "A Large E-Commerce Web Application based on Selling Clothes of all types and Genders, it is so easy to interact with, and very open.",
    tags: [
      {
        name: "Html-CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Java-Script",
        color: "pink-text-gradient",
      },
      {
        name: "Node-js",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/HamzaHammoudainova?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
