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

  const [filter, setFilter] = useState("all");
  const [searchTerm , setSearchTerm] = useState("");
  
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
  function handleEditTask(indexToEdit, newText) {

  const updatedTasks = tasks.map(
    (item, index) => {

      if (index === indexToEdit) {
        return {
          ...item,
          text: newText,
        };
      }

      return item;
    }
  );

  setTasks(updatedTasks);
  }
  function handleClearCompleted(){

    const updatedTasks = tasks.filter(
      (item) => !item.completed
    );

    setTasks(updatedTasks);

  }

const filteredTasks = tasks.filter((item) => {

  const matchesSearch =
    item.text
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      );

  if (filter === "completed") {
    return (
      item.completed &&
      matchesSearch
    );
  }

  if (filter === "pending") {
    return (
      !item.completed &&
      matchesSearch
    );
  }

  return matchesSearch;
  });


  return (
    <div
    style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    }}
  >
    <h3>Total Tasks: {tasks.length}</h3>

    <h3>Completed Tasks: {completedTasks}</h3>

    <h3>Pending Tasks: {pendingTasks}</h3>

    <button onClick={() => setFilter("all")}
      style={{
        padding: "8px 12px",
        marginRight: "5px",
        marginBottom: "10px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      >
      All
    </button>

    <button onClick={()=> setFilter("completed")}
      style={{
        padding: "8px 12px",
        marginRight: "5px",
        marginBottom: "10px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      >
      Completed
    </button>

    <button onClick={()=> setFilter("pending")}
      style={{
        padding: "8px 12px",
        marginRight: "5px",
        marginBottom: "10px",
        borderRadius: "8px",
        cursor: "pointer",
      }} 
      >
      Pending
    </button>
    <button onClick={handleClearCompleted}
      style={{
        padding: "8px 12px",
        marginRight: "5px",
        marginBottom: "10px",
        borderRadius: "8px",
        cursor: "pointer",
      }}    
    >
      Clear Completed
    </button>

    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
  }}
      />

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }
        }}
      />

      <button onClick={handleAddTask}
      style={{
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        marginLeft: "10px",
      }}
      >
        Add Task
      </button>

      {filteredTasks.map((item ,index) => (
        <TaskCard
        key={index}
        taskName={item.text}
        completed={item.completed}
        deleteTask={() => handleDeleteTask(index)}
        toggleComplete={() => handleToggleComplete(index)}
        editTask={(newText) =>
        handleEditTask(index, newText)
          }
        />
      ))}
    </div>
  );
}

export default TaskForm;