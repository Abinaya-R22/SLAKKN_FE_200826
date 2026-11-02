import { useState } from "react"

const SimpleCounter = () => {
    
  const [count, setCount] = useState(0)
  const Increment = () => {
   setCount(count + 1)
  }
    
    const Decrement = () => {
      setCount(count - 1)
  }
  const Reset = () => {
    setCount(0)
  }
  return (<>
    <div>
      <h1 className="text-2xl font-bold">{count}</h1>
      
        <button onClick={Increment} className="p-1 mr-2 rounded bg-green-600 text-white">
          Increment
        </button>
        <button onClick={Decrement} className="p-1 mr-2 rounded bg-red-600 text-white">
          Decrement
        </button>
        <button onClick={Reset} className="p-1 rounded bg-yellow-600 text-white">
          Reset
        </button>
      
    </div>
  </>)
}

export default SimpleCounter
