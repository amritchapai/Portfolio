import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "Dance Dance Revolution game with C++ and arduino",
      overview:
        "Developed a playable Dance Dance game by a group of four computer students. The game was implemented with hardware controls.",
      purpose:
        "Built to deepen knowledge in C++ and integrate software and hardware so that it becomes more interactive and fun.",
      technologies: "C++, arduino, pressure sensors.",
      role: "Implemented the sound part of the game. From creation of music to finding the timestamp and ordering them according to the arrows.",
      impact:
        "Raised my knowledge and confidence in C++ and hardware technologies.",
      features:
        "Can be played with and without hardware, 2-player can play at the same time.",
      link: "https://github.com/theculturedteam/rhythm-mania",
    },
    {
      title:
        "A platform to share nepali stories with hybrid recommendation system (Academic minor project)",
      overview:
        "Developed a online platform for aspiring writers. Implemented hybrid recommendation system with content and collaborative filtering",
      purpose:
        "Built of enrich the knowledge regarding AI and web-development.",
      technologies: "python/django, react, html, css, tensorflow",
      role: "Handled the authentication part of the platform and also created UI to search books and handled the logic.",
      impact: "Improved the knowledge in AI and web development using django",
      features:
        "Users can read as well as write stores. Stories recommended by both collaborative and content based filtering. User can comment, like stories.",
      link: "https://github.com/theculturedteam/ekadesh",
    },
    {
      title: "Instagram Clone using MERN stack",
      overview:
        "Developed a Instagram clone that has some of the features such as posting photos, liking, commenting, and following users.",
      purpose:
        "Being by first project on MERN this is built to improve knowledge about full-stack development and scalable social media platforms.",
      technologies:
        "React.js, Node.js, Express, MongoDB, Tailwind CSS, Cloudinary (for image storage)",
      role: "This was the solo project of mine so everything was done by myself from designing and implementing the frontend UI using React, building APIs for backend operations, and integrating Cloudinary for efficient image hosting.",
      impact:
        "Enhanced my proficiency on MERN stack development and gained insights on authentication and authorization",
      features: "User authentication, User can like and comment on posts.",
      link: "https://github.com/amritchapai/Instagram_Clone",
    },
    {
      title: "Todo Web App using MERN stack",
      overview:
        "Developed a fully functional Todo Web App where users can create categories and manage tasks with features like adding, editing, marking complete, and prioritizing tasks.",
      purpose:
        "Built to strengthen knowledge in TypeScript, full-stack development, improve skills in building RESTful APIs, and enhance UI/UX design by creating user-friendly interfaces.",
      technologies:
        "React.js, TypeScript, Node.js, Express, MongoDB, Render (backend hosting), Vercel (frontend hosting)",
      role: "This was a solo project where I designed and implemented the frontend UI using React with TypeScript, built APIs for backend operation.",
      impact:
        "Significantly improved my skills in MERN stack development, including handling complex UI states, creating robust backend APIs, and deploying full-stack applications.",
      features:
        "User authentication, Category and task creation, Task prioritization with color indicators, Editing and marking tasks as complete.",
      link: "https://github.com/amritchapai/Todo",
      deploy: "https://todo-sand-five.vercel.app/",
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen py-24 px-4 md:px-8">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 bg-white rounded-md flex-1" />
        <h1 className="text-3xl md:text-5xl font-semibold text-white whitespace-nowrap">
          Projects
        </h1>
        <div className="h-1 bg-white rounded-md flex-1" />
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="transform-gpu hover:translate-y-[-4px] transition-transform duration-300"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
