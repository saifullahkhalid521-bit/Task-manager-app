function TaskCard(props){
  return(
    <div 
      style={{
        border:"1px solid gray",
        padding:"10px",
        margin:"10px",
        borderRadius:"10px",
      }}
      >
      <p
        style={{
          textDecoration: props.completed
            ? "line-through"
            : "none",
        }}
        >
        {props.taskName}
      </p>
        <button onClick={props.deleteTask}>
          Delete
        </button>
        <button onClick={props.toggleComplete}>
          Complete
        </button>
      </div>
  );
}

export default TaskCard;