import { useState } from "react"
function Todo() {
    let [todos, setTodos] = useState([])
    let submithandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { name: e.target.todoname.value }])
    }
    console.log(todos)
    return (
        <div className="w-100 bg-primary">
            <h1>Todo App</h1>
            <div className="todo-app">
                <form onSubmit={submithandler}>
                    <label>Todo Name</label>
                    <input name="todoname" type="text" />
                    <button>Submit</button>
                </form>
                <div>
                    <h1> All Todos</h1>
                    <div>
                        {todos.map((v, i) => {
                            return (
                                <div>
                                    <p>Name : {v.name}</p>
                                    <button>Delete</button>
                                    <button>update</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;