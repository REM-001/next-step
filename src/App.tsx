import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { Todo } from '../src/types';

function App(): React.ReactElement {
  const [todos, setTodos] = useState<Todo[]>([]); 

  return (
    <div className="font-sans min-h-screen bg-black overflow-y-hidden">
      <main className='max-w-lg h-full px-2 m-auto w-full text-text flex flex-col justify-center items-center'>
        <Navbar todos={todos} setTodos={setTodos} />
        <Content todos={todos} setTodos={setTodos} /> 
      </main>
    </div>
  )
}

export default App;