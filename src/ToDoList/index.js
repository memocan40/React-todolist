import ToDo from "../ToDo";
import React, { useState } from "react";

const ToDoList = ({ todos }) => {
  return (
    <div>
      {todos.map((iteration) => (
        <Todo todotitle={iteration.text} />
      ))}
    </div>
  );
};

export default ToDoList;
