import "./App.css";
import ToDoList from "./ToDoList";
import {useState} from 'react';
import NewTodoForm from './NewTodoForm'


function App() {
  
  let [todos, setTodos] = useState([])
  
  const updateTodo = (newToDo) => {
    setTodos([...todos, newToDo])
  } 
  
  const removeTask = (index) => {
    console.log('before', todos)
    todos.splice(index, 1);
    setTodos([...todos]);
    console.log('After', todos)
  }
  
  return (
    <div className="App">
      <NewTodoForm setNewTodo={(newToDo) => updateTodo(newToDo)}/>
      <ToDoList todos={todos} setDeleteIndex={removeTask} />
    </div>
  );
}

export default App;
