// Task-1 Simple Calculator

let a=20;
let b=10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


// Task-2 Even or odd

let number=15;
if(number%2===0){
    console.log("Even number", number);   
}
else{
    console.log("Odd number", number);
}


// Task-3 Positive negative or zero

let Value = -200
if(Value>0){
    console.log("Positive");   
}
else if(Value<0){
    console.log("Negative");   
}
else{
    console.log("Zero");
}

// Task-4 Voting Eligibility

let age=20;
if(age>=18){
    console.log('Eligible to Vote');  
}
else{
    console.log('Not Eligible to Vote');
    
}


// Task-5 Largest of Two Numbers

let count=40;
let num=25;
if(count>num){
    console.log(count+ " is Largest");  
}
else{
    console.log(num+ " is Largest");
    
}


// Task-6 Student Grade

let mark=78;
if(mark>=90){
    console.log('Grade A');
}
else if(mark>=75){
    console.log('Grade B');
}
else if(mark>=50){
console.log('Grade C');
}
else{
    console.log('Fail');
    
}

// Task-7 Print 1 to 20

for(let i=1; i<=20; i++){
console.log(i);
}


// Task-8 Print Even Numbers

for(let count=1; count<=50; count++){
    if(count%2===0){
         console.log('Even Number',count);

    }
}


// Task-9 Multiplication Table

let multi=5;
for(let c=1; c<=10; c++){
    let product=multi*c  
    console.log(multi+ " x "+c+" = "+product);

}

//  Task-10 Sum of 1 to 10

let total=0;
for(let form=1; form<=10; form++){
total+=form
}
console.log('total'+ '='+ total);









