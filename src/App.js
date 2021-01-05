import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
