
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (<>
    <div className="bg-violet-300 font-bold p-3 flex justify-between items-center">
      <div className='mx-15 bg-pink-400 p-1 rounded-2xl w-30 text-center'>
       Logo
      </div>
      <div className='mx-15 flex gap-10'>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/help"}>Help</Link>
      </div>
    </div>
  </>)
}

export default NavBar
