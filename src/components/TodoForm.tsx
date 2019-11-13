import React, { useState } from "react";
import shortid from "shortid";
import { TodoFormInterface, TodoInterface } from "../interfaces";

const TodoForm = ({ handleTodoCreate }: TodoFormInterface) => {
  const [formState, setFormState] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  };

  const handleInputEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      };

      handleTodoCreate(newTodo);

      setFormState("");
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={formState}
        placeholder="Input new todo and press enter"
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;
