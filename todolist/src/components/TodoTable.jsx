// TodoTable.jsx
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const TodoTable = ({ todos, onDelete, gridRef }) => {
    const deleteRow = () => {
        const selectedNodes = gridRef.current.api.getSelectedNodes();
        if (selectedNodes.length > 0) {
            onDelete(selectedNodes[0].data);
        } else {
            alert('Select a row first');
        }
    };

    const columns = [
        { field: 'description', sortable: true, filter: true },
        { field: 'date', sortable: true, filter: true },
        {
            field: 'priority',
            sortable: true,
            filter: true,
            cellStyle: (params) =>
                params.value === 'High' ? { color: 'red' } : { color: 'black' },
        },
        {
            headerName: 'Actions',
            cellRendererFramework: () => (
                <button onClick={deleteRow}>Delete</button>
            ),
            width: 100,
        },
    ];

    return (
        <div>
            <div className="ag-theme-material" style={{ height: '500px', width: '90%', margin: 'auto' }}>
                <AgGridReact
                    gridOptions={{
                        domLayout: 'autoHeight',
                    }}
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={todos}
                    ref={gridRef}
                />
            </div>
        </div>
    );
};

export default TodoTable;
