import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { GithubIcon } from "lucide-react";

const navList = [
  {
    text: "Home",
    icon: <IoHomeOutline size={16} />,
  },
  {
    text: "About",
    icon: <BsInfoCircle />,
  },
  {
    text: "Projects",
    icon: <GrProjects />,
  },
  {
    text: "Contact",
    icon: <FaRegMessage />,
  },
  {
    text: "GitHub",
    icon: <GithubIcon/>
  }
];


const Navbar = () => {
  const navigate = useNavigate();
  const navbarHandler = (text) => {
    if (text === "About") {
      navigate("/about");
    } else if (text === "Contact") {
      navigate("/contact");
    } else if (text === "Home") {
      navigate("/");
    } else if (text === "Projects"){
      navigate("/projects")
    }
    else if(text === "GitHub"){
      window.location.href = "https://github.com/amritchapai";
    }
  };
  return (
    <div className="fixed flex bg-black/30 text-white w-full bg-opacity-65 h-20 items-center justify-between px-[10%] z-50">
      {navList.map((item, index) => {
        return (
          <div key={index} className="flex items-center ">
            <button className="bg-transparent border-b-2 p-2" onClick={()=>navbarHandler(item.text)}>
              <div className="flex items-center text-lg gap-1">
                {item.icon} {item.text} 
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
