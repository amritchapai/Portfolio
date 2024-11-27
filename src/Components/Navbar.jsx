import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { DownloadIcon, GithubIcon } from "lucide-react";
import resume from "../assets/cv.pdf";

const Navbar = () => {
  const location = useLocation();

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const pathToIndex = {
      "/about": 1,
      "/projects": 2,
      "/contact": 3,
    };
    setCurrent(pathToIndex[location.pathname] || 0);
  }, [location.pathname]);

  const downloadRef = useRef();
  const navigate = useNavigate();

  const navList = [
    {
      text: "Home",
      icon: <IoHomeOutline size={16} />,
      action: (navigate, setCurrent) => {
        setCurrent(0);
        navigate("/");
      },
    },
    {
      text: "About",
      icon: <BsInfoCircle />,
      action: (navigate, setCurrent) => {
        setCurrent(1);
        navigate("/about");
      },
    },
    {
      text: "Projects",
      icon: <GrProjects />,
      action: (navigate, setCurrent) => {
        setCurrent(2);
        navigate("/projects");
      },
    },
    {
      text: "Contact",
      icon: <FaRegMessage />,
      action: (navigate, setCurrent) => {
        setCurrent(3);
        navigate("/contact");
      },
    },
    {
      text: "GitHub",
      icon: <GithubIcon />,
      action: () => window.open("https://github.com/amritchapai", "_blank"),
    },
    {
      text: "Resume",
      icon: <DownloadIcon />,
      action: () => downloadRef.current.click(),
    },
  ];

  return (
    <div className="fixed flex bg-black/30 text-white w-full bg-opacity-65 h-20 items-center justify-between px-[10%] z-50">
      {navList.map((item, index) => {
        return (
          <div key={index} className="flex items-center">
            <button
              className={`bg-transparent ${
                current === index ? "border-b-2" : ""
              } p-2`}
              onClick={() => item.action(navigate, setCurrent)}
            >
              <div className="flex items-center text-lg gap-1">
                {item.icon} {item.text}
              </div>
            </button>

            <a
              ref={downloadRef}
              className="hidden"
              href={resume}
              download="amritResume.pdf"
            ></a>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
