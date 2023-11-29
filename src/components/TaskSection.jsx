import { useEffect, useState } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import "../styles/TaskSection.css";

const TaskSection = ({ todos, setTodos, deleteTodo, completeTodo }) => {
  const [ completedTodos, setCompletedTodos ] = useState(0)

  let completedCalculator = () => {
    const counterTodos = todos.filter((todo) => todo.completed === true);
    return counterTodos.length;
  };

  useEffect(() => {
    setCompletedTodos(completedCalculator())
  }, [todos])
  

  return (
    <div className="task-section">
      <h1 className="title">Your tasks</h1>

      <TodoCounter completed={completedTodos} total={todos.length} />
      <TodoSearch />

      {}

      <TodoList>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.text}
            titulo={todo.text}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </TodoList>
    </div>
  );
};

export default TaskSection;
