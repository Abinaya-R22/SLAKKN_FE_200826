// TASK 1 – Print Multiples of 5

let lane=""
let multi =5
for(let i=1; i<=10; i++){
    
   let result= multi*i
 lane+=result+" "
}
console.log(lane);


// TASK 2 – Print Numbers by 2

let line=""
for(let i=1; i<=20; i++){
 if(i%2==0){
    line+=i+" "
 }
}
console.log(line);



// TASK 3 – Find Sum from 1 to 20
let total=0
for(let a=1; a<=20; a++){
total+=a;
}
console.log("final","total","=",total);

// TASK 4 – Print Squares

for(let a=1;a<=10;a++){
  let sum=a**2
  console.log(sum);
  
}
//Another method
// for(let d=1; d<=10; d++){
//   let square=d*d
//   console.log(square);
// }

// TASK 5 – Countdown

for(let b=50; b>=0; b-=5){
  console.log(b);
}

//another method
// for(let c=10; c>=0; c--){
//   console.log(c*5);
// }   