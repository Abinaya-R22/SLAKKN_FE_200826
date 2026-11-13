import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"
import Register from "./pages/Register"


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<DashBoard/>} />
       <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default App