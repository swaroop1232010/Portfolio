import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#121121] pb-12 pt-16 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-12 items-center">
        <div>
          <h1 className="text-2xl font-bold uppercase text-[#55e6a5]">
            ABOUT ME
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-relaxed my-8 font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-8 flex items-center md:space-x-10">
            <span className="w-24 hidden md:block h-1 bg-slate-400 rounded-sm"></span>
            <div className="text-lg text-slate-400">
              I&apos;m a versatile full-stack developer specializing in both backend
              and frontend technologies. My expertise lies in creating robust,
              scalable, and user-friendly web applications. My technical skills
              include:
              <br /> <br />
              <div className="flex flex-col space-y-4">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">
                      Backend
                    </h3>
                    <div className="text-lg text-slate-400">
                      Java, Spring Boot, Node.js, RESTful API design
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">
                      Frontend
                    </h3>
                    <div className="text-lg text-slate-400">
                      React, Next.js, TypeScript, HTML, CSS
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">
                      Databases
                    </h3>
                    <div className="text-lg text-slate-400">
                      MySQL, MongoDB, Redis, PostgreSQL
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">
                      Cloud Technologies
                    </h3>
                    <div className="text-lg text-slate-400">
                      AWS (EC2, S3, SQS, CloudWatch), Docker, Kubernetes
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">
                    Other Tools
                  </h3>
                  <div className="text-lg text-slate-400">
                    Git, Swagger, Kafka, ELK Stack
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative mx-auto md:mx-0 mt-8 lg:mt-0 w-full max-w-xs md:max-w-none md:w-128 h-80 md:h-128">
          <Image
            src="./images/about_me.jpg"
            alt="user"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
