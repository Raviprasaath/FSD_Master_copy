import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      value: "",
      createdAt: "20:30"
    },
    {
      id: "todo2",
      value: "",
      createdAt: "18:00"
    }
  ]);

  const handleReverse = () => {
    setTodos((prevTodos) => [prevTodos[1], prevTodos[0]]);
  };

  return (
    <div className="App">
      <button onClick={handleReverse}>Reverse</button>
      {todos.map((todo) => (
        <section key={todo.id}>
          <h3>{todo.id}</h3>
          <input />
          <h3>{todo.createdAt}</h3>
        </section>
      ))}
    </div>
  );
}
