import "./App.css";
import ToDoList from "./ToDoList";
import {useState} from 'react';
import NewTodoForm from './NewTodoForm'


function App() {
  const defaultTodos = ['First To Do', 'Second To Do', 'Third To Do', 'Fourth To Do', 'Fifth To Do', 'Sixth To Do']
  let [todos, setTodos] = useState(defaultTodos)

  return (
    <div className="App">
      <NewTodoForm />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
