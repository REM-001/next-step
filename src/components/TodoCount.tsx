import React, { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Todo } from '../types';


interface TodoCountProps {
  todos: Todo[];
}

function TodoCount({ todos }: TodoCountProps): React.ReactElement {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const completionPercentage = todos.length > 0 ? (completedTodos / todos.length) * 100 : 0;
  const hasShownToastRef = useRef<boolean>(false);

  useEffect(() => {
    if (completionPercentage === 100 && !hasShownToastRef.current && todos.length >= 3) {
      toast('🎉 Congratulations! You\'ve completed all tasks! 🎉', {
        style: {
          fontFamily: 'Poppins',
          textAlign: 'center',
          borderRadius: '10px',
          background: 'rgba(0, 0, 0, 0.01)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          padding: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          fontSize: '16px',
          fontWeight: 'semibold',
        },
        duration: 2500,
      });
      hasShownToastRef.current = true;
    } else if (completionPercentage < 100) {
      hasShownToastRef.current = false;
    }
  }, [completionPercentage, todos.length]);

  let message = "Do the Work";
  if (completionPercentage >= 100) {
    message = "You did it !";
  } else if (completionPercentage >= 80) {
    message = "Just Do it !";
  } else if (completionPercentage >= 50) {
    message = "Stay Consistent";
  } else if (completionPercentage >= 30) {
    message = "Keep the good work";
  }

  return (
    <>
      <div className="select-none mt-6 flex items-center gap-10 border-2 border-secondary/20 rounded-3xl px-10 py-8 w-fit mx-auto">
        <div>
          <p className="font-bold text-2xl">Tasks Done</p>
          <p className="font-extralight text-secondary/80 text-sm">{message}</p>
        </div>
        <div className="flex justify-center items-center bg-primary text-black rounded-full w-24 h-24">
          <p className="font-bold text-2xl tracking-widest">
            {completedTodos}/{todos.length}
          </p>
        </div>
      </div>
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        }}
      />
    </>
  )
}

export default TodoCount;