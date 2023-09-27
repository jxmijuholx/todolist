import React, { useState } from 'react';
import TodoTable from "./components/TodoTable";

function TodoList() {
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        const { name, value } = event.target;
        if (name === 'desc') {
            setDesc(value);
        } else if (name === 'date') {
            setDate(value);
        }
    };

    const addTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            description: desc,
            date: date,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setDesc('');
        setDate('');
    };

    const toggleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <>
            <input
                type="text"
                name="desc"
                placeholder="Description"
                onChange={inputChanged}
                value={desc}
            />
            <input
                type="text"
                name="date"
                placeholder="Date"
                onChange={inputChanged}
                value={date}
            />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} onDelete={deleteTodo} onCheck={toggleCompleted} />
        </>
    );
}

export default TodoList;
