// Task-1  - Let

let salary = 20000
salary= 25000
console.log(salary);

// Task-2  - Const

const country="India"
console.log("My country is "+ country);

//Task-3 Template Literals

let name="Arun";
let age=25;
console.log(`My name is ${name} and my age is ${age}`);

// Task-4 Template literal calculation

let price = 500;
let quantity = 4;
// let total=price*quantity;
// console.log(`Total Price = ${total}`);
console.log(`Total Price = ${price*quantity}`);

// Task-5 Default Parameter

function greet(name="Guest"){
    console.log(`Welcome ${name}`);
}
greet("Arun");
greet();

// Task-6 Array Destructuring

const colors=["Red","Green","Blue"];
const[first,second,third]=colors
console.log(first);
console.log(second);
console.log(third);




