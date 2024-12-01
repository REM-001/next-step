import React from 'react';
import Input from "./Input"
import TodoCount from "./TodoCount"
import Todos from "./Todos"
import { Todo } from '../types';



interface ContentProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function Content({todos, setTodos}: ContentProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <TodoCount todos={todos} />
      <Input todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Content;