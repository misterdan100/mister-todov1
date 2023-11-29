import { useEffect, useState } from "react";
import CreateSection from "./components/CreateSection";
import "./App.css";
import TaskSection from "./components/TaskSection";

function App() {
  const [todos, setTodos] = useState([]);

  if (!todos.length) {
    const defaultTodos = [
      { text: "Cortar cebolla", completed: false },
      { text: "Curso introduccion a React JS", completed: true },
      { text: "Lavar zapatos", completed: false },
      { text: "Comprar mercado", completed: true },
    ];
    setTodos(defaultTodos);
  }

  const deleteTodo = taskToDelete => {
    setTodos(todos.filter( todo => todo.text !== taskToDelete))
  }

  const completeTodo = taskToComplete => {
    const modifiedTodos = todos.map( todo => {
      if(todo.text === taskToComplete) {
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })
    setTodos(modifiedTodos)
  }

  return (
    <>
      <div className="main-container flex flex-col items-center md:flex-row md:justify-center md:items-start gap-6 bg-gray-100 bg-opacity-50 backdrop-blur-xl p-4  mt-6 border-2 border-gray-200 rounded-2xl shadow-lg transition">
        <CreateSection todos={todos} setTodos={setTodos} />
        <TaskSection 
          todos={todos} 
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </div>
    </>
  );
}

export default App;
