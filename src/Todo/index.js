import "./style.css";

export default function Todo({
  todo,
  index,
  setDeleteIndex,
  setCompleteIndex,
}) {
  const removeToDo = (event) => {
    let x =event.target.parentNode;
    x.classList.add("x");
    
    
    
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
      <button className="buttond" onMouseOver={(event)=>{event.target.innerHTML="X"}} onMouseLeave={(event)=>{event.target.innerHTML=""}}  onClick={removeToDo }></button>{" "}
      
    </div>
  );
}
