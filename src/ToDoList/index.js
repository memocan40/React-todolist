import Todo from "../Todo";

const ToDoList = ({ todos, setDeleteIndex, setCompleteIndex }) => {


  return (
    <div>
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
