import React from 'react'
import { useLoaderData, useParams, Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

export default function TaskPage({deleteTask}) {
    const ticket = useLoaderData();
    const {id} = useParams();
    const navigate = useNavigate();

    const onDeleteClick = (ticketId) => {
        const confirm = window.confirm('Do you want to delete?');
        if (!confirm) return;
        deleteTask(ticketId);
        toast.success('Task deleted!');
        navigate('/tasks');
    }

    return (
    <>
        <section className='container mx-auto'>
            <h1 className='text-3xl my-5'>{ticket.title}</h1>  
            <h3 className='text-gray-700 text-bold bg-sky-100 inline-block py-2 px-3 rounded-full mr-2 mb-3'>Assigned to: {ticket.assignedTo}</h3>
            <h3 className='text-gray-700 text-bold bg-sky-100 inline-block py-2 px-3 rounded-full'>Status: {ticket.status}</h3>
            <br></br>
            <Link
                to='/tasks'
                className='inline-block bg-indigo-400 py-2 px-4 rounded-md text-white text-bold hover:bg-indigo-500 mr-2 mb-4 ml-1'
            >
                Edit Task
            </Link>
            <button
                onClick={() => onDeleteClick(ticket.id)}
                className='inline-block bg-indigo-400 py-2 px-4 rounded-md text-white text-bold hover:bg-indigo-500 mr-2 mb-4'
            >
                Delete Task
            </button>

            <p>{ticket.description}</p>
        </section>
    </>
    )
}

export const taskLoader = async({params}) => {
    const res = await fetch(`http://localhost:8000/tickets/${params.id}`)
    const data = res.json();
    return data;
}