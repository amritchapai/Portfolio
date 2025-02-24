import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { DownloadIcon, GithubIcon, Menu, X } from "lucide-react";
import resume from "../assets/cv.pdf";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        setIsMenuOpen(false);
      },
    },
    {
      text: "About",
      icon: <BsInfoCircle />,
      action: (navigate, setCurrent) => {
        setCurrent(1);
        navigate("/about");
        setIsMenuOpen(false);
      },
    },
    {
      text: "Projects",
      icon: <GrProjects />,
      action: (navigate, setCurrent) => {
        setCurrent(2);
        navigate("/projects");
        setIsMenuOpen(false);
      },
    },
    {
      text: "Contact",
      icon: <FaRegMessage />,
      action: (navigate, setCurrent) => {
        setCurrent(3);
        navigate("/contact");
        setIsMenuOpen(false);
      },
    },
    {
      text: "GitHub",
      icon: <GithubIcon />,
      action: () => {
        window.open("https://github.com/amritchapai", "_blank");
        setIsMenuOpen(false);
      },
    },
    {
      text: "Resume",
      icon: <DownloadIcon />,
      action: () => {
        downloadRef.current.click();
        setIsMenuOpen(false);
      },
    },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-black/30 backdrop-blur-sm text-white w-full h-20 px-4 md:px-[10%] flex items-center">
        <div className="hidden md:flex items-center space-x-6">
          {navList.map((item, index) => (
            <div key={index} className="flex items-center">
              <button
                className={`bg-transparent hover:text-orange-500 transition-colors ${
                  current === index ? "border-b-2 border-orange-500" : ""
                } p-2`}
                onClick={() => item.action(navigate, setCurrent)}
              >
                <div className="flex items-center text-lg gap-1">
                  {item.icon} {item.text}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-row items-end justify-between">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-20 right-0 h-[calc(100vh-5rem)] w-64 bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navList.map((item, index) => (
            <button
              key={index}
              className={`flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-lg ${
                current === index ? "text-orange-500" : "text-white"
              }`}
              onClick={() => item.action(navigate, setCurrent)}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>

      <a
        ref={downloadRef}
        className="hidden"
        href={resume}
        download="amritResume.pdf"
      />
    </nav>
  );
};

export default Navbar;
