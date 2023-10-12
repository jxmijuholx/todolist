
import React, { useState, useRef } from 'react';
import TodoTable from './TodoTable';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DatePicker from '@mui/lab/DatePicker';

const TodoList = () => {
    const [todo, setTodo] = useState({
        desc: '',
        date: null,
        priority: '',
    });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const inputChanged = (event) => {
        const { name, value } = event.target;
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
        clearForm();
    };

    const clearForm = () => {
        setTodo({
            desc: '',
            date: null,
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

    const changeDate = (date) => {
        setTodo({
            ...todo,
            date: date,
        });
    }
    return (
        <div>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Description"
                    variant="standard"
                    name="desc"
                    value={todo.desc}
                    onChange={inputChanged}
                />
                <DatePicker
                    label="Date"
                    inputFormat="yyyy-MM-dd"
                    value={todo.date}
                    onChange={changeDate}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TextField
                    label="Priority"
                    variant="standard"
                    name="priority"
                    value={todo.priority}
                    onChange={inputChanged}
                />
                <Button onClick={addTodo} variant="contained">
                    Add
                </Button>
                <Button onClick={deleteTodo} variant="contained">
                    Delete
                </Button>
            </Stack>
            <TodoTable todos={todos} gridRef={gridRef} />
        </div>
    );
};

export default TodoList;
