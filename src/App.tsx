import { useState } from "react"
import { LandingAnimation } from "./component/about/LandingAnimation"
import { NavigationBar } from "./component/navigation/NavigationBar"


function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <div className=" w-screen  relative">
      <NavigationBar/>
      <div className="w-screen min-h-screen flex justify-center items-center">
        {isAnimationComplete && <div className="animated-fadeText fixed mx-auto text-transparent bg-clip-text self-center font-title bg-gradient-to-r from-pink from-[20%] to-green">
            Thank you for visiting. Website build-in-progress...
        </div>}
        <LandingAnimation setAnimationComplete={setIsAnimationComplete}/>
      </div>
    </div>
  )
}

export default App
