import * as React from 'react';

export interface TagProps {
    tag: string,
}

export const Tag: React.FC<TagProps> = ({tag}) => {
  return (
    <div className="bg-green group-hover:bg-pink w-fit px-[6px] py-[2px] rounded-[10px] font-content text-sm text-dark duration-700">
        {tag}
    </div>
  );
}
