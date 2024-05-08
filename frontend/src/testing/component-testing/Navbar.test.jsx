import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
    it('renders all navigation links and leads to the correct URL and correct bg colours', () => {
        render(<Navbar/>)

        const home = screen.getByText('Home');
        const TaskList = screen.getByText('Task List');
        const AddTask = screen.getByText('Add a Task');
        const AddUser = screen.getByText('Add User');

        expect(home).toBeInTheDocument();
        expect(TaskList).toBeInTheDocument();
        expect(AddTask).toBeInTheDocument();
        expect(AddUser).toBeInTheDocument();

        fireEvent.click(home);
        expect(window.location.pathname).toBe('/');
        expect(home).toHaveClass('bg-gray-700');
        fireEvent.click(TaskList);
        expect(window.location.pathname).toBe('/tasks');
        expect(TaskList).toHaveClass('bg-gray-700');
        fireEvent.click(AddTask);
        expect(window.location.pathname).toBe('/add-task');
        expect(AddTask).toHaveClass('bg-gray-700');
        fireEvent.click(AddUser);
        expect(window.location.pathname).toBe('/add-user');
        expect(AddUser).toHaveClass('bg-gray-700');
    });

    it('renders with the correct colours in hover state', () => {
        render(<Navbar/>)

        const home = screen.getByText('Home');
        const TaskList = screen.getByText('Task List');
        const AddTask = screen.getByText('Add a Task');
        const AddUser = screen.getByText('Add User');

        // Check hover state
        fireEvent.mouseOver(home);
        expect(home).toHaveClass('bg-gray-600');

        fireEvent.mouseOver(TaskList);
        expect(TaskList).toHaveClass('bg-gray-600');

        fireEvent.mouseOver(AddTask);
        expect(AddTask).toHaveClass('bg-gray-600');

        fireEvent.mouseOver(AddUser);
        expect(AddUser).toHaveClass('bg-gray-600');

    })
})
