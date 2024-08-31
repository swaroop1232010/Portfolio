import React from 'react';

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  level1: string;
  level2: string;
  level3: string;
}
const Technologies = ({ skill1, skill2, skill3, level1, level2, level3 }: Props) => (
  <div>
    <div className="relative mb-[3rem]">
      <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill1}
      </h1>
      <span className={`${level1} botton-0 h-[6px] absolute bg-[#55e6a5]`} />
    </div>
    <div className="relative mb-[3rem]">
      <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill2}
      </h1>
      <span className={`${level2} botton-0 h-[6px] absolute bg-[#55e6a5]`} />
    </div>
    <div className="relative mb-[3rem]">
      <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill3}
      </h1>
      <span className={`${level3} botton-0 h-[6px] absolute bg-[#55e6a5]`} />
    </div>
  </div>
);

export default Technologies;
