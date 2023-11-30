import { useEffect, useState } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import Alert from "./Alert";
import "../styles/TaskSection.css";

const TaskSection = ({ 
    todos, 
    setTodos, 
    deleteTodo, 
    completeTodo,
    todosToShow,
    setTodosToShow,
    filterTodos,
    todosMessage,
    setTodosMessage,
}) => {
  const [ completedTodos, setCompletedTodos ] = useState(0)

  let completedCalculator = () => {
    const counterTodos = todos.filter((todo) => todo.completed === true);
    return counterTodos.length;
  };

  useEffect(() => {
    setCompletedTodos(completedCalculator())
}, [todos])

//* Check if all todos are completed to show congrat message
useEffect(() => {
    completedTodos === todos.length ? setTodosMessage("Congratulations, You're so productive!") : setTodosMessage('')
}, [completedTodos, todos])

  return (
    <div className="task-section">
      <h1 className="title">Your tasks
      
      <div className="w-full h-2 bg-teal-100 relative">
        <div className="w-3/4 h-2 bg-teal-600"></div>
      </div>
      </h1>

      <TodoCounter completed={completedTodos} total={todos.length} />
      <TodoSearch 
        filterTodos={filterTodos}
      />

      {todosMessage && (
        <Alert alertText={todosMessage}/>
      )}

      <TodoList>
        {todosToShow?.map((todo) => (
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
