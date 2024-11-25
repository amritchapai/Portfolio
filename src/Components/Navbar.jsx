import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { DownloadIcon, GithubIcon } from "lucide-react";

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
  },
  {
    text: "Resume",
    icon: <DownloadIcon/>
  }
];


const Navbar = () => {
  const [current, setCurrent] = useState(0);
  const downloadRef = useRef();
  const navigate = useNavigate();
  const navbarHandler = (text) => {
    if (text === "About") {
      navigate("/about");
      setCurrent(1);
    } else if (text === "Contact") {
      navigate("/contact");
      setCurrent(3);
    } else if (text === "Home") {
      navigate("/");
      setCurrent(0);
    } else if (text === "Projects"){
      navigate("/projects")
      setCurrent(2);
    }
    else if(text === "GitHub"){
      window.open("https://github.com/amritchapai", "_blank");
    }
    else if(text === "Resume"){
        downloadRef.current.click();
    }
  };
  return (
    <div className="fixed flex bg-black/30 text-white w-full bg-opacity-65 h-20 items-center justify-between px-[10%] z-50">
      {navList.map((item, index) => {
        return (
          <div key={index} className="flex items-center ">
            {current === index ? (
              <button
                className="bg-transparent border-b-2 p-2"
                onClick={() => navbarHandler(item.text)}
              >
                <div className="flex items-center text-lg gap-1">
                  {item.icon} {item.text}
                </div>
              </button>
            ) : (
              <button
                className="bg-transparent p-2"
                onClick={() => navbarHandler(item.text)}
              >
                <div className="flex items-center text-lg gap-1">
                  {item.icon} {item.text}
                </div>
              </button>
            )}

            <a
              ref={downloadRef}
              className="hidden"
              href="../assets/cv.pdf"
              download="amritResume.pdf"
            ></a>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
