import { useState } from 'react';

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState('');

  const addTodo = () => {
    const newTodo = { title, done: false };

    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      // When success add data, reset form with set title empty
      setTitle('');
      setRefresh(true);
      setTimeout(() => {
        alert('Todo added successfully!');
      }, 500);
    });
  };

  return (
    <div id="todo-header" className="header">
      <h2>Simple To Do App</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className="add-button" onClick={addTodo}>
        Add
      </span>
    </div>
  );
};

export default Header;
