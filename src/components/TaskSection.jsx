import React from 'react';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import '../styles/TaskSection.css'


const TaskSection = () => {

    const defaultTodos = [
        { text: 'Cortar cebolla', completed: false },
        { text: 'Curso introduccion a React JS', completed: true },
        { text: 'Lavar zapatos', completed: false },
        { text: 'Comprar mercado', completed: true },
        { text: 'Cortar cebolla', completed: false },
        { text: 'Curso introduccion a React JS', completed: true },
        { text: 'Lavar zapatos', completed: false },
        { text: 'Comprar mercado', completed: true },
        { text: 'Cortar cebolla', completed: false },
        { text: 'Curso introduccion a React JS', completed: true },
        { text: 'Lavar zapatos', completed: false },
        { text: 'Comprar mercado', completed: true },
        { text: 'Cortar cebolla', completed: false },
        { text: 'Curso introduccion a React JS', completed: true },
        { text: 'Lavar zapatos', completed: false },
        { text: 'Comprar mercado', completed: true },
    ]

  return (
    <div className='task-section'>
            <h1 className='title'>Your tasks</h1>

            <TodoCounter completed={16} total={25} />
            <TodoSearch />

            <TodoList>
                {defaultTodos.map(todo => (
                    <TodoItem key={todo.text} titulo={todo.text} completed={todo.completed} />
                )
                )}
            </ TodoList>
        </div>
  )
}

export default TaskSection