import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {


    const navigate = useNavigate()

    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPassword,setUserPassword] = useState("")
    const [error,setError] = useState("")


  
    const handleName = (e)=>{

        setUserName(e.target.value)

    }

        const handleEmail = (e)=>{

            setUserEmail(e.target.value)

    }

        const handlePassword = (e)=>{

            setUserPassword(e.target.value)

    }

    const handleClick = (e)=>{

        e.preventDefault()


        if(!userName || !userEmail || !userPassword){
             setError("Please Fill the Form")
              
              return
        }

        const checkDatas = JSON.parse(localStorage.getItem("authdatas")) || []
        const checkEmail = checkDatas.find((e,i)=>e.userEmail==userEmail)

        if(checkEmail) {

            setError("Alerady Used")
            return

        }

         let obj = {id:Date.now(),userName,userEmail,userPassword}

         let datas  = JSON.parse(localStorage.getItem("authdatas")) || []

         datas.push(obj)

//          setDatas(datas)

        localStorage.setItem("authdatas",JSON.stringify(datas))

         setUserName("")
         setUserEmail("")
         setUserPassword("")

         setError("Successfully Login..Please Wait...")
         
         setTimeout(()=>{
         navigate("/login")
         },2000)
  
         
    }




  return (
    <>
     <div className='bg-gray-100 p-10 flex flex-col justify-center items-center h-100' >
       <div className='bg-white shadow rounded p-4 w-110'>          
         <h2 className='text-3xl mb-2'>Register</h2>
            <p>Register Here if New User!!</p>
            <p className='text-red-500'>{error}</p>
        </div>
         <form className='bg-white shadow p-5 rounded flex flex-col gap-6 w-110 h-60'>
            <div>
                 <input type="text" value={userName} onChange={handleName} placeholder='Enter the Name' className='border border-green-600 w-100 p-1 rounded shadow' /> 
            </div>
            <div>
                <input type="email" value={userEmail} onChange={handleEmail} className='border border-green-400 w-100 p-1 rounded shadow' placeholder='Enter the Email' /> 
            </div>
            <div>
                <input type="password" value={userPassword} onChange={handlePassword} className='border border-green-400 w-100 p-1 rounded shadow' placeholder='Enter the Password' />
            </div>
            <div>
                <button onClick={handleClick} className='bg-blue-600 text-white rounded p-1 w-30 shadow'>Register</button>
            </div>
        </form>

    </div>  

  </>
   ) 
  }
 export default Register