import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Todo } from '../types';



interface InputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function Input({todos, setTodos}: InputProps): React.ReactElement {
  const [todoText, setTodoText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todos.length >= 3) {
      toast('You must Log in to add more than 3 tasks!', {
        icon: '⚠️',
        style: {
          borderRadius: '10px',
          background: 'rgba(0, 0, 0, 0.01)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          fontSize: '16px',
        },
      });
    } else if (todoText.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: todoText,
          completed: false
        },
      ]);
      setTodoText("");
    }
  };

  return (   
    <>
      <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-4 mx-auto w-fit">
        <input 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
          value={todoText}
          type="text"
          className="block w-full text-text placeholder:text-text/50 focus:outline-gray
          bg-gray px-5 py-3 text-gray-900 outline-none hover:bg-gray/80 rounded-2xl transition-all"
          placeholder="Next task ?"
        />
        <button 
          type="submit"
          className="bg-primary px-4 py-2 flex items-center justify-center rounded-full
          text-black text-2xl font-bold hover:bg-primary-lighted active:scale-90 transition-all"
        >
          +
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default Input;