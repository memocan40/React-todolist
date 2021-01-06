import Todo from "../Todo";
import React, { useState } from "react";

const ToDoList = ({ todos,setDeleteIndex }) => {
  const passDeleteIndex=(index)=>{
setDeleteIndex(index);
  }
  return (
    <div>
      {todos.map((todo,index) => {
        return<Todo todo={todo} setDeleteIndex={passDeleteIndex} index={index} />
      })}
    </div>
  );
};

export default ToDoList;
