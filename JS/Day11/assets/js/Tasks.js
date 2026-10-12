// Task-1 Double All Numbers

let numbers=[10,20,30,40,50]
let results=numbers.map((e,i)=>{
return e*2
})
console.log(results);

// Task-2 Get Even Numbers

let Numerical=[10,15,20,25,30,35,40]
let findingFilter=Numerical.filter((e,i)=>{
        return e%2===0;

})
console.log(findingFilter);

// Task-3 Find First Number

let num=[10,25,35,50,60]
let evenNum=num.find((e,i)=>{
    return e>30;
})
console.log(evenNum);

// Task-4 Find Student

let students = [
{ id: 1, name: "Arun", mark: 75 },
{ id: 2, name: "Priya", mark: 90 },
{ id: 3, name: "Kumar", mark: 65 }
];
let result=students.find((data)=>{
    return data.id ===2;
})
console.log(result);

// Task-5 Filter Employees

let employees = [
{ name: "Arun", salary: 25000 },

{ name: "Priya", salary: 45000 },

{ name: "Kumar", salary: 30000 },

{ name: "Ravi", salary: 50000 }
];
let data=employees.filter((employee)=>{
    return employee.salary>=30000

})
console.log(data);
