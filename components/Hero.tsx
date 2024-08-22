import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import ParticlesComponent from "./Particle";
import Social from "./Social";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.png')] bg-cover bg-center">
      <ParticlesComponent />
      <div className="w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center relative">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            {" "}
            HI, I&apos;M <span className="text-yellow-400">SWAROOP REDDY!</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
            I&apos;m a Full Stack web developer and I do projects using Both
            Backend and Fronend. I have hands-on experience managing databases
            such as SQL and NoSQL, and I excel in building scalable,
            user-friendly applications.
          </p>

          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded-xl"
              aria-label="Download CV"
            >
              Download CV
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>

            <div className="flex items-center space-x-2">
              <Social />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-center">
          <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
            <Image
              src="/images/u1.jpg"
              alt="user"
              layout="fill"
              sizes="fit"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
