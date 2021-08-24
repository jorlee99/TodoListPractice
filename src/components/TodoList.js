import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => { //Cleans up whitespace/null list values
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos]; //puts todos in an array
        setTodos(newTodos);
        console.log(todo, ...todos);
    }

    const updateTodo = (todoId, newValue) => { //takes id and new value
        if(!newValue.text || /^\s*$/.test(newValue.text)){ // cleans whtie space
            return;
        }
        
        setTodos (prev => prev.map(item => (item.id === todoId ? newValue : item))) //if the item id is equal to the todoId than it takes the new value and if there is no new item it takes the old value
    }

    const removeTodo = id => {
        const removeArray = [...todos].filter(todo => todo.id !== id) //find todo in array of todo and removes it

        setTodos(removeArray)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){ //if tod id is equal to id
                todo.isComplete = !todo.isComplete //swaps complete valule
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>What's the Plan for Today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo = {removeTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
