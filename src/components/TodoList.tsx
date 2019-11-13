import * as React from "react";
import TodoItem from "./TodoItem";
import { TodoListInterface } from "../interfaces";

const TodoList = ({
  handleTodoBlur,
  handleTodoComplete,
  handleTodoRemove,
  handleTodoUpdate,
  todos
}: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={handleTodoUpdate}
              handleTodoRemove={handleTodoRemove}
              handleTodoComplete={handleTodoComplete}
              handleTodoBlur={handleTodoBlur}
            ></TodoItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
