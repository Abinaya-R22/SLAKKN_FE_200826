import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Stringrendering from "./pages/Stringrendering"
import Numberrendering from "./pages/Numberrendering"
import Booleanrendering from "./pages/Booleanrendering"
import Falsyrendering from "./pages/Falsyrendering"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/string" element={<Stringrendering/>}/>
      <Route path="/number" element={<Numberrendering/>}/>
      <Route path="/boolean" element={<Booleanrendering/>}/>
      <Route path="/false" element={<Falsyrendering/>}/>
    </Routes>

  </>)
}

export default App
