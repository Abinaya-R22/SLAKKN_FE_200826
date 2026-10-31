
// Task 1 – Static Array Rendering

// const App = () => {
// const languages = ["HTML", "CSS", "JavaScript", "React", "Python"];

//   return (
//     <> 
//     <div>  
//       <ul className="list-disc pl-5">
//         {languages.map((e,i)=>(
//         <li key={i}>{e}</li>
      
//       ))}
//       </ul>
      
 
//     </div>
//   </>)
// }

// export default App

// Task 2 – Static Object Rendering

import React from 'react'

const App = () => {
  const student = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};
  return (
<>
    <div>
      <h1>{student.name}</h1>
      <p>{student.age}</p>
      <p>{student.department}</p>
      <p>{student.city}</p>


    </div>
 </> )
}

export default App

