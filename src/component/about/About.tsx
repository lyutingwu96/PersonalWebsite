import * as React from "react";

import profile from "../../assets/profile.jpeg"

export const About: React.FC = () => {

  return (
    <div className="animate-fadeIn">
        <div className="w-fit mx-auto my-[120px] sm:flex sm:items-center sm:h-[svh] sm:my-0 sm:justify-center">
            <div className="w-[200px] h-[200px] sm:min-w-[220px] sm:min-h-[220px] sm:w-[220px] sm:h-[220px] mx-auto rounded-full overflow-clip relative shadow-[3px_5px_0px_0px] shadow-green">
                <img src={profile} className="scale-[1.3] absolute top-5 right-2 lozad"/>
            </div>
            <div className="w-[80%] mx-auto sm:w-[70%] sm:max-w-[500px] mt-[60px] sm:ml-[60px] sm:mr-[30px] sm:mt-0">
                <div className="font-title text-md text-green mb-2 ">Hi! I'm Lyu-Ting!</div>
                <div className="font-content text-md text-[#CCCCCC] mb-4 font-light">
                    I'm a software engineer that is enthusiastic about both <div className="text-pink inline-block">tech</div> and <div className="text-green inline-block"> art</div>.
                </div>
                <div className="font-content text-md text-[#CCCCCC] mb-4 font-light">
                    I have 3 years of professional experience. I work mostly on front-end development,
                     but also have experiences designing UI from scratch and implementing it on my own.</div>

                <div className="font-content text-md text-[#CCCCCC]  font-light">
                    During my free time, I dedicate myself to digital painting. I have been 
                    learning drawing on my own for more than 10 years. Not only did the self-learning 
                    experience enable me to learn new skills fast, but it also make me a passionate and 
                    patient person as I always try my best to perfect my works.</div>
            </div>
        </div>
      
    </div>
  );
}
