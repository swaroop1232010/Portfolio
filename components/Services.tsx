import React from 'react';
import {
  CommandLineIcon,
  RocketLaunchIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/20/solid';

const Services = () => (
  <div className="bg-[#121212] pt-16 md:pt-32 pb-20">
    <p className="heading ">
      My <span className="text-yellow-400">Services</span>
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-stretch gap-12 mt-16 text-white">
      <div data-aos="fade-right" className="flex flex-col">
        <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-8 flex-1 flex flex-col justify-between">
          <CodeBracketSquareIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
          <h1 className="text-2xl mt-6 mb-6">Frontend</h1>
          <p className="text-base text-[#d3d2d2] font-normal">
            I specialize in building user-friendly and engaging web experiences using technologies
            like React, Next.js, and Material-UI. My designs prioritize responsiveness and
            accessibility across devices, ensuring a seamless user experience.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col">
        <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-8 flex-1 flex flex-col justify-between">
          <RocketLaunchIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
          <h1 className="text-2xl mt-6 mb-6">Backend</h1>
          <p className="text-base text-[#d3d2d2] font-normal">
            I excel at building robust APIs with Java Spring Boot, Node.js, and other backend
            technologies. Additionally, I&apos;m proficient in testing APIs using Swagger and
            handling database migrations with tools like Flyway.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-delay="500" className="flex flex-col">
        <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-8 flex-1 flex flex-col justify-between">
          <CommandLineIcon className="w-24 h-24 mx-auto text-[#d3fae8]" />
          <h1 className="text-2xl mt-6 mb-6">FullStack</h1>
          <p className="text-base text-[#d3d2d2] font-normal">
            Combining my frontend and backend skills, I specialize in building comprehensive
            full-stack applications that integrate user interfaces with powerful backends. I&apos;m
            also skilled in cloud services and database management to ensure the seamless
            functioning of web applications.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
