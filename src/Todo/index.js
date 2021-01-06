import "./style.css";


export default function Todo({todo,index,setDeleteIndex}){
const handleClick=(event)=>{
    event.preventDefault();
    setDeleteIndex(index);
    // event.target.parentNode.remove();
}


    return(
        <div className="todo">{todo.title} <button onClick={handleClick}>X</button> </div>
    )
}