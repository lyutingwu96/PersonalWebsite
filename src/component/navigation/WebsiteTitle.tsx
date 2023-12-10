import React from 'react';

export const WebsiteTitle : React.FC = () => {
  return (
    <div className={`
        text-xl font-title text-transparent bg-clip-text bg-green opacity-10
        hover:bg-gradient-to-r hover:from-pink hover:to-green hover:opacity-100 duration-700`}>
        Lyu-Ting Wu
    </div>
  )
}