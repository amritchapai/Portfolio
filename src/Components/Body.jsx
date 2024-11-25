import { Hand } from "lucide-react";
import React, { useEffect, useState } from "react";
import amrit from "../assets/edv_amrit-removebg.png"

const Body = () => {
  const [renderText, setRenderText] = useState("");
  const [right, setRight] = useState(true);
  const [endIndex, setEndIndex] = useState(0);
  const text = "Computer Engineering Student";

  useEffect(() => {
    const display = setInterval(() => {
      setRenderText(text.slice(0, endIndex));
      //   console.log(text[endIndex]);
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
    <div className="relative">
      <div className="flex h-screen">
        <div className="flex w-[75%] bg-gray-800 items-center text-white pl-10">
          <div class = "movement" className="group flex flex-col">
            <div className="flex gap-5">
              <h1 className="text-5xl">HI,</h1>
              <Hand
                size={50}
                style={{}}
                class = 'hand'
              />
            </div>
            <div>
              <h1 className="text-5xl">I'M AMRIT CHAPAI</h1>
            </div>
            <div className="text-5xl text-orange-600">{renderText}|</div>
          </div>
        </div>
        <div className="flex flex-1 bg-orange-600"></div>
      </div>
      <div className="absolute left-[55%] bottom-0">
        <img src={amrit} alt="image" className="h-5/6" />
      </div>
    </div>
  );
};

export default Body;
