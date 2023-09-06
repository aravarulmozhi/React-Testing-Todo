import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
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
        {tasks.map(task => (
          <li key={task.id} data-testid="task-item">
            {task.text}
            <button onClick={() => deleteTask(task.id)} data-testid="delete-task-button">Delete</button>
            <button onClick={() => updateTask(task.id, prompt('New text:', task.text))} data-testid="update-task-button">Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
