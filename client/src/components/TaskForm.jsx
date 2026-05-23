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

  useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );
}, [tasks]);

  function handleAddTask() {
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