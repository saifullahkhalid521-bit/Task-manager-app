import { useState } from "react";
function TaskCard(props){
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.taskName);
  return(
    <div 
      style={{
        border:"1px solid #ccc",
        padding:"15px",
        margin:"15px 0",
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
        fontSize: "22px",
        marginBottom: "15px",
        textDecoration: props.completed
          ? "line-through"
          : "none",
      }}
          >
            {props.taskName}
          </p>
        )
      }
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
        flexWrap: "wrap",
      }}
    >
       <button onClick={props.deleteTask}>
          Delete
        </button>
        <button onClick={props.toggleComplete}>
          Complete
        </button>
        {!isEditing && (
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
        )}

      {isEditing && (
        <button
          onClick={() => {
            props.editTask(editedText);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      )}
      </div>
    </div>
       
  );
}

export default TaskCard;