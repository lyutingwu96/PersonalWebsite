import { NavigationBar } from "./component/navigation/NavigationBar"

function App() {

  return (
    <div className=" w-screen  relative">
      <NavigationBar/>
      <div className="w-screen min-h-screen flex justify-center items-center">
        <div className="text-transparent bg-clip-text self-center font-title bg-gradient-to-r from-pink from-[20%] to-green">
          Thank you for visiting. Website build-in-progress...
        </div>
      </div>
    </div>
  )
}

export default App
