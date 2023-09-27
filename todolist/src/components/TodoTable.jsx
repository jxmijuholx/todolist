

function TodoTable(props) {
    return (
        <table>
            <tbody>
                {props.todos.map((todo, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => props.onCheck(index)}
                            />
                        </td>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        <td>
                            <button onClick={() => props.onDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>)
}

export default TodoTable;