import './style.css';
import { useState } from 'react';

const NewTodoForm = ({ setNewTodo }) => {
    
    let [userInput, setUserInput] = useState("");

    const handleClick = userInput => (e) => {
        
        e.preventDefault();
        const newTask = {
            
            title: userInput,
            done: false
        }
        
        
        setNewTodo(newTask);
        setUserInput("");
      };

    return (
        <form>
            <input className="inputfield" value={userInput} placeholder="Add a new task" onChange={(e) => setUserInput(e.target.value) }></input>
            <button onClick={handleClick(userInput)}>Add</button>
        </form>
    )
}

export default NewTodoForm;