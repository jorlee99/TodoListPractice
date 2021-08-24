import React , {useState, useEffect, useRef} from 'react' //hooks

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus() //lets the input be automatically filled (changes the focus of the page)
    })

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
            <input type ="text" placeholder="Add a To-Do Item" value ={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
            <button className="todo-button">Add To-Do</button>
        </form>
    )
}

export default TodoForm
