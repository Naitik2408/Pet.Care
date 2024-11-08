import { useSelector, useDispatch } from "react-redux"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Services from "./components/Service/Services"
import Subscribe from "./components/Subscribe"
import Testmonial from "./components/Testmonial/Testmonial"
import SheduleCall from "./popup/SheduleCall"

import CustomCursor from "./components/CustomCursor"


function App() {
  const isCallVisible = useSelector(state => state.call.isVisible)

  return (
    <div className="bg-pink-50 min-h-screen relative">
      <CustomCursor/>
      <div className="h-screen flex flex-col">
        <div className="h-fit">
          <Navbar />
        </div>
        <div className="flex-1">
          <Home />
        </div>
      </div>
      <Services />
      <Testmonial />
      <Subscribe />



      {/* <div className={`flex justify-center items-center fixed w-screen h-screen left-0 top-0 bg-gray-400/70 z-50 ${isCallVisible ? '' : 'hidden'}`}> */}
        <SheduleCall className={`${isCallVisible? 'block':'hidden'}`} />
      {/* </div> */}
    </div>
  )
}

export default App
