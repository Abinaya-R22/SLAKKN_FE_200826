const myData=[]
const formData=document.getElementById("formData")
const showingData = ()=>{
   const showing = document.getElementById("showing")
    let datas = ""
    myData.forEach((e,i)=>{
        datas += `<tr>
        <td>${i+1}</td>
        <td>${e.employeeid}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.dept}</td>
        <td>${e.sal}</td>

        </tr>`
    })

    showing.innerHTML = datas
 

}
formData.addEventListener("submit",(event)=>{
    event.preventDefault()
    const employeename=document.getElementById("employeename").value
    const employeeage=document.getElementById("employeeage").value
    const department=document.getElementById("department").value
    const salary=document.getElementById("salary").value
    if(!employeename || !employeeage || !department || !salary){

        alert("Please Fill all fields")
        return
    }

    if (employeeage <= 0) {
        alert("Age must be a positive number");
        return;
    }
    if (salary <= 0) {
        alert("Salary must be a positive number");
        return;
    }

    const obj = {employeeid:Date.now(),name:employeename,age:employeeage,dept:department,sal:salary}

    myData.push(obj)

    alert("Successfully Registered")
    formData.reset()
    showingData()
    

})