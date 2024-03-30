import React from "react";
import { about_1 } from "../assets";

const About = () => {
  return (
    <div>
      <div className="flex">
        <div className="mx-auto my-20 flex flex-col gap-10">
          <h1 className="font-mono tracking-widest font-semibold text-3xl">
            ABOUT US
          </h1>
          <p className="shadow-2xl shadow-black mx-10 py-1 bg-gray-800 text-white pr-10 pl-10 font-serif tracking-wider text-lg text-justify">
            The all-in-one commerce platform to start, run,<br></br> and grow a
            E-commerce Store
          </p>
        </div>
        <div className="mx-auto my-10 ">
          <img
            className="w-[35rem] h-80 rounded-lg"
            src={about_1}
            alt="about"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
