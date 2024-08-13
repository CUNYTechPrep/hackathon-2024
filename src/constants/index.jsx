import {
  // FaXTwitter,
  // FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

export const NAVIGATION_LINKS = [
  { label: "Welcome", href: "#welcome" },
  { label: "Hacks24", href: "#hacks24" },
  { label: "Highlights", href: "#highlights" },
  // { label: "Projects", href: "#projects" },
  { label: "Community", href: "#community" },
];

export const HERO = {
  greet: "Welcome to CTP Hacks 2024",
  intro: "A hackathon exclusively for CUNY Tech Prep’s Cohort 10 fellows.",
  description: (
    <>
      We are excited to host our annual hackathon, welcoming the new cohort of CTP fellows with a week-long event that blends professional development, technical training, mentoring, and networking with collaborative project hacking. CTP Hacks will take place from August (19-23) 2024.
      <br /><br />
      This year, we are thrilled to partner with The City University of New York (CUNY) Student Affairs, providing fellows the opportunity to develop innovative solutions addressing Essential Needs for CUNY Student Success.
    </>
  ),
};


export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/cunytechprep/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.gg/qdTbTPsx",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/cuny_tech_prep/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://github.com/",
  //   icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://www.linkedin.com/company/cuny-tech-prep/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
