// Task-1 GLOBAL AND FUNCTION SCOPE

let company = "ABC Technologies";
function showEmployee(){
    let employee = "Arun";
    console.log(employee);
    console.log(company);
}
showEmployee();
// console.log(employee);
console.log(company);
// here company is accessible because it is declared in the global scope, while employee is not accessible outside the function showEmployee() because it is declared in the functional scope of that function.

// Task-2 Block Scope

if (true) {
let age=25;
const city= "Chennai";
console.log(age);
console.log(city);
}
// console.log(age);
// console.log(city);
// // here age and city are not accessible outside the block because they are declared using let and const which have a block scope.

if (true) {
var age=25;
const city= "Chennai";
console.log(age);
console.log(city);
}
console.log(age);
//  console.log(city);
// here age is accessible because it is declared using var which has a global scope, while city is not accessible outside the block because it is declared using const which has a block scope.


// // Task-3 Hoisting

console.log(myName);
var myName = "Abinaya";

// console.log(role);
// let role = "Developer";

greet();
function greet() {
    console.log("Welcome to JavaScript");
}

// // Task-4 Closures
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}
const addCounter = createCounter();
addCounter();
addCounter();
addCounter();

// TASK 5 – CALLBACK CALCULATOR

function add(a, b) {
    console.log(a + b);
}
function subtract(a, b) {
    console.log(a - b);
}
function calculate(a,b,callback) {
callback(a,b);
}
calculate(20, 10, add);
calculate(20, 10, subtract);





