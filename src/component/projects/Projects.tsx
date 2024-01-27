import * as React from 'react';
import { ProjectCard } from './ProjectCard';

import healthEarPhoto from "../../assets/healthEar/healthEarPrototype.gif"
import healthEarLogo from "../../assets/healthEar/healthEarLogo.png"
import exiTurtlePhoto from "../../assets/exiTurtle/exiTurtle.png"
import exiTurtleLogo from "../../assets/exiTurtle/exiTurtleLogo.png"

export const Projects: React.FC = () => {
  return (
    <div className="animate-fadeIn">
        <div className="w-fit mx-auto my-[120px] lg:my-[220px]">
            <div className="gap-12 lg:gap-16 grid lg:grid-cols-2">
                <ProjectCard bannerImg={healthEarPhoto} hoverImg={healthEarLogo} path="/projects/HealthEar"/>
                <ProjectCard bannerImg={exiTurtlePhoto} hoverImg={exiTurtleLogo} path="/projects/ExiTurtle"/>

            </div>
        </div>
    </div>
  );
}
