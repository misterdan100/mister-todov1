import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import '../styles/TodoSearch.css'
import { useState } from 'react';

const TodoSearch = ({filterTodos}) => {
  const [ searchValue, setSearchValue ] = useState('');

  return (
    <div className="search-container">
      <input 
        className="input-search " 
        laceholder="Search..." 
        value={searchValue}
        onChange={e => {
          filterTodos(e.target.value.trim())
          setSearchValue(e.target.value.trim())
        }}
      />
      <MagnifyingGlassIcon className="search-icon w-6"></MagnifyingGlassIcon>
    </div>
  );
};

export default TodoSearch;
