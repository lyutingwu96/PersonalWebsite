import * as React from "react";

export const HealthEar: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <div className="w-fit px-8 my-[120px]">
        <div>
          <div className="font-title text-xl font-bold text-green mb-4">
            HealthEar
          </div>
          <div className="font-content text-light mb-2">
            This is my Master's launch project mentored by Dr. Naveed Rabbani
            and Dr. Yuntao Wang. The goal of this project was to create a
            technology and system to make the process of middle ear infections
            in children simpler for parents/guardians dealing with the issue. We
            approached This goal by providing parents/guardians with an at-home
            tool that can help them decide whether or not a trip to the doctor
            is necessary and save them worry over what is troubling their child.
          </div>
          <div className="font-title text-lg text-light font-800 mb-4">
            Team
          </div>
          <div className="font-title text-lg text-light font-800 mb-4">
            Timeframe
          </div>
          <div className="font-title text-lg text-light font-800 mb-4">
            Skills
          </div>
        </div>
      </div>
    </div>
  );
};
