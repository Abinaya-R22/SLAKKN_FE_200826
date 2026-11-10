import { useEffect, useState } from "react";

const App = () => {

const[tasktitle, setTaskTitle] = useState("");
const[taskdescription, setTaskDescription] = useState("");
const[taskstatus, setTaskStatus] = useState("");

const [taskDatas, setTaskDatas] = useState([]);
const[editId, setEditId] = useState(null);

// INPUT HANDLERS

const handleTitle = (e) => {
  setTaskTitle(e.target.value);
}

const handleDescription = (e) => {
  setTaskDescription(e.target.value);
}

const handleStatus = (e) => {
  setTaskStatus(e.target.value);
}

//Get API

const fetchTasks = async () => {
  const res=await fetch(" https://jsonplaceholder.typicode.com/todos?_limit=5");
  const change=await res.json();

  const modifyData=change.map((e)=>({
    id:e.id,
    tasktitle:e.title,
    taskdescription:"Sample Description",
    taskstatus:e.completed?"Completed":"Pending"
}));

  setTaskDatas(modifyData);
};

useEffect(()=>{
  fetchTasks();
},[]);

  // ADD TASK

  const handleClick = async (e) => {
    e.preventDefault();

    // VALIDATION

    if (tasktitle === "") {
      alert("Enter Task Title");
      return;
    }

    if (taskdescription === "") {
      alert("Enter Task Description");
      return;
    }

    if (taskstatus === "") {
      alert("Enter Task Status");
      return;
    }

    const obj = {tasktitle,taskdescription,taskstatus};
    await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );

    const copy = [...taskDatas];

    copy.push({id: Date.now(),tasktitle,taskdescription,taskstatus,});

    setTaskDatas(copy);

    alert("Task Added Successfully");

    setTaskTitle("");
    setTaskDescription("");
    setTaskStatus("");
  };

  // EDIT

  const handleEdit = (task) => {
    setTaskTitle(task.tasktitle);
    setTaskDescription(task.taskdescription);
    setTaskStatus(task.taskstatus);

    setEditId(task.id);
  };

  // UPDATE

  const handleUpdate = async (e) => {
    e.preventDefault();

    // VALIDATION

    if (tasktitle === "") {
      alert("Enter Task Title");
      return;
    }

    if (taskdescription === "") {
      alert("Enter Task Description");
      return;
    }

    if (taskstatus === "") {
      alert("Enter Task Status");
      return;
    }

    const obj = {tasktitle, taskdescription, taskstatus};

    await fetch(
      `https://jsonplaceholder.typicode.com/todos/${editId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );

    const updateDatas = taskDatas.map((e) =>
      e.id === editId
        ? {
            ...e,
            tasktitle,
            taskdescription,
            taskstatus,
          }
        : e
    );

    setTaskDatas(updateDatas);

    alert("Task Updated Successfully");

    setTaskTitle("");
    setTaskDescription("");
    setTaskStatus("");
    setEditId(null);
  };

  // DELETE

  const handleDelete = async (userid) => {

    await fetch(
      `https://jsonplaceholder.typicode.com/todos/${userid}`,
      {
        method: "DELETE",
      }
    );

    const deleteData = taskDatas.filter(
      (e) => e.id !== userid
    );

    setTaskDatas(deleteData);

    alert("Task Deleted Successfully");
  };

  return (
    <>
      <h1>Task Management App</h1>

      <form>

        <input
          type="text"
          value={tasktitle}
          onChange={handleTitle}
          placeholder="Enter Task Title"
        />

        <br /><br />

        <input
          type="text"
          value={taskdescription}
          onChange={handleDescription}
          placeholder="Enter Task Description"
        />

        <br /><br />

        <input
          type="text"
          value={taskstatus}
          onChange={handleStatus}
          placeholder="Enter Task Status"
        />

        <br /><br />

        {
          editId ? (
            <button onClick={handleUpdate}>
              Update Task
            </button>
          ) : (
            <button onClick={handleClick}>
              Add Task
            </button>
          )
        }

      </form>

      <hr />

      <div>
        {taskDatas.map((e) => (
          <div key={e.id}>

            <h2>{e.tasktitle}</h2>

            <p>{e.taskdescription}</p>

            <p>{e.taskstatus}</p>

            <button onClick={() => handleEdit(e)}>
              Edit
            </button>

            <button onClick={() => handleDelete(e.id)}>
              Delete
            </button>

            <hr />

          </div>
        ))}
      </div>
    </>
  );
};

export default App;