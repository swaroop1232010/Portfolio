import React from 'react';

import SkillsItem from './SkillsItem';
import Technologies from './Technologies';

const Skills = () => (
  <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09191a]">
    <h1 className="heading">
      Education & <span className="text-yellow-400">Skill</span>
    </h1>
    <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
      <div>
        <SkillsItem title="React Developer" year="2019 - 2021" />
        <SkillsItem title="NextJs Developer" year="2021 - 2023" />
        <Technologies
          skill1="html"
          skill2="CSS"
          skill3="JS"
          level1="w-[91%]"
          level2="w-[88%]"
          level3="w-[99%]"
        />
      </div>
      <div>
        <SkillsItem title="Java Developer" year="2018 - 2023" />
        <SkillsItem title="Full Stack Developer" year="2017 - 2020" />
        <Technologies
          skill1="Java"
          skill2="SpringBoot"
          skill3="Typescript"
          level1="w-[91%]"
          level2="w-[88%]"
          level3="w-[99%]"
        />
      </div>
    </div>
  </div>
);

export default Skills;
