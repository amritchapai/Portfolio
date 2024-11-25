import React, { useState } from "react";
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
  
  return (
    <div className="flex flex-col bg-gray-800  w-full h-full py-20 gap-8">
      <div className="flex flex-row items-center px-3">
        <div className="flex flex-1">
          <hr className="w-full h-1 bg-white border-none rounded-md" />
        </div>
        <h1 className="text-5xl font-semibold text-white">ABOUT ME</h1>
        <div className="flex flex-1">
          <hr className="w-full h-1 bg-white border-none rounded-md" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
          <span className="font-christian">INTRODUCTION</span>
          <hr className=" bg-white rounded-md " />
          <p>
            I am computer engineering student interested in web development. I
            have built some key skills in web development and I am eager to
            apply in real world applications. Excited to kickstart my
            professional journey and contribute to meaningful projects!
          </p>
        </div>
        <div className="flex flex-col gap-2 shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
          <span className="font-christian">ACADEMIC BACKGROUND</span>
          <hr className=" bg-white rounded-md " />
          <div className="flex flex-col mx-auto gap-4">
            <div className="flex flex-row items-center gap-10">
              <span>2021 - Present</span>
              <div className="flex flex-col items-center">
                <p>Himlaya College of Engineering</p>
                <p>Chyasal, Lalitpur, Nepal</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-10">
              <span>2018 - 2020</span>
              <div className="flex flex-col items-center">
                <p>Capital College and Research Center</p>
                <p>Balkumari, Koteshwor, Kathmandu</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-10">
              <span>2006 - 2018</span>
              <div className="flex flex-col items-center">
                <p>Deneb Academy</p>
                <p>New Baneshwor, Kathmandu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
          <span className="font-christian">SKILLS</span>
          <hr className=" bg-white rounded-md " />
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-6">
            <SkillCard source={c} skill={45} experience={"Intermediate"} />
            <SkillCard source={cPlus} skill={50} experience={"Intermediate"} />
            <SkillCard source={css} skill={55} experience={"Intermediate"} />
            <SkillCard source={flutter} skill={40} experience={"Beginner"} />
            <SkillCard source={git} skill={45} experience={"Intermediate"} />
            <SkillCard source={html} skill={70} experience={"Intermediate"} />
            <SkillCard source={mern} skill={65} experience={"Intermediate"} />
            <SkillCard source={python} skill={60} experience={"Intermediate"} />
            <SkillCard source={sql} skill={40} experience={"Beginner"} />
          </div>
        </div>
        <div className="flex flex-col gap-2 shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
          <span className="font-christian">TRAINING AND COURSES</span>
          <hr className=" bg-white rounded-md " />
          <div className="flex flex-col ml-5 gap-2">
            <div className="flex gap-2">
              <Laptop />
              <p>HTML, CSS, Bootstrap responsive Webdesign</p>
            </div>
            <div className="flex">
              <Laptop />
              <p>Flutter training</p>
            </div>
            <div className="flex">
              <Laptop />
              <p>MERN stack training</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
