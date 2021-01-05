import {useState} from 'react';
import NewTodoForm from './NewTodoForm'
import './App.css';

function App() {
  const defaultTodos = ['First To Do', 'Second To Do', 'Third To Do', 'Fourth To Do', 'Fifth To Do', 'Sixth To Do']
  let [todos, setTodos] = useState(defaultTodos)

  return (
    <div className="App">
      <NewTodoForm />
      Hello World
    </div>
  );
}

export default App;
