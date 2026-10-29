const myform = document.getElementById("registerform")

myform.addEventListener("submit",(event)=>{
    event.preventDefault()
 const uname = document.getElementById("name")
 const uemail = document.getElementById("email")
 const upassword = document.getElementById("password")

const username = uname.value
const useremail = uemail.value
const userpassword = upassword.value

const obj={userid:Date.now(),username,useremail,userpassword}
const getDatas = JSON.parse(localStorage.getItem("newmydata")) || []

           getDatas.push(obj)

           localStorage.setItem("newmydata",JSON.stringify(getDatas))

           alert("Successfully Done")

           uname.value = ""
           uemail.value = ""
           upassword.value = ""

           window.location.href = "login.html"


        })






