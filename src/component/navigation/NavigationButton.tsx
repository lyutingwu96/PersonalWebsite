import React from 'react'

interface NavigationBtnProps {
    buttonText: string
}

export const NavigationButton = ({buttonText}: NavigationBtnProps) => {
  return (
    <div className="text-green hover:text-pink hover:decoration-solid hover:underline text-lg font-title font-medium self-center mx-2 h-full px-2">
        {buttonText}
    </div>
  )
}
