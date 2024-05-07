import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const linkClass = ({isActive}) => isActive ? 'bg-gray-700 text-white hover:text-white hover:bg-gray-600 px-4 py-2' 
    : 'text-white hover:text-white hover:bg-gray-600 px-4 py-2'
    return (
        <nav className='bg-blue-400 border-blue-600 border-b px-5 py-3'>
            <div className='flex'>
                <NavLink
                    to='/'
                    className={linkClass}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/tasks'
                    className={linkClass}
                >
                    Task List
                </NavLink>
                <NavLink
                    to='/add-task'
                    className={linkClass}
                >
                    Add a Task
                </NavLink>
                <NavLink
                    to='/add-user'
                    className={linkClass}
                >
                    Add User
                </NavLink>
            </div>
            
        </nav>
    )
}
