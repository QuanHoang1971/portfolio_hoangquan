import React from "react";
import hoangquan from "../assets/hoangquan.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#2f1e1e] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-xl font-bold">
            <p>Hi, I'm Quan</p>
            <p>
              I am a lifelong learner with more than 2 years experience BrSE
            </p>
            <br></br>
            <p>
              I would love to work in these field which gain more knowledge and
              contribute in these technologies
            </p>
          </div>
          <div>
            <img className="w-full mb-8" src={hoangquan} alt="avarta icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
