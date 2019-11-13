import * as React from "react";
import { TodoItemInterface } from "../interfaces";

const TodoItem = ({
  handleTodoComplete,
  handleTodoBlur,
  handleTodoRemove,
  handleTodoUpdate,
  todo
}: TodoItemInterface) => {
  return (
    <div className="todo-item">
      <div onClick={() => handleTodoComplete(todo.id)}>
        {todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked"></span>
        )}
      </div>

      <div className="todo-item-input-wrapper">
        <input
          value={todo.text}
          onBlur={handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleTodoUpdate(event, todo.id)
          }
        ></input>
      </div>
      <div className="item-remove" onClick={() => handleTodoRemove(todo.id)}>
        ⨯
      </div>
    </div>
  );
};

export default TodoItem;
