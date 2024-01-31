import { useState } from "react"
import Itemlist from "./Component/Itemlist"


function App() {
  // const [color, setColor] = useState('black')

  return (
    <>
      {/* <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white rounded-3xl px-3 py-2">
            <button type="button" style={{backgroundColor: color}} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg" onClick={() => setColor("Red")}> Red</button>
            <button type="button" style={{backgroundColor: color}} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg" onClick={() => setColor("green")}> Green</button>
            <button type="button" style={{backgroundColor: color}} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg" onClick={() => setColor("blue")}> Blue</button>
            <button type="button" style={{backgroundColor: color}} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg" onClick={() => setColor("yellow")}> Yellow</button>
            <button type="button" style={{backgroundColor: color}} className="outline-none px-4 py-1 rounded-full  text-white shadow-lg" onClick={() => setColor("skyblue")}> Sky Blue</button>
          </div>
        </div>
      </div> */}

      <h1>React useState Practice</h1>
      <Itemlist />
    </>
  )
}

export default App
