import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './tasks'
import { Task } from './tasks'

function App() {

  const [taskList, setTaskList] = useState<Task[]>(TaskList)

  const [newTask, setNewTask] = useState<string>('')



  function addNewTask(newTask: string) {
    console.log('adding new task', newTask)

    // find minimum unused id...
    const minimumId = taskList.map((task) => task.id).sort((a, b) => a - b).filter((x, i, arr) => arr[i - 1] !== x)
      .filter((x, i, arr) => arr[i] !== i)
    const newIndexNumber = minimumId.length !== 0 ? minimumId[0] - 1 : minimumId.length
    console.log(newIndexNumber)

    const taskObject: Task = {
      id: newIndexNumber,
      task: newTask,
      complete: false,
    }

    setTaskList(prevTasks => [...prevTasks, taskObject])
    setNewTask('')



  }



  return (
    <div className="App">

      <h1>Add a new Task Here</h1>
      <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
      <button onClick={() => addNewTask(newTask)}>Add Task</button>

      {taskList.map((task, i) => (
        <div key={i}>
          <h3 >{task.task}</h3>
          <button>Complete</button>
        </div>
      ))}

    </div>
  );
}

export default App;
