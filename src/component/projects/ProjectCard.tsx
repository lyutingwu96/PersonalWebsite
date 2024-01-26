import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ProjectCardProps {
    bannerImg: string,
    hoverImg: string,
    path: string, 
}

export const ProjectCard: React.FC<ProjectCardProps> = ({bannerImg, hoverImg, path}) => {
  return (
    <Link to={path} className="w-[280px] h-[300px] sm:w-[480px] relative hover:-skew-y-1 cursor-pointer duration-700 ">
        {/* <div className="w-[calc(98%)] h-[calc(98%)] rounded-[5px] border-2 border-pink flex justify-center items-center overflow-hidden duration-700 absolute top-6 left-6 opacity-60">

        </div> */}
    
        <div className="w-full h-full rounded-[5px] border-2 border-green flex justify-center items-center overflow-hidden duration-700 bg-dark shadow-green shadow-[8px_6px_0px_0px] lg:shadow-[12px_10px_0px_0px] lg:shadow-green hover:shadow-pink hover:border-pink">
            <div className="w-[calc(92%)] h-[calc(92%)] sm:w-[calc(95%)] rounded-[3px] overflow-hidden relative hover:w-full hover:h-full  duration-700"> 
                <img className="object-cover w-full h-full absolute hover:opacity-0 duration-700" src={bannerImg}/>
                <img className="object-cover w-full h-full opacity-0 hover:opacity-100 absolute duration-700" src={hoverImg}/>

            </div>
        </div>
    </Link>
  );
}
