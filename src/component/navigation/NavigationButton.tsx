import React from 'react'

interface NavigationBtnProps {
    buttonText: string
}

export const NavigationButton : React.FC<NavigationBtnProps> = ({buttonText} ) => {
  return (
    <div className={`
      text-green text-lg font-title font-medium 
        self-center mx-2 h-full px-2 pt-1
      hover:text-pink hover:decoration-solid hover:underline hover:underline-offset-[6px] duration-700`}>
        {buttonText}
    </div>
  )
}
