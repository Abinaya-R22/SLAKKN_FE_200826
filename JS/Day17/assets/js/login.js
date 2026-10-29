const myfrom = document.getElementById("loginform")

        myfrom.addEventListener("submit",(event)=>{

            event.preventDefault()

           
            const uemail = document.getElementById("email")
            const upassword = document.getElementById("password")


            const useremail = uemail.value
            const userpassword = upassword.value

           

           const getDatas = JSON.parse(localStorage.getItem("newmydata"))

            const checkUser = getDatas.find((e)=> e.useremail ==useremail && e.userpassword == userpassword)
             
            

            localStorage.setItem("isActiveuser",JSON.stringify(checkUser))
            
            if(!checkUser){
                alert("Your Not Valid User")
                return
            }

           uemail.value = ""
           upassword.value = ""

           window.location.href = "index.html"


        })