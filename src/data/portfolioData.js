import workoraImg from '../assets/projects/workora.png';
import rexpexImg from '../assets/projects/rexpex.png';
import adminImg from '../assets/projects/admin.png'                                          
import olxImg from '../assets/projects/olx.png';
import netflixImg from '../assets/projects/netflix.png';

export const portfolioData = {
  name: "Dhyan P",
  title: "MERN Stack Developer",
  location: "Kochi, Kerala",
  email: "dhyanpramod2@gmail.com",
  phone: "+91 9746145620",
  linkedin: "https://www.linkedin.com/in/dhyan-p-a98492346/",
  github: "https://github.com/dhyyan",
  
  profileSummary: "Self-taught MERN Stack Developer with hands-on experience building dynamic, scalable web applications using React.js, Node.js, and MongoDB. Proficient in building RESTful APIs, integrating third party services such as Razorpay and Firebase Auth, and deploying full stack apps on Vercel and AWS. Follows Clean Architecture principles to ensure scalable, testable, and maintainable codebases. Strong problem solving skills are demonstrated by solving 100+ LeetCode problems, with a passion for writing clean, optimized, and maintainable code.",
  
  technicalSkills: {
    languages: ["JavaScript", "TypeScript", "C"],
    frontend: ["HTML", "CSS", "React.js", "Redux", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth 2.0", "Razorpay integration"],
    databases: ["MongoDB", "PostgreSQL", "Firebase", "Firestore"],
    tools: ["Git", "GitHub", "Postman", "Figma", "npm"],
    concepts: ["MVC", "Repository Architecture", "Clean Architecture", "OOP", "Authentication", "Authorization", "CRUD", "Responsive Design"],
  },
  
  projects: [
    {
      title: "Workora – Freelance Marketplace Platform",
      live: "https://workora.dhyan.online/",
      github: "https://github.com/dhyyan/WORKORA",
      image: workoraImg,
      description: "A full stack freelance marketplace platform where clients can post projects and hire freelancers. Features an escrow payment system for secure milestone-based transactions, contract-based chat, and a robust dispute resolution mechanism.",
      bulletPoints: [
        "Job Posting & Bidding: Clients post jobs, multiple freelancers bid. Accepting a bid creates a contract, which unlocks communication channels to prevent spam.",
        "Escrow Payment System: Clients fund milestones which are securely held by Admin in an Escrow account, rather than directly sent to the freelancer's wallet.",
        "Milestone Workflow: Freelancers submit completed work. Clients can request revisions or approve to release the milestone payment, which is then credited to the freelancer's wallet upon Admin approval.",
        "Dispute Resolution: Integrated a concern-raising schema where freelancers can raise disputes. The Admin intervenes to contact both parties and accurately disburse payments.",
        "Role-Based Access & Admin Dashboard: Secure login for Admin, Client, and Freelancer. Admin manages users, payments, and oversees escrow transactions and project activities."
      ]
    },
    {
      title: "RexPex – Smart Eyewear E-commerce Platform",
      github: "https://github.com/dhyyan/Rex-Pex",
      image: rexpexImg,
      description: "A full stack web application that helps users find and purchase eyeglasses based on style, budget, and needs. Features an advanced filtering system and a unique \"Smart Repair System\" that notifies the nearest service partner for free repairs.",
      bulletPoints: [
        "Advanced Filtering System: Multi criteria search by category, brand, price, and stock status using optimized backend queries.",
        "Smart Offers Engine: Personalized product suggestions based on user behavior and filters like category, brand, price, and stock status.",
        "Performance Optimization: Integrated pagination, indexed MongoDB queries, and fast search for a smooth user experience."
      ]
    },
    {
      title: "User Management System & Admin Dashboard App",
      github: "https://github.com/dhyyan/USER-MANAGEMENT-Redux",
      image: adminImg,
      description: "A modern admin dashboard for managing users, built with React and TypeScript. Features include user listing, editing, deletion, and profile control, all within an interactive UI.",
      bulletPoints: [
        "Developed the frontend using React with TypeScript for strong type safety and maintainability.",
        "Followed Clean Architecture principles to organize code into clear, scalable layers.",
        "Used Redux for global state management and asynchronous operations.",
        "Designed a responsive UI using Tailwind CSS with smooth animations powered by Framer Motion."
      ]
    },
    {
      title: "OLX Clone — Buy & Sell Web App",
      github: "https://github.com/dhyyan/OLX-Clone-React",
      image: olxImg,
      description: "A responsive OLX like platform built with React and Firebase, allowing users to post, browse, and manage product listings.",
      bulletPoints: [
        "Integrated Firebase Auth with Google login and managed sessions via the React Context API.",
        "Enabled image uploads and storage using Firebase Storage.",
        "Designed UI with Tailwind CSS and handled navigation using React Router.",
        "Implemented search, filtering, and lazy loading for performance optimization."
      ]
    },
    {
      title: "Netflix Clone Streaming Web App",
      github: "https://github.com/dhyyan/Netflix-Clone-React",
      image: netflixImg,
      description: "A responsive Netflix-like platform built with React and Firebase, offering user authentication, dynamic content browsing, and optimized component rendering.",
      bulletPoints: [
        "Integrated Firebase Authentication with secure session management.",
        "Managed global state using React Context API for cleaner data flow.",
        "Improved performance using React.memo and component-level optimization.",
        "Designed a responsive and dynamic user interface using Tailwind CSS."
      ]
    }
  ],
  
  experience: [
    {
      title: "Self-Employed / Personal Projects",
      duration: "2024 - Present",
      bulletPoints: [
        "Developed and deployed multiple full-stack web applications using the MERN stack.",
        "Implemented authentication systems, REST APIs, and responsive UI components.",
        "Applied clean architecture principles to ensure scalable and maintainable codebases."
      ]
    }
  ],
  
  certifications: [
    "Solved 100+ problems on LeetCode focusing on data structures and algorithms."
  ],
  
  education: [
    {
      institution: "Brototype (BootCamp)",
      degree: "MERN Stack Development",
      duration: "Present"
    },
    {
      institution: "GHSS Palayad",
      degree: "Higher Secondary in Computer Commerce",
      duration: "March 2024"
    }
  ],
  
  services: [
    {
      title: "Frontend Development",
      description: "Building responsive, robust and scalable frontends using React, Redux, and modern CSS frameworks."
    },
    {
      title: "Backend APIs",
      description: "Developing robust RESTful APIs in Node.js and Express.js, connecting them gracefully to MongoDB."
    },
    {
      title: "Full-Stack Web Apps",
      description: "End-to-end web application development encompassing both client-side and server-side components."
    },
    {
      title: "UI/UX Implementation",
      description: "Accurately translating Figma designs into interactive, pixel-perfect web interfaces."
    }
  ]
};
