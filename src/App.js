import "./App.css";
import ToDoList from "./ToDoList";
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";

function App() {
  let [todos, setTodos] = useState([]);

  const updateTodo = (newToDo) => {
    setTodos([...todos, newToDo]);
  };

  const removeTask = (index) => {
    console.log("before", todos);
    todos.splice(index, 1);
    setTodos([...todos]);
    console.log("After", todos);
  };

  const markAsDone = (index) => {
    todos[index].done = todos[index].done ? false : true;
    setTodos([...todos]);
    console.log(todos);
    console.log(index);
  };

  return (
    <div className="App">
      <NewTodoForm setNewTodo={(newToDo) => updateTodo(newToDo)} />
      <ToDoList
      
        todos={todos}
        setDeleteIndex={removeTask}
        setCompleteIndex={markAsDone}
      />
      <h1>THE</h1>
      <h1>AMAZING</h1>
      <h1>TO-DO-LIST</h1>
    </div>
  );
}

export default App;
