// TASK 4 – TOGGLE SHOW / HIDE
const title=document.getElementById("title")
const btn=document.getElementById("toggbtn")
let isVisible=true;
btn.addEventListener("click",()=>{
    if(isVisible){
        title.style.display="none";
        isVisible=false;
    }
else{
    title.style.display="block";
        isVisible=true;
}
})

// // TASK 5 – DARK MODE / LIGHT MODE
// const heading=document.getElementById("heading")
// const para=document.getElementById("para")
// const themebtn=document.getElementById("themebtn")

// themebtn.addEventListener("click",()=>{
    
// })                                                                                                     