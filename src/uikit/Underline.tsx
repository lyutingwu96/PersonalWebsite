import * as React from "react";

export const Underline: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <span className="decoration-solid underline underline-offset-[4px] decoration-green decoration-[3px]">
      {props.children}
    </span>
  );
};
