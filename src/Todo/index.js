import "./style.css";

export default function Todo({
  todo,
  index,
  setDeleteIndex,
  setCompleteIndex,
}) {

  const removeToDo = (event) => {
    event.target.parentNode.classList.add("opacity");
  
    setTimeout(() => { 
      event.target.parentNode.classList.remove("opacity")
      event.preventDefault();
      setDeleteIndex(index);
    },300);

    console.log(index)
    
  };
  const markAsDone = () => {
    setCompleteIndex(index);
    
  };

  return (
    <div className="todo">
      <p className={todo.done ? "done" : "notDone"} onClick={markAsDone}>
        {todo.title}
      </p>
      <button className="buttond" onMouseOver={(event)=>{event.target.innerHTML="X"}} onMouseLeave={(event)=>{event.target.innerHTML=""}}  onClick={removeToDo }></button>
    </div>
  );
}
