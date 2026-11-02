import { useState } from 'react'
import SimpleCounter from './components/SimpleCounter'
const App = () => {

  const [name, setName] = useState("Arun")
  const changeText = () => {
    setName("Kumar")
  }
  return (<>
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      
      <button onClick={changeText} className="p-1 rounded bg-blue-600 text-white">
        Change Name
      </button>
      <br />
      <SimpleCounter />
    </div>
  </>)
}

export default App

