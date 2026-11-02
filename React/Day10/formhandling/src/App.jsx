const App=() => {
  const[showname, setshowName] = useState("");
  const[showage, setshowAge] = useState("");
  const[shownumber, setshowNumber] = useState("");
  
  const handleChangeName = (e) => {
    setshowName(e.target.value);
  }
  const handleChangeAge = (e) => {
    setshowAge(e.target.value);
  }
  const handleChangeNumber = (e) => {
    setshowNumber(e.target.value);
  }
  return (<>
  <div>
    <form action="">
      <input type="text" placeholder="Enter your name" onClick={handleChangeName}/>
      <input type="text" placeholder="Enter your age"  onClick={handleChangeAge} />
      <input type="text" placeholder="Enter your number"  onClick={handleChangeNumber} />
      <button type="submit">Submit</button>
    </form>
    </div>
  </>)}