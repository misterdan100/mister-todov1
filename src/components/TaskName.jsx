import '../styles/TaskName.css'

function TaskName() {
    return (
        <div className="newTask">
            <label>Task Name:</label>
            <input className="input-newTask" placeholder="Launch rocket to the moon"></input>
        </ div>
    )
};

export default TaskName;