import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {


    const navigate = useNavigate()

    
    const [userEmail,setUserEmail] = useState("")
    const [userPassword,setUserPassword] = useState("")
    const [error,setError] = useState("")


  
   
        const handleEmail = (e)=>{

            setUserEmail(e.target.value)

    }

        const handlePassword = (e)=>{

            setUserPassword(e.target.value)

    }

    const handleClick = (e)=>{

        e.preventDefault()


        if( !userEmail || !userPassword){
             setError("Please Fill the Form")
              
              return
        }

        const checkDatas = JSON.parse(localStorage.getItem("authdatas")) || []
        const checkEmail = checkDatas.find((e,i)=>e.userEmail==userEmail && e.userPassword==userPassword)

        if(!checkEmail) {

            setError("Invalid User")
            return

        }

        localStorage.setItem("isActive",JSON.stringify(checkEmail))
        

        setError("You are Correct User..Please Wait 2 seconds...")

         setTimeout(()=>{
         navigate("/")
         },2000)


         setUserEmail("")
         setUserPassword("")

        
         
        
         
    }




  return (
    <>
     <div className='bg-gray-100 p-10 flex flex-col justify-center items-center h-100' >
       <div className='bg-white shadow rounded p-4 w-110'>          
         <h2 className='text-3xl mb-2'>Login</h2>
            <p>Login Here if Already Registered!!</p>
            <p className='text-red-500'>{error}</p>
        </div>
         <form className='bg-white shadow p-5 rounded flex flex-col gap-6 w-110 h-60'>
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
 export default Login