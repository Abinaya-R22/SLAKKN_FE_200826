let arr=["Java",1,2,false,true,"Mern",7,"Gen"]
console.log(arr[1]);
console.log(arr[5]);
console.log(arr[0]);
console.log(arr.length);
console.log(arr[arr.length-1]);
console.log(arr);
arr[4]=9
console.log(arr);

for(let a=0;a<arr.length;a++){
    console.log(arr[a]);
}

for(let a=0; a<arr.length-1;a++){
    console.log(arr[a]);
    
}

for(let a=arr.length-1; a>=0;a--){
    console.log(arr[a]);
    
}

console.log(arr);



let obj={name:"Abi", course:"Frontend",skills:""}


