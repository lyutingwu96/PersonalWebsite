import React from 'react'
import { Link } from 'react-router-dom'

interface NavigationBtnProps {
    buttonText: string,
    path: string,
    isActive: boolean,
    activePageHandler: React.Dispatch<React.SetStateAction<string>>,
    menuVisibilityHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavigationButton : React.FC<NavigationBtnProps> = ({buttonText, path, isActive, activePageHandler, menuVisibilityHandler} ) => {
  const activeStyle = "text-pink decoration-solid underline "
  const inactiveStyle = "text-green ";
  const commonStyle = `text-lg font-title font-medium 
                        self-center mx-2 h-full px-2 pt-1 underline-offset-[6px]
                        hover:text-pink hover:decoration-solid hover:underline duration-700`

  const style = isActive ? activeStyle + commonStyle : inactiveStyle + commonStyle

  function linkOnClickHandler() {
    activePageHandler(buttonText)
    menuVisibilityHandler(false)
  }

  return (
    <Link to={path} onClick={linkOnClickHandler} className={style}>
        {buttonText}
    </Link>
  )
}
