import "./style.css";

export default function Todo({
  todo,
  index,
  setDeleteIndex,
  setCompleteIndex,
}) {

  return (
    <div className="todo">
      <p className={todo.done ? "done" : "notDone"} onClick={() => setCompleteIndex(index)}>
        {todo.title}
      </p>
      <button onClick={() => setDeleteIndex(index)}>X</button>{" "}
    </div>
  );
}
