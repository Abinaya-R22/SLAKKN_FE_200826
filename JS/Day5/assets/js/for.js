// 1.print the multiplication table of any number upto 12

let multi=7;
for(let value=1; value<=12; value++){
    product=multi*value
    console.log(multi+' x '+ value +' = '+ product);
}


//2. Calculate the sum of even numbers from 1 to 20

let total=0;
for(let int=1; int<=20; int++){
    total=total+int
}
console.log(total);


//3. Calculate the sum of even numbers from 1 to 50.

let sum=0;
for(let a=2; a<=50; a+=2){

    sum=sum+a
}
console.log('total'+ ' = '+ sum);

// with if

let final=0;
for(let num=1; num<=50; num++){
    if(num%2===0){
        final+=num
    }
}
console.log('Total'+' = '+final);

//4. Calculate the sum of odd numbers from 1 to 25.
 
let add=0;
for(let odd=1; odd<=25; odd++){
    if(odd%2===1){
        add+=odd
    }
}
console.log('Total'+' = '+ add);

// 5.Print the squares of numbers from 1 to 10

for(let exp=1; exp<=10; exp++){
    Square=exp*exp
    console.log(exp+ " ^2 " + " = " +Square);
}

// 6.nested loop(BASIC)
for(let i=1; i<=2; i++){
    for(let j=1; j<=2; j++){
        console.log("Row " +i +" Col " +j);
        
    }
}

