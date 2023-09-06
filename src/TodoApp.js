import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        data-testid="task-input"
      />
      <button onClick={addTask} data-testid="add-task-button">Add</button>
      <ul data-testid="task-list">
        {tasks.map((task, index) => (
          <li key={index} data-testid="task-item">{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;