import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import '../styles/TodoSearch.css'

const TodoSearch = () => {
  return (
    <div className="search-container">
      <input className="input-search " placeholder="Search..." />
      <MagnifyingGlassIcon className="search-icon w-6"></MagnifyingGlassIcon>
    </div>
  );
};

export default TodoSearch;
