import { IoHomeOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import React, { useRef, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { DownloadIcon, GithubIcon } from "lucide-react";


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
    action: (navigate, setCurrent) => {setCurrent(1); navigate("/about")},
  },
  {
    text: "Projects",
    icon: <GrProjects />,
    action: (navigate, setCurrent) => {setCurrent(2); navigate("/projects")},
  },
  {
    text: "Contact",
    icon: <FaRegMessage />,
    action: (navigate, setCurrent)=> {setCurrent(3); navigate("/contact")}
  },
  {
    text: "GitHub",
    icon: <GithubIcon />,
    action: ()=> window.open("https://github.com/amritchapai", "_blank")
  },
  {
    text: "Resume",
    icon: <DownloadIcon />,
    action:()=> downloadRef.current.click()
  },
];


const Navbar = () => {
  const location = useLocation();
  const activePage = ()=>{
    switch (location.pathname) {
      case "/about":
        return 1;
      case "/projects":
        return 2;
      case "/contact":
        return 3;
      default:
        return 0;
    }
  }
  const [current, setCurrent] = useState(activePage());
  const downloadRef = useRef();
  const navigate = useNavigate();
  return (
    <div className="fixed flex bg-black/30 text-white w-full bg-opacity-65 h-20 items-center justify-between px-[10%] z-50">
      {navList.map((item, index) => {
        return (
          <div key={index} className="flex items-center ">
            
              <button
                className={`bg-transparent ${current === index?"border-b-2":""} p-2`}
                onClick={()=>item.action(navigate, setCurrent)}
              >
                <div className="flex items-center text-lg gap-1">
                  {item.icon} {item.text}
                </div>
              </button>
            
            
            

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
