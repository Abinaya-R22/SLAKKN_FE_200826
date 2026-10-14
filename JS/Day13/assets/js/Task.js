// Task-1 CHANGE HEADING COLOR

const title=document.getElementById("title")
const btnData=document.getElementById("btnData")
btnData.addEventListener("click",()=>{
title.innerHTML= "This is React";
title.style.color="red";
title.style.fontSize="30px"
})

// Task-2 CHANGE BOX BACKGROUND

const box=document.getElementById("box")
const btn=document.getElementById("btn")
const btn1=document.getElementById("btn1")
box.style.border="2px solid black"
box.style.color="red";
box.style.fontSize="30px"
box.style.display="flex"
box.style.alignItems="center"
box.style.justifyContent="center"
box.style.padding="20px"
box.style.height="200px"
box.style.width="300px"
box.style.borderRadius="10px"

btn.addEventListener("click",()=>{
    box.style.backgroundColor="blue";
    box.style.color="white";
})

btn1.addEventListener("click",()=>{
    box.style.backgroundColor="yellow";
    box.style.color="red";
})

// TASK 3 – SHOW AND HIDE

const para=document.getElementById("para");
const hidebtn=document.getElementById("hidebtn");
const showbtn=document.getElementById("showbtn");

hidebtn.addEventListener("click",()=>{
    para.style.display="none"
})

showbtn.addEventListener("click",()=>{
    para.style.display="block"
})