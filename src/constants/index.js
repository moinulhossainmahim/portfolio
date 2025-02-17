import {
  creator,
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
  webApp,
  nextjs,
  itLogiko,
  githubUser,
  usbdit,
  cinehub,
  shopUI,
  shopAdmin,
  todo,
  calc,
  cLang,
  cppLang,
  me,
  nest,
  sturent
} from "../assets";

export const myWords = [
  {
    text: "Here you can download my CV by clicking on Download button. I will be glad to our cooperation.",
    name: "Moinul Hossain",
    designation: "Junior Software Engineer",
    // company: "",
    image: me,
  },
]

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },

  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Application Developer",
    icon: webApp,
  },
  {
    title: "Frontend Developer",
    icon: nextjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Problem Solver",
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
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Nest JS",
    icon: nest,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C",
    icon: cLang,
  },
  {
    name: "C++",
    icon: cppLang,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
    {
      title: "Junior Software Engineer",
      company_name: "ITLogiko",
      icon: itLogiko,
      iconBg: "rgb(0 0 0)",
      date: "October 2024 - Present",
      points: [
        "ITLogiko: Built a landing page for company Utilized React, CSS, SCSS, HTML etc.",
        "Educational Institution Management System: Working on a web application which is responsible for managing educational institution.",
        "Frontend Development with React TypeScript – Building dynamic and user-friendly UI components using React and TypeScript, ensuring a seamless and responsive user experience for the educational institution management system.",
        "Backend Development with Laravel MySQL - Developing robust APIs and handling database operations using Laravel and MySQL, ensuring secure and efficient data management for the platform.",
        "Integrated APIs into the frontend using React and Redux Toolkit, ensuring a smooth, dynamic, and reliable user experience.",
      ],
    },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "stuRENT",
    description:
      "stuRENT is a room finding website, designed for university students, allows hosts to list single rooms, sublets, and flats, while students can filter and rent these accommodations based on type, gender, and university. stuRENT is fully Responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "text-orange-400",
      },
      {
        name: "google-0Auth",
        color: "text-orange-400",
      },
      {
        name: "zod",
        color: "text-orange-400",
      },
      {
        name: "docker",
        color: "text-orange-400",
      },
    ],
    image: sturent,
    source_code_link: "https://github.com/moinulhossainmahim/sturent-ui",
    liveDemo: "https://sturent.vercel.app"
  },
  {
    name: "Search Github User",
    description:
      "Search Github User is an innovative web application that empowers users to effortlessly delve into the GitHub coding universe. User can search for GitHub profiles, gaining instant insights into repositories, followers, and programming languages used.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react_router",
        color: "pink-text-gradient",
      },
      {
        name: "rest_api",
        color: "green-text-gradient",
      },
      {
        name: "fusionchart",
        color: "text-orange-400",
      },
    ],
    image: githubUser,
    source_code_link: "https://github.com/moinulhossainmahim/Search-github-users",
    liveDemo: "https://github-user-reactjs.netlify.app/"
  },
  {
    name: "US-BD IT Center",
    description:
      "US-BD IT CENTER was incorporated in 2014 by veterans of the software & Hardware.It is an IT Services Company based in Dhaka, providing onsite and offshore IT outsourcing solutions. They use their vast and multi talented industry knowledge and experience for different IT solutions.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: usbdit,
    source_code_link: "https://github.com/moinulhossainmahim",
    liveDemo: "https://www.us-bdit.com/"
  },
  {
    name: "Cinehub",
    description:
      "Discover and explore your favorite movies and series with our immersive search and details application. Dive into rich information and watch trailers, all in one place. Experience a seamless interface that brings the world of entertainment to your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "text-yellow-500",
      },
      {
        name: "react_router",
        color: "text-pink-400",
      },
      {
        name: "material_ui",
        color: "text-orange-400",
      },
    ],
    image: cinehub,
    source_code_link: "https://github.com/moinulhossainmahim/entertainment-app",
    liveDemo: "https://cine-hub.netlify.app/",
  },
  {
    name: "Shop UI",
    description:
      "Explore and shop our curated collection of top-quality products across various categories on our user-friendly ecommerce platform. Discover the convenience of online shopping with a diverse range of items, from fashion to electronics, all at your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "text-yellow-500",
      },
      {
        name: "react_router",
        color: "text-pink-400",
      },
      {
        name: "material_ui",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "text-orange-400",
      },
    ],
    image: shopUI,
    source_code_link: "https://github.com/moinulhossainmahim",
    liveDemo: "https://daily-shop-ui.vercel.app/",
  },
  {
    name: "Shop Admin",
    description:
      "Effortlessly manage and oversee your online store with our intuitive ecommerce admin website. Streamline inventory, orders, and customer interactions on a single, powerful platform. Make informed decisions with real-time insights and analytics. ",
    tags: [
      {
        name: "next",
        color: "text-orange-400",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "text-yellow-500",
      },
      {
        name: "material_ui",
        color: "blue-text-gradient",
      },
    ],
    image: shopAdmin,
    source_code_link: "https://github.com/moinulhossainmahim",
    liveDemo: "https://shop-admin-nextjs.vercel.app/",
  },
  {
    name: "Calculator",
    description:
      "Experience hassle-free calculations with our user-friendly basic calculator website. Perform addition, subtraction, multiplication, and division operations effortlessly. Simplify your math tasks and get quick, accurate results in seconds. Enhance your everyday calculations with our intuitive calculator tool.",
    tags: [
      {
        name: "html5",
        color: "text-orange-400",
      },
      {
        name: "css3",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: calc,
    source_code_link: "https://github.com/moinulhossainmahim/calculator-app",
    liveDemo: "https://calc-rawjs.netlify.app/",
  },
  {
    name: "Todo App",
    description:
      "Stay organized and on top of your tasks with our sleek and efficient todo website. Easily create, manage, and prioritize your to-do lists. Experience a clutter-free interface designed to boost your productivity and keep you focused. Simplify your life with our intuitive todo solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "text-green-400",
      },
      {
        name: "html5",
        color: "text-orange-400",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/moinulhossainmahim/todo-app-reactjs",
    liveDemo: "https://todo-project-react.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
