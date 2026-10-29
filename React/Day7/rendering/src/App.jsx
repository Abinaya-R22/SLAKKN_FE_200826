import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>

      <Route/>
    </Routes>

  </>)
}

export default App
