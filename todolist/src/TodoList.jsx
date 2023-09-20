import React, { useState } from 'react';

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
            completed: false, // Lisää uusi kenttä: completed
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
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleCompleted(index)}
                                />
                            </td>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;
