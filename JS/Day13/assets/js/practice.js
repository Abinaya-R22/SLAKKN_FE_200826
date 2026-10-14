// TASK 1 – CHANGE HEADING COLOR

const para=document.getElementById("para");
const btnHide=document.getElementById("btnHide");
const btnShow=document.getElementById("btnShow");

btnHide.addEventListener("click",()=>{
    para.style.display="none"
})
btnShow.addEventListener("click",()=>{
    para.style.display="block"
})