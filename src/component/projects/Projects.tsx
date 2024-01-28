import * as React from 'react';
import { ProjectCard } from './ProjectCard';

import healthEarPhoto from "../../assets/healthEar/healthEarPrototype2.gif"
import healthEarLogo from "../../assets/healthEar/healthEarLogo.png"
import exiTurtlePhoto from "../../assets/exiTurtle/exiTurtle.png"
import exiTurtleLogo from "../../assets/exiTurtle/exiTurtleLogo.png"

export const Projects: React.FC = () => {
  return (
    <div className="animate-fadeIn">
        <div className="w-fit mx-auto my-[120px]">
            <div className="gap-12 lg:gap-16 grid lg:grid-cols-2">
                <ProjectCard 
                    bannerImg={healthEarPhoto} 
                    hoverImg={healthEarLogo}
                    projectTitle="HealthEar"
                    projectDescription="Middle ear infection acoustic screening app for children."
                    tags={["Developer", "UI Designer", "React Native"]}
                    path="/projects/HealthEar"/>
                <ProjectCard 
                    bannerImg={exiTurtlePhoto} 
                    hoverImg={exiTurtleLogo}
                    projectTitle="ExiTurtle"
                    projectDescription="A serious game for children with ADHD."
                    tags={["Developer", "UI Designer", "Unity 3D"]}
                    path="/projects/HealthEar"/>
            </div>
        </div>
    </div>
  );
}
