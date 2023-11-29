import TaskName from './TaskName'
import CreateTodoButton from './CreateTodoButton';
import '../styles/CreateSection.css'

function CreateSection() {
    return (
        <div className="create-section">
            <h2 className="create-title">Create new task</h2>
            <TaskName />
            <CreateTodoButton />
        </div>
    )
}

export default CreateSection;