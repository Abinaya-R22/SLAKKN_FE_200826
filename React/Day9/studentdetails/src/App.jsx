
import Students from "./components/Students"
const App = () => {

  const Student1={
     name: "Abi",
     age: 25, 
     course:"Python"}

   const Student2={
    name: "Sanjai", 
    age: 26, 
    course:"Java"}

    const Student3={
      name: "Yakesh", 
      age:24, 
      course:"Mern Stack"}



  return (<>
    
      <Students  datas1={Student1}
      datas2={Student2} datas3={Student3}/>
    
  </>)
}

export default App