// import React from "react";
// import { ExternalLinkIcon, Laptop } from "lucide-react";
// import { Link } from "react-router-dom";

// const ProjectCard = ({
//   title,
//   overview,
//   purpose,
//   technologies,
//   role,
//   impact,
//   features,
//   link,
//   deploy,
// }) => {
//   return (
//     <div className="flex flex-col mx-auto gap-2 shadow-lg shadow-gray-600 bg-orange-600 hover:scale-105 transition duration-200 text-white p-4 mt-5 rounded-tr-xl rounded-bl-xl md:w-2/3 sm:w-1/2 lg:w-2/3 xl:w-2/3 ">
//       <div className="flex gap-2">
//         <Laptop />
//         <p className="font-christian text-xl">
//           {title}{" "}
//           {deploy && (
//             <span className="text-sm ml-2">
//               <a href={deploy} target="_blank">
//                 {deploy}
//               </a>
//             </span>
//           )}
//         </p>
//       </div>
//       <hr className=" bg-white rounded-md " />
//       <div className="flex flex-col gap-3">
//         <p>
//           <span className="font-bold">Overview</span>: {overview}
//         </p>
//         <p>
//           <span className="font-bold">Purpose</span>: {purpose}
//         </p>
//         <p>
//           <span className="font-bold">Technologies Used</span>: {technologies}
//         </p>
//         <p>
//           <span className="font-bold">My Role</span>: {role}
//         </p>
//         <p>
//           <span className="font-bold">Impact</span>: {impact}
//         </p>
//         <p>
//           <span className="font-bold">Key-features</span>: {features}
//         </p>
//         <div className="flex flex-col w-full items-center">
//           <Link to={link} target="blank">
//             <button className="bg-gray-800 hover:bg-gray-600 rounded-lg text-white px-5 py-3">
//               <div className="flex flex-row gap-1">
//                 <ExternalLinkIcon />
//                 <span>GitHub</span>
//               </div>
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

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
  const projectDetails = [
    { label: "Overview", content: overview },
    { label: "Purpose", content: purpose },
    { label: "Technologies Used", content: technologies },
    { label: "My Role", content: role },
    { label: "Impact", content: impact },
    { label: "Key-features", content: features },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-orange-600 rounded-tr-xl rounded-bl-xl p-6 text-white shadow-lg shadow-gray-600 transform-gpu hover:scale-105 transition-all duration-300">
        <div className="flex items-start gap-3 mb-4">
          <Laptop className="flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h2 className="font-christian text-xl md:text-2xl">{title}</h2>
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-200 hover:text-white transition-colors break-all"
              >
                {deploy}
              </a>
            )}
          </div>
        </div>

        <hr className="bg-white mb-6" />

        <div className="space-y-4">
          {projectDetails.map((detail, index) => (
            <div key={index} className="group">
              <p className="text-base md:text-lg">
                <span className="font-bold group-hover:text-gray-200 transition-colors">
                  {detail.label}
                </span>
                : {detail.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link to={link} target="_blank" className="inline-block">
            <button className="bg-gray-800 hover:bg-gray-700 active:bg-gray-600 rounded-lg px-6 py-3 transform-gpu hover:scale-105 transition-all duration-200 flex items-center gap-2">
              <ExternalLinkIcon size={20} />
              <span className="font-medium">GitHub</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
