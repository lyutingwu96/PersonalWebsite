import { useState } from "react"
import { LandingAnimation } from "./component/about/LandingAnimation"
import { NavigationBar } from "./component/navigation/NavigationBar"
import { About } from "./component/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import lozad from 'lozad';
import { BuildInProgress } from "./component/navigation/BuildInProgress";
import { Projects } from "./component/projects/Projects";
const observer = lozad();
    observer.observe();

function App() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  return (
    <BrowserRouter>
      <div className=" w-screen  relative">
        {isAnimationComplete &&
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/projects/healthear" element={<BuildInProgress/>}/>
              <Route path="/resume" element={<BuildInProgress/>}/>
          </Routes>
        }
        {isAnimationComplete && <NavigationBar/>}

        {!isAnimationComplete && <div className="w-screen min-h-screen flex justify-center items-center">
          <LandingAnimation setAnimationComplete={setIsAnimationComplete}/>
        </div>}
      </div>
    </BrowserRouter>
  )
}

export default App
observer.observe();
