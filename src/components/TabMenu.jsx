import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from './Home';
import TodoList from './TodoList';

function TabMenu() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Home" value={0} />
                <Tab label="Todos" value={1} />
            </Tabs>
            {value === 0 && <Home />}
            {value === 1 && <TodoList />}
        </div>
    );
}

export default TabMenu;
