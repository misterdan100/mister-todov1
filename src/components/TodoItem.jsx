import { CheckCircleIcon} from '@heroicons/react/24/solid'
import { MinusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'


import '../styles/TodoItem.css'

const TodoItem = ({ titulo, completed }) => {
  return (
    <li className="item">
      <div>
        <div className="check-icon">
          <i className="gg-radio-check circle"><MinusCircleIcon /></i>
          {/* <i className="gg-check check"><CheckCircleIcon /></i> */}
        </div>
        <p>{titulo}</p>
      </div>
      <i className="gg-close close"><XMarkIcon /></i>
    </li>
  );
};

export default TodoItem;
