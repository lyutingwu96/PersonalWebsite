import { NavigationBar } from "./component/navigation/NavigationBar"

function App() {

  return (
    <div className="h-screen w-screen bg-[#272727]">
      <NavigationBar/>
      <div className="mt-12 w-fit text-transparent bg-clip-text self-center mx-auto font-title bg-gradient-to-r from-pink from-[20%] to-green">
        Thank you for visiting. Website build-in-progress...
      </div>
    </div>
  )
}

export default App
