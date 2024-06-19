import { useState } from "react";
import ListItem from "./listItem.jsx";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);
  const [text, setText] = useState("");

  function addTask(text) {
    if (text.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        text: text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setText("");
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className='listContainer'>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button className='addBtn' onClick={() => addTask(text)}>
        Add
      </button>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
