import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';
import { ProjectImage } from './ProjectImage';

export interface ProjectCardProps {
    bannerImg: string,
    hoverImg: string,
    projectTitle: string,
    projectDescription: string,
    tags: string[]
    path: string, 
}

export const ProjectCard: React.FC<ProjectCardProps> = ({bannerImg, hoverImg, projectTitle, projectDescription, tags, path}) => {
  return (
    <Link to={path} className="group w-[280px] sm:w-[330px] h-[330px] sm:h-[400px] border-[1px] border-green rounded-[5px] relative  duration-700 hover:border-pink  overflow-hidden">
        
        <ProjectImage bannerImg={bannerImg} hoverImg={hoverImg} />

        <div className="w-full float-bottom px-2 py-1">
            <div className="font-title text-lg text-green group-hover:text-pink duration-700 mb-2">{projectTitle}</div>
            <div className="font-content text-md text-light font-light pb-2">{projectDescription}</div>
            <div className="gap-[6px] justify-end absolute bottom-2 right-2 flex-wrap-reverse hidden sm:flex">
                {tags.map((tag) => <Tag tag={tag}/> )}
            </div>
        </div>
    </Link>
  );
}
