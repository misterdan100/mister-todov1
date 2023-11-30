import { useState } from 'react';
import TaskName from './TaskName'
import CreateTodoButton from './CreateTodoButton';
import Alert from './Alert';
import { idGenerator } from '../helpers';
import '../styles/CreateSection.css'

function CreateSection({todos, setTodos, setTodosToShow, postLocalStorage, categoryFilter}) {
    const [ taskInput, setTaskInput ] = useState('')
    const [ isAlert, setIsAlert ] = useState(false)
    const [ alertText, setAlertText ] = useState('')

    const createNewTodo = () => {
        if(taskInput === '') {
            setAlertText('Set a name!')
            setIsAlert(true)

            setTimeout(() => {
                setIsAlert(false)
            }, 3000);
            return
        } 

        const isTaksInArray = todos.find( todo => todo.text === taskInput );
        if(isTaksInArray) {
            setAlertText('Task already exist in the list!')
            setIsAlert(true)

            setTimeout(() => {
                setIsAlert(false)
            }, 4000);
            return
        }

        const newTask = { text: taskInput, completed: false, id: idGenerator() }
        setTodos([...todos, newTask])
        setTodosToShow([...todos, newTask])
        setTaskInput('')
        postLocalStorage([...todos, newTask])
        // categoryFilter([...todos, newTask])
    }

    return (
        <div className="create-section">
            <h2 className="create-title">Create new task</h2>
            <TaskName
                taskInput={taskInput}
                setTaskInput={setTaskInput}
                createNewTodo={createNewTodo}
            />
            <CreateTodoButton createNewTodo={createNewTodo}/>
            { isAlert && <Alert alertText={alertText}/>}
        </div>
    )
}

export default CreateSection;