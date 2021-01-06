import "./style.css";

export default function Todo({
  todo,
  index,
  setDeleteIndex,
  setCompleteIndex,
}) {
  const removeToDo = (event) => {
    event.target.parentNode.style.opacity="0"
    event.target.parentNode.style.transition="1s";
    setTimeout(() => {
      
    
    event.preventDefault();
    setDeleteIndex(index);},1000);
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
      <button className="buttond" onClick={removeToDo }></button>{" "}
      
    </div>
  );
}
