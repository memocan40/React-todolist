import Todo from "../Todo";
import React, { useState } from "react";

const ToDoList = ({ todos }) => {
  return (
    <div>
      {todos.map((iteration) => {
        return<Todo todotitle={iteration} />
      })}
    </div>
  );
};

export default ToDoList;
