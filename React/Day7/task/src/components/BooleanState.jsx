const btn=document.getElementById("btn")
const BooleanState = () => {
btn.addEventListener("click",()=>{
  return (
    <>
    <div>
      <p>Please Login</p>
      <button className= "btn bg-black text-white rounded-xl p-1">Login</button>
      <button className="bg-gray-300 text-black rounded-xl p-1">Logout</button>
    </div>
  </>)
}

export default BooleanState
