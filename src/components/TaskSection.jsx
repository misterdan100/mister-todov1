import { useEffect, useState } from "react";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import Alert from "./Alert";
import CategoryButton from "./CategoryButton";
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
    categoryFilter,
    categorySelected,
    setCategorySelected,
}) => {
  const [ completedTodos, setCompletedTodos ] = useState(0)
  const [ completedRate, setCompletedRate ] = useState('')

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

useEffect(() => {
    setCompletedRate(`w-[${Math.floor((completedTodos/todos.length)*100)}%]`) 
}, [completedTodos])


  return (
    <div className="task-section">
      <h1 className="title">Your tasks
      
      {/* <div className="w-full h-2 bg-gray-100 relative rounded-lg progres-bar">
        <div className={completedRate}></div>
      </div> */}
      </h1>

      <TodoCounter completed={completedTodos} total={todos.length} />
      <TodoSearch 
        filterTodos={filterTodos}
      />

      <div className="flex w-full gap-4 justify-center mb-4">
        <CategoryButton 
        buttonText='All' 
        categoryFilter={categoryFilter}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        />
        <CategoryButton 
        buttonText='Done' 
        categoryFilter={categoryFilter}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        />
        <CategoryButton 
        buttonText='Uncompleted' 
        categoryFilter={categoryFilter}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
        />
      </div>

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
