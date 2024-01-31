import { shopify, starbucks, tesla } from "../assets/images";
import {
  //   car,
  contact,
  css,
  //   estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  //   summiz,
  tailwindcss,
  //   threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "WeCredo Information Service Company LTD, China",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "January 2022 - December 2022",
    points: [
      "Using Java to build and maintain the internal application platforms which provide services for the government financial departments and manage the database with MySQL in Navicat GUI.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Writing or contributing to instructions or manuals to guide end users.",
    ],
  },
  {
    title: "Cross-border E-Commerce operator",
    company_name: "Light Dot, China",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "September 2019 - December 2019",
    points: [
      "Composing descriptions of merchandise for posting to online storefronts, like eBay, Amazon, Shopee, Alibaba, or other shopping websites.",
      "Preparing or organizing online storefront marketing material, including product descriptions or subject lines, optimizing content to search engine criteria.",
      "Receiving and processing payments from customers, using electronic transaction services.",
      "Investigating products or markets to determine areas for opportunity or viability for merchandising specific products, using online or offline sources.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Alegre PTY LTD, Sydney",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "March 2018 - July 2018",
    points: [
      "Designing, building, and maintaining websites, using ASP.NET in Visual Studio and other related technologies.",
      "Managing Oracle databases with warehousing information that supports web applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/edwardxcj",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/changjian-xiong/",
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Social Media Application",
    description:
      "Build a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more. Easily create and explore posts, and enjoy a strong authentication system and quick data fetching with React Query for a smooth user experience, and use Vercel to deploy it online.",
    link: "https://zeronet.vercel.app/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Crown Clothing Application",
    description:
      "Create an online e-commerce website allowing customers to purchase clothes, using ReactJS, Redux, Firebase, Stripe API, GraphQL, and deploy it online with Netlify.",
    link: "https://crownclothings.com/",
  },
  //   {
  //     iconUrl: threads,
  //     theme: "btn-back-green",
  //     name: "Full Stack Threads Clone",
  //     description:
  //       'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //     link: "https://github.com/adrianhajdin/threads",
  //   },
  //   {
  //     iconUrl: car,
  //     theme: "btn-back-blue",
  //     name: "Car Finding App",
  //     description:
  //       "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //     link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  //   },
  //   {
  //     iconUrl: estate,
  //     theme: "btn-back-black",
  //     name: "Real-Estate Application",
  //     description:
  //       "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //     link: "https://github.com/adrianhajdin/projects_realestate",
  //   },
  //   {
  //     iconUrl: summiz,
  //     theme: "btn-back-yellow",
  //     name: "AI Summarizer Application",
  //     description:
  //       "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //     link: "https://github.com/adrianhajdin/project_ai_summarizer",
  //   },
];
