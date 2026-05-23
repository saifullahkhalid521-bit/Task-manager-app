import TaskCard from "./TaskCard";
import { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    setTasks([...tasks, task]);
    setTask("");
  }
  function handleDeleteTask(indexToDelete) {
  const updatedTasks = tasks.filter(
    (_, index) => index !== indexToDelete
  );

  setTasks(updatedTasks);
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

      {tasks.map((item ,index) => (
        <TaskCard
        key={index}
        taskName={item}
        deleteTask={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskForm;