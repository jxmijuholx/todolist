import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('Clear button removes all todos from the list', () => {
    render(<TodoList />);

    // Add a new todo
    const descriptionInput = screen.getByPlaceholderText('Description');
    const addButton = screen.getByText('Add');

    fireEvent.change(descriptionInput, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);

    // Check that the todo is in the list
    const todoText = screen.getByText('Test todo');
    expect(todoText).not.toBeNull(); // Updated assertion

    // Click the clear button
    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    // Check that the todo is no longer in the list
    const clearedTodoText = screen.queryByText('Test todo');
    expect(clearedTodoText).toBeNull();
});
