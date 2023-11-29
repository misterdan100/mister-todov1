import '../styles/CreateTodoButton.css'

const CreateTodoButton = ({createNewTodo}) => {
  return (
    <button
    className="btn-active"
      onClick={() => createNewTodo()}
    >Create Task</button>
  )
}

export default CreateTodoButton;