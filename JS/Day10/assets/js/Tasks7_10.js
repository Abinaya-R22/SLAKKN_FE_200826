// Task-7 Object Destructuring

const student={
    name:"Arun",
    age:20,
    city:"Chennai"
};
const{name,age,city}=student
console.log(name);
console.log(age);
console.log(city);

// Task-8 spread

const numbers=[10,20,30];
const arr2=[...numbers,40,50];
console.log(arr2);

// Task-9 Rest
function showNumbers(...numbers){
    console.log(numbers);
  
}
showNumbers(10,20,30,40)

// Task-10 Arrow Function

const add=(a,b)=>{
return a+b;
}
console.log(add(10,20));





