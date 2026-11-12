import {
  contact,
  github,
  linkedin,
  pricewise,
  react,
} from "../assets/icons";
import zeroNetSignIn from "../assets/projects/zeronet-sign-in.jpg";

export const skills = [
  {
    name: "Web development",
    technologies: "TypeScript, JavaScript, React, Node.js, Java, Spring Boot",
  },
  {
    name: "Data and machine learning",
    technologies: "Python, PyTorch, SQL, MySQL, PostgreSQL, MongoDB",
  },
  {
    name: "Robotics",
    technologies: "xArm and XHAND Python SDKs, Ubuntu, hardware integration",
  },
];

export const experiences = [
  {
    title: "Teaching Assistant",
    organisation: "Macquarie University",
    date: "February 2026 – Present",
    colour: "#bfdbfe",
    points: [
      "Guide undergraduate and postgraduate students through Python analysis, visualisation and model evaluation in Data Science (COMP2200 / COMP6200).",
      "Facilitated postgraduate workshops on extracting, transforming and analysing unstructured data in Mining Unstructured Data (COMP8230).",
    ],
  },
  {
    title: "Web Developer",
    organisation: "Deluxe Fashion International Pty Ltd",
    date: "May 2024 – September 2025",
    colour: "#c4b5fd",
    points: [
      "Built and maintained two clothing e-commerce websites using WordPress, WooCommerce, HTML and CSS.",
      "Managed site updates and day-to-day administration for both storefronts.",
    ],
  },
  {
    title: "Software Engineer",
    organisation: "WeCredo Information Service Company",
    date: "January 2022 – December 2022",
    colour: "#a7f3d0",
    points: [
      "Developed API portals and maintained Java and Spring applications that supported government credit information services.",
      "Maintained MySQL databases and documented application changes for the development team.",
    ],
  },
  {
    title: "Web Developer Intern",
    organisation: "Alegre Pty Ltd",
    date: "March 2018 – June 2018",
    colour: "#fed7aa",
    points: [
      "Helped develop and maintain an internal warehouse management application using ASP.NET and Visual Studio.",
      "Worked with the Oracle database that supported the application.",
    ],
  },
];

export const education = [
  {
    institution: "University of Sydney",
    degree: "Master of Information Technology",
    focus: "Data Management and Analytics",
    date: "2020–2022",
  },
  {
    institution: "University of South Australia",
    degree: "Bachelor of Information Technology",
    focus: "Software Development",
    date: "2014–2017",
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
    name: "ZeroNet",
    status: "Live web app",
    description:
      "I built a responsive photo-sharing app with profiles, photo publishing, caption search, and saved posts.",
    contribution:
      "I connected Appwrite authentication, post data and photo storage, and used TanStack Query to cache and paginate the feed.",
    technologies: "React, TypeScript, Appwrite, TanStack Query",
    preview: {
      source: zeroNetSignIn,
      alt: "ZeroNet’s sign-in page beside a neon-lit street illustration",
      width: 1512,
      height: 805,
    },
    links: [
      { label: "Open live app", url: "https://zeronet.vercel.app/" },
      { label: "GitHub", url: "https://github.com/edwardxcj/zeronet" },
    ],
  },
  {
    name: "Robotic Arm and Dexterous Hand Manipulation",
    status: "Ongoing research · Macquarie University",
    description:
      "At the Embodied AI and Systems Lab, I work on hardware integration for robotic manipulation experiments.",
    technologies: "Python, xArm, XHAND, teleoperation",
    milestones: [
      {
        label: "Arm and hand integration",
        description:
          "I integrated an xArm robotic arm with an XHAND dexterous hand and used their Python SDKs to verify coordinated operation.",
      },
      {
        label: "Teleoperation",
        description:
          "I’m exploring teleoperation and ways to record human demonstrations for future experiments.",
      },
    ],
    links: [],
  },
  {
    iconUrl: react,
    theme: "btn-back-blue",
    name: "3D Developer Portfolio",
    description:
      "This portfolio pairs an interactive 3D island with pages about my work and projects. The contact form uses EmailJS to deliver visitor messages.",
    technologies: "React, Three.js, React Three Fiber, EmailJS",
    links: [
      { label: "GitHub", url: "https://github.com/edwardxcj/3d-portfolio" },
    ],
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "CROWN CLOTHING",
    description:
      "A clothing storefront prototype with a Firestore product catalogue, Firebase sign-in, a shopping cart and a checkout view.",
    technologies: "React, Firebase Authentication, Firestore",
    links: [
      { label: "Live site", url: "https://crownclothings.com/" },
      { label: "GitHub", url: "https://github.com/edwardxcj/CRWN-CLOTHING" },
    ],
  },
];
