const FetchDatas=async()=>{
    const getData=await fetch("https://dummyjson.com/products");
    // console.log(getData);
    const change=await getData.json()
    // console.log(change.products);
    const datas=change.products
    const showData_tbody=document.getElementById("showdata")
    let getshow=""
    
    datas.forEach((e)=>{
        getshow+=`<tr>
       <td>${e.id}</td> 
       <td>${e.title}</td> 
       <td>${e.price}</td>`
    });
  showData_tbody.innerHTML=getshow
    
}
FetchDatas()
