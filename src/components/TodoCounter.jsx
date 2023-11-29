import "../styles/TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    <h3 className="mb-5">
      Completed {completed} of {total} Todos
    </h3>
  );
};

export default TodoCounter;