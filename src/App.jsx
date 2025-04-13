import React, { useState } from "react";
import Create from './Create.jsx';
import Task from './task.jsx';

function App() {
const [tasks,setTask]=useState([]);
const addTask = (taskObj) => {
  setTasks([...tasks, taskObj]);
};
  return (
    <>
    <Create onAddTask={addTask} />
    {tasks.map((task, index) => (
      <Task key={index} task={task.name} frequency={task.frequency} />
    ))}
  </>
  );
}

export default App;
