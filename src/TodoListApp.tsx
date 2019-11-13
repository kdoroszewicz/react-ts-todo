import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodoInterface } from "./interfaces";
import "./styles/styles.css";

const TodoListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  const handleTodoCreate = (todo: TodoInterface) => {
    const newTodoState: TodoInterface[] = [...todos];
    newTodoState.push(todo);
    setTodos(newTodoState);
  };

  const handleTodoUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newTodosState: TodoInterface[] = [...todos];
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text =
      event.target.value;

    setTodos(newTodosState);
  };

  const handleTodoRemove = (id: string) => {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );

    setTodos(newTodosState);
  };

  const handleTodoComplete = (id: string) => {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;

    setTodos(newTodosState);
  };

  const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  };

  return (
    <div className="todo-list-app">
      {/* Todo form component */}
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />
      {/* Todo list component */}
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />
    </div>
  );
};

export default TodoListApp;
