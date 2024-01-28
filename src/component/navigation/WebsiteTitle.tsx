import React from 'react';
import icon from "../../assets/icon.svg"

export const WebsiteTitle : React.FC = () => {
  return (
      <div className={`
          text-xl font-title text-transparent bg-clip-text flex
          bg-gradient-to-r from-pink from-[20%] to-green
        `}>
        <img src={icon} alt="" className="w-8 mr-2"/>
          Lyu-Ting Wu
      </div>
  )
}