import Todo from "../Todo";
import React, { useState } from "react";

const ToDoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return<Todo todotitle={todo.title} />
      })}
    </div>
  );
};

export default ToDoList;
