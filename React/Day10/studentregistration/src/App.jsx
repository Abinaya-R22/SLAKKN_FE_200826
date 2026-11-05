import { useState } from 'react'
// const App = () => {

// const [datas, setDatas] = useState("")
// const [showdatas, setShowDatas] = useState(null)

// const handleChange = (e) => {
//   setDatas(e.target.value)
// }

// const handleClick = (e) => {
//   e.preventDefault()

// if(datas%2===0){
//   setShowDatas("Even Number")
// }
// else{
//   setShowDatas("Odd Number")
// }


//   // setShowDatas(datas)


// }

const App = () => {
  












  return (<>
    <div>
     <form>
      <input type="text" onChange={handleChange} placeholder='Enter your name' />
      <button onClick={handleClick}>Submit</button>
     </form>


<div>
  <h1>{showdatas}</h1>
</div>



    </div>
  </>)
}

export default App
