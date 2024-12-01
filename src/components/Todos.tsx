import React from 'react';
import DeleteButton from './DeleteButton';
import { Todo } from '../types';

interface TodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<TodosProps> = ({ todos, setTodos }) => {
  
  const handleClick = (id: number) => {
    setTodos(todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  }

  return (
    <div className="mt-6 pb-10">
      <ul className="flex flex-col gap-3">
        {todos.length === 0 && <p className="text-center text-text/50">No task yet</p>}
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className="bg-gray transition-all border border-secondary/30 cursor-pointer rounded-xl px-4 flex items-center justify-between gap-4"
            onClick={() => handleClick(todo.id)}
          >
            <label className='py-4 flex items-center w-full gap-2 cursor-pointer'>
              <div className="checkbox-wrapper-12">
                <div className="cbx">
                    <input 
                      type="checkbox" 
                      id={`cbx-${todo.id}`} 
                      checked={todo.completed}
                      onClick={(e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation()}
                      onChange={() => {}} 
                    />
                    <label htmlFor={`cbx-${todo.id}`}></label>
                    <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                      <path d="M2 8.36364L6.23077 12L13 2"></path>
                    </svg>
                </div>              
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <filter id="goo-12">
                        <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                        <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                    </filter>
                    </defs>
                </svg>
              </div>
              <span className={`cursor-pointer max-w-fit text-sm md:text-base ${todo.completed ? 'line-through' : ''}`}>
                {todo.title}
              </span>
            </label>
            <DeleteButton setTodos={setTodos} id={todo.id} /> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos;