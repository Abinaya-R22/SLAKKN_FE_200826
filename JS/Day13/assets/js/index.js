const title=document.getElementById("title")
const btnData=document.getElementById("btnData")



btnData.addEventListener("click",()=>{
title.innerHTML= "This is React";
title.style.color="red";
title.style.fontSize="30px"
})

