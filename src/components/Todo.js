    import React, {useState} from 'react'
    import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit} from 'react-icons/ti'

    function Todo({todos, completeTodo, removeTodo, updateTodo}) {
        const [edit, setEdit] = useState({
            id: null,
            value: ''
        })

        const submitUpdate = value => {
            updateTodo(edit.id, value)
            setEdit({
                id:null,
                value: ''

            });
        };

        if (edit.id) {
            return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
        }

        return todos.map((todo,index) => (
            <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} //checks if todo is completed
        key = {index}>
            <div key={todo.id} onClikc={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div clasName="icons">
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)} //removes the todo
                className='delete-icon'/>
                <TiEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})} //removes the todo
                className='delete-icon'
                />
            </div>
        </div>
    ));
        }
    export default Todo
    