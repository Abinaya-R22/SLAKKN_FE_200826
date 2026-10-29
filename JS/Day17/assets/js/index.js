const getDatas = JSON.parse(localStorage.getItem("isActiveuser"))
        const showdata = document.getElementById("showdata")

        showdata.innerHTML = `
        
        <div>
        <h3>${getDatas.userid}</h3>  
        <p>${getDatas.username}</p> 
          <p>${getDatas.useremail}</p> 
        </div>
        `

   const handleLogout = ()=>{

    localStorage.removeItem("isActiveuser")

    window.location.href = "login.html"
            
}