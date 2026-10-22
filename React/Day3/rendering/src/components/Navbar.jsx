import Button from "./Button"
import logodata from "../assets/hero.png"

const Navbar=()=>{
    return(<>
    <div className="navbar">
     <div className="logo">
     <img src={logodata}/>
     </div>
     <div className="link">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Login</a>
      <Button/> 
     </div>
    </div>
    </>)
}
export default Navbar