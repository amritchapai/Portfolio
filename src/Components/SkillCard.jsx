import React from "react";

const SkillCard = ({ source, skill, experience }) => {
  return (
    <div className="flex flex-row items-center">
      <img src={source} alt="icon" className="h-20 w-20 object-cover" />
      <div className="flex flex-col">
        <div className="flex flex-col relative items-center bg-black/25 w-32 h-5 rounded-lg">
          <div
            className="bg-white h-full self-start rounded-r-lg"
            style={{ width: `${skill}%` }}
          ></div>
          <span className="absolute text-black">{skill}%</span>
        </div>
        <span className="text-sm text-gray-300 font-light justify-end pl-3">
          {experience}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
