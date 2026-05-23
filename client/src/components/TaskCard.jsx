function TaskCard(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "10px",
      }}
    >
      <p>{props.taskName}</p>
    </div>
  );
}

export default TaskCard;