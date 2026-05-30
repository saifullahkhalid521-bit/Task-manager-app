import { useState } from "react";
function TaskCard(props){
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.taskName);
  return(
    <div 
      style={{
        border:"1px solid gray",
        padding:"10px",
        margin:"10px",
        borderRadius:"10px",
      }}
      >
      {
  isEditing ? (
    <input
      type="text"
      value={editedText}
      onChange={(e) =>
        setEditedText(e.target.value)
      }
    />
  ) : (
    <p
      style={{
        textDecoration: props.completed
          ? "line-through"
          : "none",
      }}
          >
            {props.taskName}
          </p>
        )
      }
        <button onClick={props.deleteTask}>
          Delete
        </button>
        <button onClick={props.toggleComplete}>
          Complete
        </button>
        <button onClick={()=> setIsEditing(true)}>
          Edit
        </button>
        <button 
        onClick={() =>{
          props.editTask(editedText);
          setIsEditing(false);
        }}>
          Save
        </button>
      </div>
  );
}

export default TaskCard;