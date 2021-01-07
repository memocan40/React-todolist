import Todo from "../Todo";
import './style.css';

const ToDoList = ({ todos, setDeleteIndex, setCompleteIndex }) => {

  return (
    
    <div className="todos-container">
      {todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            setDeleteIndex={setDeleteIndex}
            setCompleteIndex={setCompleteIndex}
            key={index}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
