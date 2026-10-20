// TASK-1 Closure(Counter Application)
const createCounter=()=>{
 let count=0

 const inner=()=>{
    count+=10
    console.log(count)
     }
      return inner

 }
const addingData=createCounter()
addingData()
addingData()
addingData()
addingData()
addingData()

// Task 2 — Callback Function (Salary Calculation)
const calculate=(salary,callback)=>{
   callback(salary)
}
const addBonus=(salary)=>{
 console.log('Salary After Bonus:',salary+5000)
}
const deductSalary=(salary)=>{
   console.log('Salary After Deduction',+salary-2000); 
}
const originalSalary = 20000
console.log('Original Salary:', originalSalary)
calculate(originalSalary,addBonus)
calculate(originalSalary,deductSalary)

// Task 3 — Promise (Student Result Checking)

   const checkResult=(mark)=>{
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if(mark>=35){
           resolve("Student Passed")
         }
         else{
            reject("Student Failed")
         }
         },2000); 
   })
}

 console.log("checkResult(75)");
   checkResult(75)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  
console.log("checkResult(20)");
  checkResult(20)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });