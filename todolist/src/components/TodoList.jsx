import React, { useState, useRef } from 'react';
import TodoTable from './TodoTable';

const TodoList = () => {
    const [todo, setTodo] = useState({
        description: '',
        date: '',
        priority: '',
    });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo({
            description: '',
            date: '',
            priority: '',
        });
    };

    const deleteTodo = () => {
        if (gridRef.current && gridRef.current.api.getSelectedNodes().length > 0) {
            const selectedNode = gridRef.current.api.getSelectedNodes()[0];
            setTodos((prevTodos) =>
                prevTodos.filter((todoItem) => todoItem !== selectedNode.data)
            );
        } else {
            alert('Select a row first');
        }
    };

    const clearTodos = () => {
        setTodos([]);
    };

    return (
        <>
            <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleInputChange}
                value={todo.description}
            />
            <input
                type="text"
                name="date"
                placeholder="Date"
                onChange={handleInputChange}
                value={todo.date}
            />
            <input
                type="text"
                name="priority"
                placeholder="Priority"
                onChange={handleInputChange}
                value={todo.priority}
            />
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={clearTodos}>Clear</button>
            <TodoTable todos={todos} onDelete={deleteTodo} gridRef={gridRef} />
        </>
    );
};

export default TodoList;
