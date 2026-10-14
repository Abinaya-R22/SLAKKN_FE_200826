// Task-4 UPDATE INPUT PROPERTIES
const userName=document.getElementById("username")
const userEmail=document.querySelector("#email")
const btn=document.getElementById("btn")
userName.value="Arun"
userEmail.value="arun@gmail.com"
userName.style.backgroundColor="Violet"
btn.disabled=true;

// Task-5 UPDATE MULTIPLE ELEMENTS
const heading=document.querySelectorAll(".heading")
heading[0].textContent="HTML"
heading[1].textContent="CSS"
heading[2].textContent="JavaScript"
heading[3].textContent="React"
heading[4].textContent="Node.js"
heading[0].style.color="red"
heading[1].style.color="blue"
heading[2].style.color="green"
heading[3].style.color="orange"
heading[4].style.color="purple"



