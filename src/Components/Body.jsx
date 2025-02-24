import { Hand } from "lucide-react";
import React, { useEffect, useState } from "react";
import amrit from "../assets/edv_amrit-removebg.png";

const Body = () => {
  const [renderText, setRenderText] = useState("");
  const [right, setRight] = useState(true);
  const [endIndex, setEndIndex] = useState(0);
  const text = "Computer Engineering Student";

  useEffect(() => {
    const display = setInterval(() => {
      setRenderText(text.slice(0, endIndex));
      if (right) {
        setEndIndex((prev) => prev + 1);
      } else {
        setEndIndex((prev) => prev - 1);
      }
      if (endIndex === text.length) {
        setRight(false);
      } else if (endIndex === 2) {
        setRight(true);
      }
    }, 150);
    return () => clearInterval(display);
  }, [endIndex, right]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex w-full md:w-[75%] bg-gray-800 items-center text-white p-6 md:pl-10 min-h-[60vh] md:min-h-screen">
          <div className="group flex flex-col movement z-10">
            <div className="flex items-center gap-3 md:gap-5">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                HI,
              </h1>
              <Hand
                size={40}
                className="hand animate-wave md:h-12 md:w-12 lg:h-14 lg:w-14"
              />
            </div>
            <div className="mt-2 md:mt-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                I'M AMRIT CHAPAI
              </h1>
            </div>
            <div className="text-2xl md:text-4xl lg:text-5xl text-orange-600 mt-2 md:mt-4">
              {renderText}
              <span className="animate-blink">|</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 bg-orange-600" />
      </div>

      <div className="absolute bottom-0 right-0 md:left-[55%] w-full md:w-auto flex justify-center md:justify-start">
        <img
          src={amrit}
          alt="Amrit"
          className="h-[40vh] md:h-5/6 object-contain transform-gpu hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Body;
