import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler}>
            <div className="d-flex justify-content-center">
                <div className="input-group w-auto">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Example input"
                    aria-label="Example input"
                    aria-describedby="button-addon1"
                    onChange={(e)=>setInput(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit" id="button-addon1" data-mdb-ripple-color="dark">
                        Add Todo
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddTodo
