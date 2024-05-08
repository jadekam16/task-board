import React from 'react'
import { useLoaderData, useParams, Link } from 'react-router-dom'

export default function TaskPage() {
    const ticket = useLoaderData();
    const {id} = useParams();

    return (
    <>
        <section className='container mx-auto'>
            <h1 className='text-3xl my-5'>{ticket.title}</h1>  
            <h3 className='text-gray-700 text-bold bg-sky-100 inline py-2 px-3 rounded-full'>Assigned to: {ticket.assignedTo}</h3>
            <h3>Status: {ticket.status}</h3>
            
            <Link
                to='/tasks'
                className='inline-block bg-indigo-400 py-2 px-4 rounded-md text-white text-bold hover:bg-indigo-500 mr-2 mb-4'
            >
                Edit Task
            </Link>
            <Link
                to='/tasks'
                className='inline-block bg-indigo-400 py-2 px-4 rounded-md text-white text-bold hover:bg-indigo-500 mr-2 mb-4'
            >
                Delete Task
            </Link>

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