import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='@media w-sm h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
          <div className='fixed flex flex-wrap justify-center gap-3 bg-white px-2 py-2 rounded-xl'>
            <button onClick={() => setColor("red")}
              className='px-2 rounded-full' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("blue")} className='px-2 rounded-full' style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => setColor("green")} className='px-2 rounded-full' style={{ backgroundColor: "green" }}>green</button>
            <button onClick={() => setColor("yellow")} className='px-2 rounded-full' style={{ backgroundColor: "yellow" }}>yellow</button>
            <button onClick={() => setColor("black")} className='px-2 rounded-full' style={{ backgroundColor: "black" }}>black</button>
            <button onClick={() => setColor("maroon")} className='px-2 rounded-full' style={{ backgroundColor: "maroon" }}>maroon</button>
            <button onClick={() => setColor("pink")} className='px-2 rounded-full' style={{ backgroundColor: "pink" }}>pink</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
