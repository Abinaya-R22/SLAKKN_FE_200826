// TASK-1 CHANGE HEADING TEXT

const title=document.getElementById("title")
title.textContent="Welcome to JavaScript"
title.style.color="blue"
title.style.fontSize="30px"

// TASK-2 CHANGE PARAGRAPH STYLES

const paraData=document.getElementsByClassName("para");
paraData[0].style.color="red"
paraData[1].style.backgroundColor="yellow"
paraData[2].style.fontSize="25px"

// Task-3 UPDATE IMAGE AND LINK
const image=document.querySelector("#image")
const link=document.getElementById("link")

image.src="https://img.magnific.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg?semt=ais_hybrid&w=740&q=80"
image.alt="Waterfall"
image.width=200
link.href="https://www.google.com"
link.textContent="Visit Google"
link.style.cursor="pointer"
link.style.backgroundColor="black"
link.style.color="white"
link.style.padding="10px"
link.style.borderRadius="10px"








 