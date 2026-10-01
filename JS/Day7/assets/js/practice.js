let fruits = ["apple", "banana", "cherry"];
console.log(fruits[2]);
console.log(fruits.length);
fruits[1] = "orange";
console.log(fruits);


let numbers = [10, 20, 30, 40];
console.log(numbers[2]);
console.log(numbers.length);
numbers[1] = 25;
console.log(numbers);


let colors = ["red", "green", "blue"];
console.log(colors[2]);
console.log(colors.length);
colors[1] = "yellow";
console.log(colors);


let student = { name: "Arun", age: 21, course: "Full Stack" };
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.name="Anbu");
console.log(student);

let car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.log(car.brand);
console.log(car.model);
console.log(car.year);
car.year = 2021;
console.log(car);


let laptop = { brand: "Dell", ram: "16GB", processor: "i7" };
console.log(laptop.brand);
console.log(laptop.ram);
console.log(laptop.processor);
laptop.ram = "32GB";
console.log(laptop);

let employees = [
  { id: 101, name: "Kumar", role: "Developer" },
  { id: 102, name: "Anita", role: "Designer" }
];
console.log(employees[0].name);
console.log(employees[1].role);
console.log(employees[0].id=103);
console.log(employees);

let courses = [
  { code: "CS101", name: "Intro to Programming" },
  { code: "CS102", name: "Data Structures" }
];

console.log(courses[0].name);
console.log(courses[1].code);
console.log(courses[1].name);
console.log(courses[0].id=103);
console.log(courses);

let animals = [
  { type: "Dog", sound: "Bark" },
  { type: "Cat", sound: "Meow" }
];
console.log(animals[0].type);
console.log(animals[1].sound);
console.log(animals[0].type="Wolf");
console.log(animals);