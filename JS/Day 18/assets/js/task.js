// TASK-1 Closure(Counter Application)
const createCounter=()=>{
count=0


 const inner=(value)=>{
    count+=value
    console.log(count)
     }
      return inner

 }
const addingData=createCounter()
addingData(10)
addingData(10)
addingData(10)
addingData(10)
addingData(10)
 