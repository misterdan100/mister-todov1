import '../styles/TaskName.css'

function TaskName({taskInput, setTaskInput, createNewTodo}) {
    return (
        <form 
            className="newTask"
            onSubmit={e => {
                e.preventDefault()
                createNewTodo()
            }}    
        >
            <label>Task Name:</label>
            <input 
                className="input-newTask" 
                placeholder="Launch rocket to the moon"
                onChange={e => setTaskInput(e.target.value)}
                value={taskInput}
            ></input>
        </ form>
    )
};

export default TaskName;