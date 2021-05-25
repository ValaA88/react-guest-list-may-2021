import './App.css';
import React, { useState } from 'react';

function GuestList() {
  const [task, setTask] = useState('');
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== '') {
      const taskDetails = {
        value: task,
        isCompleted: false,
      };
      setTaskList([...tasklist, taskDetails]);
    }
  };

  const removetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  return (
    <div className="guest">
      <button className="add.btn" onClick={AddTask}>
        Add to List
      </button>
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className="listitem">
              {t.value}
              <button className="remove" onClick={(e) => removetask(e, t.id)}>
                Remove
              </button>
              <button className="done">Done</button>
            </li>
          ))}
        </ul>
      ) : null}
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="First Name"
        name="value"
      />
      <input type="text" placeholder="Last Name" name="value" />
      <input type="datetime-local" name="deadline" />
    </div>
  );
}

export default GuestList;
