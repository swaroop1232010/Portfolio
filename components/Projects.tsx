import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => (
  <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
    <h1 className="heading">
      Pro<span className="text-yellow-400">Jects</span>
    </h1>
    <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
      <div data-aos="fade-up">
        <Link
          href="https://github.com/swaroop1232010/Next-TS-Auth"
          target="_blank"
          className="block inset-0 transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]"
        >
          <Image src="./images/p1.jpg" alt="portfolio" layout="fill" className="object-contain" />
        </Link>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <Link
          href="https://github.com/swaroop1232010/E-commerce"
          target="_blank"
          className="block inset-0 transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]"
        >
          <Image
            src="./images/ecommerce_project.jpg"
            alt="portfolio"
            layout="fill"
            className="object-contain"
          />
        </Link>
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <Link
          href="https://github.com/swaroop1232010/stores"
          target="_blank"
          className="block inset-0 transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]"
        >
          <Image src="./images/p3.png" alt="portfolio" layout="fill" className="object-contain" />
        </Link>
      </div>
    </div>
  </div>
);

export default Projects;
