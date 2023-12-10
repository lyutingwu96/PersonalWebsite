import React from 'react';
import icon from "../../assets/icon.svg"

export const WebsiteTitle : React.FC = () => {
  return (
      <div className={`
          text-xl font-title text-transparent bg-clip-text bg-green flex opacity-10
          hover:bg-gradient-to-r hover:from-pink hover:from-[20%] hover:to-green hover:opacity-100 duration-700
        `}>
        <img src={icon} alt="" className="w-8 mr-2"/>
          Lyu-Ting Wu
      </div>
  )
}