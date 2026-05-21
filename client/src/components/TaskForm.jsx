import { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>

      {tasks.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default TaskForm;