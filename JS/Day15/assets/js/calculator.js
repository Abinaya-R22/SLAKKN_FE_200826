const arr=[]
const btnadd=document.getElementById("btnadd")
const btnsub=document.getElementById("btnsub")
const btnmulti=document.getElementById("btnmulti")
const btndivi=document.getElementById("btndivi")
btnadd.addEventListener("click",()=>{
    const number=document.getElementById("number").value
     const num=document.getElementById("num").value
     return number+num;
})
btnsub.addEventListener("click",()=>{
    const number=document.getElementById("number").value
     const num=document.getElementById("num").value
     return number-num;
})
btnmulti.addEventListener("click",()=>{
    const number=document.getElementById("number").value
     const num=document.getElementById("num").value
     return number*num;
})
btndivi.addEventListener("click",()=>{
    const number=document.getElementById("number").value
     const num=document.getElementById("num").value
     return number/num;
})