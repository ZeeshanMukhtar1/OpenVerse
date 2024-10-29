import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>My Todo List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todoItem}>
            <span
              onClick={() => toggleComplete(index)}
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#a0a0a0' : '#333',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2em',
    color: '#4a148c',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    width: '250px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginRight: '10px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#6a1b9a',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  todoList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
    maxWidth: '400px',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  todoText: {
    fontSize: '1.2em',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    fontSize: '0.9em',
    color: '#fff',
    backgroundColor: '#d32f2f',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
