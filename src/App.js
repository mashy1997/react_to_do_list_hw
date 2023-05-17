import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {id: 1, name: "Buy shopping", priority:"high"},
    {id: 2, name: "Clean bathroom", priorty:"medium"},
    {id: 3, name: "Car's MOT", priority:"low"}
  ])

  const [newTask, setNewTask] = useState("")

  const completeTask = (taskId) => {
    console.log("The task completed is:", taskId)
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  const listTasks = tasks.map((task) => {
    return (
      <li key={task.id}>
        {task.name}
        <button onClick={() => completeTask(task.id)}>Complete</button>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault();

    const newTaskObj = { id: Date.now(), name: newTask}
    const newTasks = [...tasks, newTaskObj]
    setTasks(newTasks)

    setNewTask("")
  }


  return (
    <div className="App">

    <h1>ToDo's - {tasks.length ? "You got this" : "You're DONEEEE!"}</h1>
    <hr></hr>

    <ul>
      {listTasks}
    </ul>
    
    <form onSubmit={saveNewTask}>
      <label htmlFor='new-task'>Add a new task:</label>
      <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
      <input type='submit' value="Add A New Task"/>
    </form>
    </div>
  );
}

export default App;
