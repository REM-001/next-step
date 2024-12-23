import React from 'react';
import { Todo } from '../types';

interface DeleteButtonProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ setTodos, id }) => {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <button 
      onClick={handleDelete}
      className='delete bg-black/30 hover:bg-black/90 p-1 rounded-full active:scale-90 transition-all'
    >
      <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Iconly/Curved/Delete">
          <g id="Delete">
            <path id="Stroke 1" d="M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542" stroke="#E5D4B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Stroke 3" d="M20.3651 6.47985H4.2146" stroke="#E5D4B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Stroke 5" d="M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983" stroke="#E5D4B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </g>
      </svg>
    </button>
  )
}

export default DeleteButton;