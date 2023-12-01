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
  searchValue,
  setSearchValue,
}) => {
  const [completedTodos, setCompletedTodos] = useState(0);
  const [completedRate, setCompletedRate] = useState("");

  let completedCalculator = () => {
    const counterTodos = todos.filter((todo) => todo.completed === true);
    return counterTodos.length;
  };

  useEffect(() => {
    setCompletedTodos(completedCalculator());
  }, [todos]);

  //* Check if all todos are completed to show congrat message
  useEffect(() => {
    if (todos.length === 0) {
      setTodosMessage("You don't have Todos!");
      return;
    }

    if (completedTodos === todos.length) {
      setTodosMessage("Congratulations, You're so productive!");
      return;
    }
    setTodosMessage("");
  }, [completedTodos, todos]);


  return (
    <div className="task-section">
      <h1 className="title">
        Your tasks
        {/* <div className="w-full h-2 bg-gray-100 relative rounded-lg progres-bar">
        <div className={completedRate}></div>
      </div> */}
      </h1>

      <TodoCounter completed={completedTodos} total={todos?.length} />
      <TodoSearch
        filterTodos={filterTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="flex w-full flex-wrap gap-4 justify-center mb-4">
        <CategoryButton
          buttonText="All"
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <CategoryButton
          buttonText="Done"
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <CategoryButton
          buttonText="Uncompleted"
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      </div>

      {todosMessage && <Alert alertText={todosMessage} />}

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
