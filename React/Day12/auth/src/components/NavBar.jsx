// import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
    <div className='bg-amber-300 p-3 flex justify-between items-center'>
        <div>
            Logo
        </div>
        <div className='flex gap-10'>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/"}>Home</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar