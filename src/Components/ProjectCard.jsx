import React from "react";
import { Laptop } from "lucide-react";

const ProjectCard = ({title, overview, purpose, technologies, role, impact, features}) => {
  return (
    <div className="flex flex-col mx-auto gap-2 shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
      <div className="flex gap-2">
        <Laptop />
        <p className="font-christian text-xl">
          {title}
        </p>
      </div>
      <hr className=" bg-white rounded-md " />
      <div className="flex flex-col gap-3">
        <p>
          <span className="font-bold">Overview</span>: {overview}
        </p>
        <p>
          <span className="font-bold">Purpose</span>: {purpose}</p>
        <p>
          <span className="font-bold">Technologies Used</span>: {technologies}
        </p>
        <p>
          <span className="font-bold">My Role</span>:  {role}
        </p>
        <p>
          <span className="font-bold">Impact</span>: {impact}
        </p>
        <p>
          <span className="font-bold">Key-features</span>: {features}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
