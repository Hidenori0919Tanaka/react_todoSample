import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = () => {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false,
    },
    {
      task: 'Learn React Hook',
      isCompleted: false,
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false,
    },
  ];
  console.log("Hello %s", "todo");
  const [todos, setTodos] = useState(initialState);
  console.table([[1, 2, 3], [2, 3, 4]]);
  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;