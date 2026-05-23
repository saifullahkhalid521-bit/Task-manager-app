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
        <p>{props.taskName}</p>
        <button onClick={props.deleteTask}>
          Delete
        </button>
      </div>
  );
}

export default TaskCard;