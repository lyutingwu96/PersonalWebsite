import * as React from 'react';

export interface ProjectImageProps {
    bannerImg: string,
    hoverImg: string,
}

export const ProjectImage: React.FC<ProjectImageProps> = ({bannerImg, hoverImg}) => {
  return (
        <div className="w-full h-[200px] sm:h-[240px] rounded-[5px] group-hover:rounded-b-none flex justify-center items-center overflow-hidden duration-700 ">
            <div className="w-full h-full sm:w-[calc(95%)] sm:h-[calc(92%)] rounded-[3px] group-hover:rounded-b-none overflow-hidden relative group-hover:w-full group-hover:h-full  duration-700"> 
                <img className="object-cover w-full h-full absolute" src={bannerImg}/>
                <div className="w-full h-full duration-700 opacity-100 sm:opacity-0 group-hover:opacity-100">
                        <div className="w-full h-full bg-dark opacity-70 absolute" />
                        <img className="object-cover w-full h-full absolute" src={hoverImg}/>
                </div>
            </div>
        </div>
  );
}
