import "./style.css";

export default function Todo({
  todo,
  index,
  setDeleteIndex,
  setCompleteIndex,
}) {
  const removeToDo = (event) => {
    event.preventDefault();
    setDeleteIndex(index);
    // event.target.parentNode.remove();
  };
  const markAsDone = () => {
    setCompleteIndex(index);
    console.log("Hello");
  };

  return (
    <div className="todo">
      <p className={todo.done ? "done" : "notDone"} onClick={markAsDone}>
        {todo.title}
      </p>
      <button onClick={removeToDo}>X</button>{" "}
    </div>
  );
}
