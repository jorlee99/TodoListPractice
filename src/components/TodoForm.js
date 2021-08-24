import React , {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000), //gives each to do a random id
            text: input
        });
        setInput('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type ="text" placeholder="Add a To-Do Item" value ={input} name='text' className='todo-input' onChange={handleChange}/>
            <button className="todo-button">Add To-Do</button>
        </form>
    )
}

export default TodoForm
