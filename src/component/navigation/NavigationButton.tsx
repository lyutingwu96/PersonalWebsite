import React from "react";
import { NavLink } from "react-router-dom";

interface NavigationBtnProps {
  buttonText: string;
  path: string;
  menuVisibilityHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationButton: React.FC<NavigationBtnProps> = ({
  buttonText,
  path,
  menuVisibilityHandler,
}) => {
  const activeStyle = "text-pink decoration-solid underline ";
  const inactiveStyle = "text-green ";
  const commonStyle = `text-lg font-title font-medium 
                        self-center mx-2 h-full px-2 pt-1 underline-offset-[6px]
                        hover:text-pink hover:decoration-solid hover:underline duration-700`;

  const activeStyleCombine = activeStyle + commonStyle;
  const inactiveStyleCombine = inactiveStyle + commonStyle;

  return (
    <NavLink
      to={path}
      onClick={() => menuVisibilityHandler(false)}
      className={({ isActive }) =>
        isActive ? activeStyleCombine : inactiveStyleCombine
      }
    >
      {buttonText}
    </NavLink>
  );
};
