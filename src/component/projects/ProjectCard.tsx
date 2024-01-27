import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
    bannerImg: string,
    hoverImg: string,
    path: string, 
}

export const ProjectCard: React.FC<ProjectCardProps> = ({bannerImg, hoverImg, path}) => {
  return (
    <Link to={path} className="w-[280px] h-[200px] sm:h-[300px] sm:w-[480px] relative cursor-pointer duration-700 ">
        <div className="w-full h-full rounded-[5px] border-2 border-green flex justify-center items-center overflow-hidden duration-700 bg-dark shadow-green shadow-[5px_3px_0px_0px]  hover:shadow-pink hover:border-pink">
            <div className="w-full h-full sm:w-[calc(95%)] sm:h-[calc(92%)] rounded-[3px] overflow-hidden relative hover:w-full hover:h-full  duration-700"> 
                <img className="object-cover w-full h-full absolute" src={bannerImg}/>
                <div className="w-full h-full duration-700">
                        <div className="w-full h-full bg-dark opacity-80 absolute" />
                        <img className="object-cover w-full h-full absolute" src={hoverImg}/>
                </div>

            </div>
        </div>
    </Link>
  );
}
