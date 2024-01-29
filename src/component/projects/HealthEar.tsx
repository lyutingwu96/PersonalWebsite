import * as React from "react";
import { Underline } from "../../uikit/Underline";
import { Tag } from "../../uikit/Tag";

export const HealthEar: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <div className="w-[calc(90%)] mx-auto px-8 my-[120px]">
        <div className="mb-8">
          <div className="mb-4 lg:mb-8">
            <div className="font-title text-xl font-bold text-green mb-4">
              HealthEar
            </div>
            <div className="font-content text-light">
              This is my Master's launch project mentored by{" "}
              <Underline>Dr. Naveed Rabbani</Underline> and{" "}
              <Underline>Dr. Yuntao Wang</Underline>. The goal of this project
              was to create a technology and system to make the process of
              middle ear infections in children simpler for parents/guardians
              dealing with the issue. We approached This goal by providing
              parents/guardians with an at-home tool that can help them decide
              whether or not a trip to the doctor is necessary and save them
              worry over what is troubling their child.
            </div>
          </div>
          <div className="md:flex md:gap-8">
            <div className="mb-4 md:w-[calc(40%)] lg:w-[calc(35%)]">
              <div className="font-title text-lg text-green font-800">
                My Role
              </div>
              <div className="font-content text-light">
                I was the UI designer and front-end developer of the project. I
                was responsible for translating the user needs based on our user
                research into UI design and working software prototype. Within 3
                months, I created LoFi UI sketches, transformed it into Figma
                clickable prototype, then implemented a React Native app for
                usability testing.
              </div>
            </div>
            <div className="lg:flex lg:gap-8">
              <div className="lg:w-[calc(40%)]">
                <div className="mb-4 md:mb-2">
                  <div className="font-title text-lg text-green font-800">
                    Skills
                  </div>
                  <div className="gap-[6px] flex">
                    <Tag>React Native</Tag>
                    <Tag>UI design</Tag>
                    <Tag>User Research</Tag>
                  </div>
                </div>
                <div className="mb-4 md:mb-2">
                  <div className="font-title text-lg text-green font-800">
                    Timeframe
                  </div>
                  <div className="font-content text-light">
                    6 months, Jun, 2020 - Dec, 2020
                  </div>
                </div>
              </div>
              <div className="mb-4 md:mb-2">
                <div className="font-title text-lg text-green font-800 ">
                  Team
                </div>
                <div className="font-content text-light mb-1">
                  <Underline>Dominick Mendoza</Underline>: Business model, Ear
                  model prototyping
                </div>
                <div className="font-content text-light mb-1">
                  <Underline>Robin Yang</Underline>: Signal processing, Hardware
                  prototyping
                </div>
                <div className="font-content text-light mb-1">
                  <Underline>Zhan Shi</Underline>: Signal processing
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="w-full md:w-[calc(90%)] md:mx-auto aspect-video"
            src="https://www.youtube.com/embed/ahtni7szTnY?si=-keKB7gNyIRMUAYz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink from-[20%] to-green font-content w-fit mx-auto mt-16">
          Project details coming soon.
        </div>
      </div>
    </div>
  );
};
