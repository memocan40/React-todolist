import ToDo from "./ToDo"

const ToDoList = (todos) => {
    
    return (
        <div>
            {
                todos.map((iteration) => (<div>{iteration}</div>))
            }
        </div>
    )
}

export default