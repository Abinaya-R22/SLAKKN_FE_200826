// TASK-1 Fruit Array

let fruits=["apple","orange","grapes","banana","kiwi"]
    console.log(fruits);
    console.log(fruits[0]);
    console.log(fruits[2]);
    console.log(fruits[fruits.length-1]);

// TASK-2 Update colors

let colors = ["Red", "Blue", "Green", "Yellow"];
colors[1]="Black";
console.log(colors);

// Task-3 LOOP STUDENT NAMES

let students = ["Arun", "Kumar", "Priya", "Ravi", "Divya"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Task-4 Total Marks

let marks = [80, 70, 90, 60, 85];
let total = 0;
for(let a=0; a<marks.length;a++){
    total=total+ marks[a];
}
console.log("Total =" + total);

// TASK 5 – ARRAY MULTIPLICATION

let numbers = [2, 4, 6, 8, 10];
for(let c=0; c<numbers.length;c++){
    multiplication = numbers[c] * 2;
    console.log(multiplication);
}

// Task-6 -STUDENT OBJECT
let student = {name: "Abi", age: 20, course: "JavaScript", city: "Chennai"};
console.log("name: " + student.name);
console.log("course: " + student.course);

// TASK 7 – UPDATE EMPLOYEE

let employee = {name: "Arun",salary: 25000, role: "Developer"};
employee.salary = 30000; // Update salary
console.log(employee);

// TASK 8 – ADD NEW PROPERTY

let product = {name: "Laptop",price: 50000};
product.brand = "Dell";
console.log("product name: " + product["name"]);
console.log("product price: " + product["price"]);
console.log("brand: " + product["brand"]);

// TASK 9 – LOOP OBJECT

let car = {brand: "Toyota", model: "Fortuner", year: 2025};
for (let key in car) {
    console.log(key + ": " + car[key]);
}

// TASK 10 – ARRAY OF OBJECTS

let studentData = [{ name: "Arun", mark: 80},{name: "Priya",mark: 90},{name: "Kumar",mark: 75}];
for(let i=0; i<studentData.length;i++){
console.log(studentData[i].name+"-"+studentData[i].mark);
}