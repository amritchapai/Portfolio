import React from "react";
import mern from "../assets/mern-stack.webp";
import c from "../assets/cIcon.png";
import cPlus from "../assets/c++.png";
import css from "../assets/css.png";
import flutter from "../assets/flutter-removebg-preview.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import python from "../assets/python.png";
import sql from "../assets/sql-server.png";
import SkillCard from "./SkillCard";
import { Laptop } from "lucide-react";

const About = () => {
  const educationData = [
    {
      period: "2021 - Present",
      institution: "Himlaya College of Engineering",
      location: "Chyasal, Lalitpur, Nepal",
    },
    {
      period: "2018 - 2020",
      institution: "Capital College and Research Center",
      location: "Balkumari, Koteshwor, Kathmandu",
    },
    {
      period: "2006 - 2018",
      institution: "Deneb Academy",
      location: "New Baneshwor, Kathmandu",
    },
  ];

  const skillsData = [
    { source: c, skill: 45, experience: "Intermediate" },
    { source: cPlus, skill: 50, experience: "Intermediate" },
    { source: css, skill: 55, experience: "Intermediate" },
    { source: flutter, skill: 40, experience: "Beginner" },
    { source: git, skill: 45, experience: "Intermediate" },
    { source: html, skill: 70, experience: "Intermediate" },
    { source: mern, skill: 65, experience: "Intermediate" },
    { source: python, skill: 60, experience: "Intermediate" },
    { source: sql, skill: 40, experience: "Beginner" },
  ];

  const courses = [
    "HTML, CSS, Bootstrap responsive Webdesign",
    "Flutter training",
    "MERN stack training",
  ];

  return (
    <div className="min-h-screen bg-gray-800 py-24 px-4 md:px-8">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 bg-white rounded-md flex-1" />
        <h1 className="text-3xl md:text-5xl font-semibold text-white whitespace-nowrap">
          ABOUT ME
        </h1>
        <div className="h-1 bg-white rounded-md flex-1" />
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="transform-gpu hover:scale-105 transition duration-300 bg-orange-600 rounded-tr-xl rounded-bl-xl p-6 text-white shadow-lg shadow-gray-600">
          <h2 className="text-xl font-christian mb-2">INTRODUCTION</h2>
          <hr className="bg-white mb-4" />
          <p className="text-lg leading-relaxed">
            I am computer engineering student interested in web development. I
            have built some key skills in web development and I am eager to
            apply in real world applications. Excited to kickstart my
            professional journey and contribute to meaningful projects!
          </p>
        </div>

        <div className="transform-gpu hover:scale-105 transition duration-300 bg-orange-600 rounded-tr-xl rounded-bl-xl p-6 text-white shadow-lg shadow-gray-600">
          <h2 className="text-xl font-christian mb-2">ACADEMIC BACKGROUND</h2>
          <hr className="bg-white mb-4" />
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              >
                <span className="font-semibold whitespace-nowrap">
                  {edu.period}
                </span>
                <div className="flex flex-col">
                  <p className="font-medium">{edu.institution}</p>
                  <p className="text-gray-200">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="transform-gpu hover:scale-105 transition duration-300 bg-orange-600 rounded-tr-xl rounded-bl-xl p-6 text-white shadow-lg shadow-gray-600">
          <h2 className="text-xl font-christian mb-2">SKILLS</h2>
          <hr className="bg-white mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                source={skill.source}
                skill={skill.skill}
                experience={skill.experience}
              />
            ))}
          </div>
        </div>

        <div className="transform-gpu hover:scale-105 transition duration-300 bg-orange-600 rounded-tr-xl rounded-bl-xl p-6 text-white shadow-lg shadow-gray-600">
          <h2 className="text-xl font-christian mb-2">TRAINING AND COURSES</h2>
          <hr className="bg-white mb-4" />
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex items-center gap-3 transition-transform hover:translate-x-2"
              >
                <Laptop className="flex-shrink-0" />
                <p className="text-lg">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
