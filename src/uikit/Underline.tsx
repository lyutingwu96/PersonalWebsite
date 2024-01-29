import * as React from "react";

export const Underline: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <span className="decoration-solid underline underline-offset-2 decoration-green decoration-2">
      {children}
    </span>
  );
};
