import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="bg-green-500 font-bold p-3 flex justify-start gap-10 items-center">
     <div className="mx-15">
      Logo
    </div>
    <div>
     <Link to={"/"}>Home</Link>
    </div>
    </div>
    </>
  )
}

export default Navbar
