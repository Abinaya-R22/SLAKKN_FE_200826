import  { useState } from "react";
const App=() => {
  const[username, setUsername] = useState("");
   const[showname, setShowName] = useState("");
  
  const handleChangeName = (event) => {
    // console.log("Event Object:", event);
    // console.log("Target:", event.target);
    // console.log("Value:", event.target.value);
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Name:", username);
    setShowName(username);
    alert(`Submitted Name: ${username}`);
  };
  return (<>
  <div>
    <h2>Single Input Form</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" value={username} onChange={handleChangeName}/>
      <button type="submit">Submit Name</button>
    </form>
    <h4>Entered Name: {showname}</h4>
    </div>
  </>)
  }
  export default App;