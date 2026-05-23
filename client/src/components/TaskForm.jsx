import TaskCard from "./TaskCard";
import { useState , useEffect } from "react";

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");

  return savedTasks
    ? JSON.parse(savedTasks)
    : [];
  });

    const completedTasks = tasks.filter(
  (item) => item.completed
  ).length;
 
  const pendingTasks =
  tasks.length - completedTasks;
  
  useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);

  function handleAddTask() {
    if (task.trim() === "") {
     return;
  }
    setTasks([
  ...tasks,
  {
    text: task,
    completed: false,
  },
  ]);
    setTask("");
  }
  function handleDeleteTask(indexToDelete) {
  const updatedTasks = tasks.filter(
    (_, index) => index !== indexToDelete
  );

  setTasks(updatedTasks);
  }
  function handleToggleComplete(indexToToggle) {
    const updatedTasks = tasks.map((item ,index) => {
      if (index === indexToToggle) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
    <h3>Total Tasks: {tasks.length}</h3>

    <h3>Completed Tasks: {completedTasks}</h3>

    <h3>Pending Tasks: {pendingTasks}</h3>
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
        taskName={item.text}
        completed={item.completed}
        deleteTask={() => handleDeleteTask(index)}
        toggleComplete={() => handleToggleComplete(index)}
        />
      ))}
    </div>
  );
}

export default TaskForm;