import React from "react";
import { ExternalLinkIcon, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  overview,
  purpose,
  technologies,
  role,
  impact,
  features,
  link,
  deploy,
}) => {
  return (
    <div className="flex flex-col mx-auto gap-2 shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
      <div className="flex gap-2">
        <Laptop />
        <p className="font-christian text-xl">
          {title}{" "}
          {deploy && (
            <span className="text-sm ml-2">
              <a href={deploy} target="_blank">
                {deploy}
              </a>
            </span>
          )}
        </p>
      </div>
      <hr className=" bg-white rounded-md " />
      <div className="flex flex-col gap-3">
        <p>
          <span className="font-bold">Overview</span>: {overview}
        </p>
        <p>
          <span className="font-bold">Purpose</span>: {purpose}
        </p>
        <p>
          <span className="font-bold">Technologies Used</span>: {technologies}
        </p>
        <p>
          <span className="font-bold">My Role</span>: {role}
        </p>
        <p>
          <span className="font-bold">Impact</span>: {impact}
        </p>
        <p>
          <span className="font-bold">Key-features</span>: {features}
        </p>
        <div className="flex flex-col w-full items-center">
          <Link to={link} target="blank">
            <button className="bg-gray-800 hover:bg-gray-600 rounded-lg text-white px-5 py-3">
              <div className="flex flex-row gap-1">
                <ExternalLinkIcon />
                <span>GitHub</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
