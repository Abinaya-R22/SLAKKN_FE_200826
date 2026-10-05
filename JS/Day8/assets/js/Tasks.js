// TASK 1 – EVEN OR ODD

const checkEvenOdd=(num)=>{
    if(num%2===0){
        return "Even Number";
    }
    else{
        return "Odd Number";
    }
}
let result=checkEvenOdd(28);
console.log(result);  


// TASK 2 – LARGEST OF TWO NUMBERS

const findLargest=(num1,num2)=>{
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
let largest=findLargest(15,25);
console.log(largest);


// TASK 3 – VOTING ELIGIBILITY

const checkVote=(age)=>{
    if(age>=18){
        return "Eligible to vote";
    }
    else{
        return "Not Eligible to vote";
    }
}
let vote=checkVote(21);
console.log(vote);

// TASK 4 – SUM OF ARRAY

const getTotal=(numbers)=>{
    let total=0;
    for(let i=0;i<numbers.length;i++){
        total+=numbers[i];
    }
    return total;
}
let sum=getTotal([10,20,30,40,50]);
console.log(sum);

// TASK 5 – COUNT EVEN NUMBERS

const countEven=(numbers)=>{
    let count=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2===0){
            count++;
        }
    }
    return count;
}
let evenCount=countEven([10, 15, 20, 25, 30, 35, 40]);
console.log(evenCount);
