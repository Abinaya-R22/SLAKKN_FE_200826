import { useState } from 'react';

const App = () => {
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [showData, setShowData] = useState(null);

const handleChange = (e) => {
  const { name, value } = e.target;

  setUserData({
    ...userData,
    [name]: value,
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
  setShowData(userData);
}




  return (<>
      <h1>Student Registration Form</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Enter your name" />
       <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Enter your email" />
       <input type="number" name="age" value={userData.age} onChange={handleChange} placeholder="Enter your age" />
      
       <button type="submit">Submit</button>
     </form>

 {showData && (
      <div>
          <h2>Student Details</h2>
          <p>Name: {showData.name}</p>
          <p>Email: {showData.email}</p>
          <p>Age: {showData.age}</p>
        </div>
      )}




  
  </>)
}

export default App
