import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './tasks'
import { Task } from './tasks'

function App() {

  console.log(TaskList)
  const [taskList, setTaskList] = useState<Task[]>(TaskList)




  return (
    <div className="App">

    </div>
  );
}

export default App;
