import * as React from 'react';
import { ProjectCard } from './ProjectCard';

import healthEarPhoto from "../../assets/healthEar/healthEarPrototype.png"
import healthEarLogo from "../../assets/healthEar/healthEarLogo.png"
import exiTurtle from "../../assets/exiTurtle/exiTurtle.png"

export const Projects: React.FC = () => {
  return (
    <div className="animate-fadeIn">
        <div className="w-fit mx-auto my-[120px] lg:my-[220px]">
            <div className="gap-8 lg:gap-16 grid lg:grid-cols-2">
                <ProjectCard bannerImg={healthEarPhoto} hoverImg={healthEarLogo} path="/projects/healthEar"/>
                <ProjectCard bannerImg={exiTurtle} hoverImg={exiTurtle} path="/projects/exiTurtle"/>

            </div>
        </div>
    </div>
  );
}
