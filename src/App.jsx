import { useEffect, useState } from "react";
import CreateSection from "./components/CreateSection";
import "./App.css";
import TaskSection from "./components/TaskSection";

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ todosToShow, setTodosToShow ] = useState([]);
  const [ todosMessage, setTodosMessage ] = useState('');
  const [ categorySelected, setCategorySelected ] = useState('All');
  const [ searchValue, setSearchValue ] = useState('');

  // if (!todos.length) {
  //   const defaultTodos = [
  //     { text: "Cortar cebolla", completed: false },
  //     { text: "Curso introduccion a React JS", completed: true },
  //     { text: "Lavar zapatos", completed: false },
  //     { text: "Comprar mercado", completed: true },
  //   ];
  //   setTodos(defaultTodos);
  //   setTodosToShow(defaultTodos)
  // }

  //! GET todos from LocalStorage
  const getLocalStorage = async () => {
    const respuesta = localStorage.getItem('todos1');
    const resultado = JSON.parse(respuesta);
    if(resultado) {
      setTodos(resultado)
      setTodosToShow(resultado)
    } else {
      setTodos([])
      setTodosToShow([])

    }
  }

  useEffect(() => {
    getLocalStorage();
  }, [])

  //! POST todos on LocalStorage
  const postLocalStorage = todosToLS => {
    localStorage.setItem('todos1', JSON.stringify(todosToLS))
  }

  const deleteTodo = taskToDelete => {
    const todosAfterDelete = todos?.filter( todo => todo.text !== taskToDelete);
    setTodos(todosAfterDelete)
    setTodosToShow(todosAfterDelete)
    postLocalStorage(todosAfterDelete)


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
    setTodosToShow(modifiedTodos)
    postLocalStorage(todos)
  }

  //* Filter todos by name
  const filterTodos = ( searchValue ) => {
    if(searchValue) {
      const filteredTodos = todos.filter( todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
      setTodosToShow(filteredTodos)
      filteredTodos.length === 0 ? setTodosMessage('No hay coincidencias') : setTodosMessage('')
      return filteredTodos
    }
    setTodosToShow(todos)
    return todos
  }

  //* Filter todos by Category done || uncompleted
  const categoryFilter = (category, todos) => {
    if(category === 'Done') {
      const filteredTodos = todos.filter( todo => todo.completed === true)
      setTodosToShow(filteredTodos)
      return
    }

    if(category === 'Uncompleted') {
      const filteredTodos = todos.filter( todo => todo.completed === false)
      setTodosToShow(filteredTodos)
      return
    }
    setTodosToShow(todos)
    return

  }

  useEffect(() => {
    if( searchValue && (categorySelected !== 'All')) {
      const filtered = filterTodos(searchValue)
      console.log(filtered);
      categoryFilter(categorySelected, filtered)
      return
    }

    if( searchValue ) {
      filterTodos(searchValue)
      return
    }

    console.log(categorySelected, todos);

      categoryFilter(categorySelected, todos)
      return
  }, [todos, searchValue, categorySelected])

  return (
    <>
      <div className="main-container">
        <CreateSection 
          todos={todos} 
          setTodos={setTodos} 
          setTodosToShow={setTodosToShow}
          postLocalStorage={postLocalStorage}
          categoryFilter={categoryFilter}
        />
        <TaskSection 
          todos={todos} 
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          todosToShow={todosToShow}
          setTodosToShow={setTodosToShow}
          filterTodos={filterTodos}
          todosMessage={todosMessage}
          setTodosMessage={setTodosMessage}
          categoryFilter={categoryFilter}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </>
  );
}

export default App;
