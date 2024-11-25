import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-gray-800 w-full min-h-screen py-20">
      <div className="flex flex-row items-center px-3 gap-1">
        <div className="flex flex-1">
          <hr className="w-full h-1 bg-white border-none rounded-md" />
        </div>
        <h1 className="text-5xl font-semibold text-white">Projects</h1>
        <div className="flex flex-1">
          <hr className="w-full h-1 bg-white border-none rounded-md" />
        </div>
      </div>
      <ProjectCard
        title={"Dance Dance Revolution game with C++ and arduino"}
        overview={
          "Developed a playable Dance Dance game by a group of four computer students. The game was implemented with hardware controls."
        }
        purpose={
          "Built to deepen knowledge in C++ and integrate software and hardware so that it becomes more interactive and fun."
        }
        technologies={"C++, arduino,pressure sensors."}
        role={
          "Implemented the sound part of the game. From creation of music to finding the timestamp and ordering them according to the arrows."
        }
        impact={
          "Raised my knowledge and confidence in C++ and hardware technologies."
        }
        features={
          "Can be played with and without hardware, 2-player can play at the same time."
        }
      />
      <ProjectCard
        title={
          "A platform to share nepali stories with hybrid recommendation system (Academic minor project)"
        }
        overview={
          "Developed a online platform for aspiring writers. Implemented hybrid recommendation system with content and collaborative filtering"
        }
        purpose={
          "Built of enrich the knowledge regarding AI and web-development."
        }
        technologies={"python/django, react, html, css, tensorflow"}
        role={
          "Handled the authentication part of the platform and also created UI to search books and handled the logic."
        }
        impact={"Improved the knowledge in AI and web development using django"}
        features={
          "Users can read as well as write stores. Stories recommended by both collaborative and content based filtering. User can comment, like stories."
        }
      />
      <ProjectCard
        title={"Instagram Clone using MERN stack"}
        overview={
          "Developed a Instagram clone that has some of the features such as posting photos, liking, commenting, and following users."
        }
        purpose={
          "Being by first project on MERN this is built to improve knowledge about full-stack development and scalable social media platforms."
        }
        technologies={
          "React.js, Node.js, Express, MongoDB, Tailwind CSS, Cloudinary (for image storage)"
        }
        role={
          "This was the solo project of mine so everything was done by myself from designing and implementing the frontend UI using React, building APIs for backend operations, and integrating Cloudinary for efficient image hosting."
        }
        impact={
          "Enhanced my proficiency on MERN stack development and gained insights on authentication and authorization"
        }
        features={
          "User authentication, User can like and comment on posts."
        }
      />
    </div>
  );
};

export default Projects;
