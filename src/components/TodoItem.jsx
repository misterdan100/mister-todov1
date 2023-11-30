import { CheckCircleIcon} from '@heroicons/react/24/solid'
import { MinusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import '../styles/TodoItem.css'

const TodoItem = ({ titulo, completed, deleteTodo, completeTodo }) => {
  return (
    <li className={`item ${completed && 'opacity-50 item'}`}>
      <div>
        <div 
          className="check-icon"
          onClick={() => completeTodo(titulo)}
        >
          {
            completed ? (
              <i className="gg-check check"><CheckCircleIcon /></i>
            ) : (
              <i className="gg-radio-check circle"><MinusCircleIcon /></i>
            )
          }
        </div>
        <p className={completed ? 'line-through text-gray-400' : undefined} >{titulo}</p>
      </div>
      <i
        className="gg-close close"
        onClick={() => deleteTodo(titulo)}
      ><XMarkIcon /></i>
    </li>
  );
};

export default TodoItem;
