import { useEffect, useState } from "react"


const DashBoard = () => {

 const [showDatas,setShowDatas] = useState({})

 useEffect(()=>{

   const datas =JSON.parse(localStorage.getItem("isActive")) 

   setShowDatas(datas)
    

 },[])

  return (
    <>
    
     
      <h1>{showDatas.userName}</h1>
     <p>{showDatas.userEmail}</p> 
    
    </>
  ) 
}

export default DashBoard