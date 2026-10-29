import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <>
    <div className='bg-green-200 font-thin p-2'>
      <div className="flex gap-15 mx-15">
        <Link to="/string">String Rendering</Link>
        <Link to="/number">Number Rendering</Link>
        <Link to="/boolean">Boolean Rendering</Link>
        <Link to="/false">Falsy Rendering</Link>
      </div>
    </div>
  </>)
}

export default Banner
