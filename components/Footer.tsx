import React from 'react';
import { MapIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/16/solid';

const Footer = () => (
  <div className="pt-[8rem] pb-[1rem] bg-[#121121]">
    <div className="grid pb-[6rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
      <div className="flex items-center space-x-6">
        <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#2eb7cc]">
          <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
        </div>
        <div>
          <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
          <p className="text-[17px] w-[90%] text-white opacity-60">Naperville Chicago, Illinois</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#2eb7cc]">
          <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
        </div>
        <div>
          <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Contact</h1>
          <p className="text-[17px] w-[100%] text-white opacity-60">+1 (334) 895-7008</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#2eb7cc]">
          <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
        </div>
        <div>
          <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">To Reach Me:</h1>
          <p className="text-[17px] w-[90%] text-white opacity-60">swaroop1232010@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
