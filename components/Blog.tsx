import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => (
  <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
    <h1 className="heading">
      MY
      <span className="text-yellow-400"> Blogs</span>
    </h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
      <div data-aos="fade-up">
        <Link
          href="https://medium.com/@swaroop1232010/every-developer-should-know-3-new-apis-in-react-18-a8fd2f622643"
          target="_blank"
          className="block inset-0 w-[100%] relative h-[400px]"
        >
          <Image src="./images/b1.jpg" alt="blog" layout="fill" className="object-cover" />
        </Link>
        <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
          <div className="w-fit px-[2.5rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
            Apr 7, 2023
          </div>
          {/* <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4"> */}
          {/* <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Swaroop Reddy</p>
              </div> */}
          {/* </div> */}
          <p className="mt-[1rem] text-white text-[18px] font-semibold">
            3 New API&apos;s Every Developer Should Know In React 18
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <Link
          href="https://medium.com/@swaroop1232010/step-by-step-guide-to-setting-up-sonarqube-for-your-java-spring-boot-project-on-windows-8f062498751a"
          target="_blank"
          className="block inset-0 w-[100%] relative h-[400px]"
        >
          <Image src="./images/b2.png" alt="blog" layout="fill" className="object-fit" />
        </Link>
        <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
          <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
            Aug 31, 2024
          </div>
          {/* <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4"> */}
          {/* <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Swaroop Reddy</p>
              </div> */}
          {/* </div> */}
          <p className="mt-[1rem] text-white text-[18px] font-semibold">
            Implementation of SonarQube in Spring Boot.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Link
          href="https://medium.com/@swaroop1232010/implementing-redis-caching-in-spring-boot-with-gradle-a-step-by-step-guide-876884df0bb6"
          target="_blank"
          className="block inset-0 w-[100%] relative h-[400px]"
        >
          <Image src="./images/b3.jpg" alt="blog" layout="fill" className="object-cover" />
        </Link>
        <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
          <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
            Sep 4, 2024
          </div>
          {/* <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4"> */}
          {/* <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">By Swaroop Reddy</p>
              </div> */}
          {/* </div> */}
          <p className="mt-[1rem] text-white text-[18px] font-semibold">
            Implementation of Redis Caching in Spring Boot with Gradle.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
