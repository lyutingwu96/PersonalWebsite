import React, { useState } from 'react'

import Lottie from "lottie-react"
import landingAnimationData from "../../assets/landingAnimationData.json"
import landingAnimationData_Phone from "../../assets/landingAnimationData_Phone.json"
 
export interface LandingAnimationProps {
    setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LandingAnimation : React.FC<LandingAnimationProps> = ({setAnimationComplete}) => {
    const [isHidden, setIsHidden] = useState("")

    const animationData = window.innerWidth > 640 ? landingAnimationData : landingAnimationData_Phone;
    return (
        <div className={`w-screen h-[100svh] overflow-clip flex justify-center items-center
        ${isHidden} bg-dark`}>
            <Lottie style={{width:'100vw'}} animationData={animationData} loop={false} onComplete={()=>{
                setIsHidden("hidden");
                setAnimationComplete(true);
            }} />
        </div>

  )
}
