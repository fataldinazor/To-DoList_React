export default function ListItem(props) {
  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    padding: "10px",
    backgroundColor: "grey",
    borderRadius: "20px",
    marginTop: "10px",
  };
  
  function handleChange() {
    props.toggleCompleted(props.task.id);
  }

  return (
    <div className='itemBlock' style={myStyle}>
      <input
        type='checkbox'
        checked={props.task.completed}
        onChange={handleChange}
      />
      <p>
        {props.task.completed ? <del>{props.task.text}</del> : props.task.text}
      </p>
      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
    </div>
  );
  
}
