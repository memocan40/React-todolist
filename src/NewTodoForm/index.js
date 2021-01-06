import './style.css';
import { useState } from 'react';

const NewTodoForm = () => {
    
    let [userInput, setUserInput] = useState("");

    return (
        <form>
            <input placeholder="Add a new task"></input>
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;