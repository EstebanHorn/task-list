import { useState } from "react";
import "../stylesheets/TaskForm.css";
import {v4 as uuidv4} from 'uuid'

function TaskForm(props) {

  const [input, setInput] = useState('')

  const formChange = e => {
    setInput(e.target.value)
  };

  const sendTask = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask)
  };

  return (
    <form className="task-form" onSubmit={sendTask}>
      <input
        className="task-input"
        type="text"
        placeholder="Add task..."
        name="text"
        onChange={formChange}
      />
      <button className="task-button">add task</button>
    </form>
  );
}

export default TaskForm;
