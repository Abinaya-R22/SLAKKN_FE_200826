let myData = JSON.parse(localStorage.getItem("employees")) || [];
const formData=document.getElementById("formData")
const showing = document.getElementById("showing")
const showingData = ()=>{

    let datas = ""
    myData.forEach((e,i)=>{
        datas += `<tr>
        <td>${i+1}</td>
        <td>${e.employeeid}</td>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.dept}</td>
        <td>${e.sal}</td>
        <td><button onclick="deleteEmployee(${e.employeeid})">Delete</button></td>
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

    const obj = {employeeid:Date.now(),
        name:employeename,
        age:employeeage,
        dept:department,
        sal:salary}

    myData.push(obj)
    localStorage.setItem("employees", JSON.stringify(myData));
    alert("Successfully Registered")
    formData.reset()
    showingData()
})
function deleteEmployee(id){
    myData=myData.filter(emp=>emp.employeeid!==id);
    localStorage.setItem("employees", JSON.stringify(myData));
      showingData();
    }
showingData();

