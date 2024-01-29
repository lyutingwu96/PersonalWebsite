import * as React from "react";

export const Tag: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-green group-hover:bg-pink w-fit px-[6px] py-[2px] rounded-[10px] font-content text-sm text-dark duration-700">
      {children}
    </div>
  );
};
