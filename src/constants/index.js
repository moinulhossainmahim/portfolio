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
  tibx,
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
} from "../assets";

export const myWords = [
  {
    text: "Here you can download my CV by clicking on Download button. I will be glad to our cooperation.",
    name: "Moinul Hossain",
    designation: "Software Developer",
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
    id: "contact",
    title: "Contact",
  },
];

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
    name: "C",
    icon: cLang,
  },
  {
    name: "C++",
    icon: cppLang,
  },
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
    name: 'Next.js',
    icon: nextjs,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
    {
      title: "Junior Software Engineer(React)",
      company_name: "TiBX LLC",
      icon: tibx,
      iconBg: "#E6DEDD",
      date: "October 2022 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Work closely with backend developers to ensure seamless integration of front-end and back-end functionalities.",
        "Experiment with new technologies and tools that could enhance the development workflow and user experience.",
        "Write clean, efficient, and well-documented code while following coding standards and best practices.",
        "Participate in continuous integration and deployment (CI/CD) processes to ensure smooth and automated deployment of code changes.",
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
    name: "Search Github User",
    description:
      "'Search Github User' is an innovative web application that empowers users to effortlessly delve into the GitHub coding universe. User can search for GitHub profiles, gaining instant insights into repositories, followers, and programming languages used.",
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
    liveDemo: "https://shop-ui-react.vercel.app/",
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
