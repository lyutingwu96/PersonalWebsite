import React, { useState } from 'react'

import Lottie from "lottie-react"
import landingAnimationData from "../../assets/landingAnimationData.json"
 
export interface LandingAnimationProps {
    setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LandingAnimation : React.FC<LandingAnimationProps> = ({setAnimationComplete}) => {
    const [isHidden, setIsHidden] = useState("")

    return (
        <div className={`w-screen min-h-screen flex justify-center items-center animate-fade ${isHidden} bg-dark`}>
            <Lottie animationData={landingAnimationData} loop={false} onComplete={()=>{
                setIsHidden("hidden");
                setAnimationComplete(true);
            }} />
        </div>

  )
}
