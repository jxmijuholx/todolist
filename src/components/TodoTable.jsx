import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const TodoTable = ({ todos, gridRef }) => {
    const columns = [
        { field: 'desc', sortable: true, filter: true },
        { field: 'date', sortable: true, filter: true },
        { field: 'priority', sortable: true, filter: true },
    ];

    return (
        <div style={{ height: '500px', width: '90%', margin: 'auto' }}>
            <div className="ag-theme-material">
                <AgGridReact
                    gridOptions={{
                        domLayout: 'autoHeight',
                        animateRows: true,
                    }}
                    columnDefs={columns}
                    rowData={todos}
                    ref={gridRef}
                />
            </div>
        </div>
    );
};

export default TodoTable;