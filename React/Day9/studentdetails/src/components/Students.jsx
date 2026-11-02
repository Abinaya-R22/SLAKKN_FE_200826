

const Students = ({ datas1, datas2, datas3 }) => {
   
  return (
   <>
   <div>
     <h3>Name: {datas1.name}</h3>
     <p>Age: {datas1.age}</p>
     <p>Course: {datas1.course}</p>
   </div>
   <br></br>
   <div>
     <h3>Name: {datas2.name}</h3>
     <p>Age: {datas2.age}</p>
     <p>Course: {datas2.course}</p>
   </div>
    <br></br>
   <div>
     <h3>Name: {datas3.name}</h3>
     <p>Age: {datas3.age}</p>
     <p>Course: {datas3.course}</p>
   </div>

   </>)
   }
      
     

export default Students
