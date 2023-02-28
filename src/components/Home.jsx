import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2f1e1e]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-400 sm:text-4xl py-2 my-2">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#eff0f4]">
          Hoang Quan
        </h1>
        <h2 className="text-5xl sm:text-3xl font-bold text-[#eff0f4]">
          I'm a BrSE
        </h2>
        <p className="text-red-400 text-xl sm:text-2xl max-w-[700px] py-7">
          I have a keen eye for detail and most of my working life has been
          dedicated to creating stunning software.
          <p>
            I enjoy development because of the satisfaction I get by overcoming
            challenges.
          </p>
        </p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 items-center hover:bg-red-400 hover:border-white-400"
          >
            View Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
