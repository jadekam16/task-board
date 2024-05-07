import React from 'react'
import { Link } from 'react-router-dom';

export default function Ticket({ticket}) {
  let ticketStatus = '';

  switch(ticket.status) {
    case 'To Do':
      ticketStatus = 'bg-red-100'
      break;
    case 'In Progress':
      ticketStatus = 'bg-yellow-100'
      break;
    case 'Done':
      ticketStatus = 'bg-green-100'
      break;
  }

  return (
    <>
        <div className='bg-violet-200 my-2 mx-2 shadow-md rounded-md py-3'>
            <div className='mx-4'>
              <h1 className='text-xl text-bold'>{ticket.title}</h1>
              <p className={`${ticketStatus} rounded-lg px-2 py-0.5 text-xs text-bold inline`}>{ticket.status}</p>
              <h2 className='text-gray-700 pb-4'>Assigned to: {ticket.assignedTo}</h2>
              <p className='pb-4'>{ticket.description}</p>
              <Link
                to={`/tasks/${ticket.id}`}
                className='bg-amber-50 py-1 px-4 text-xs rounded-md hover:bg-amber-100'
              >
                Read More
              </Link>
            </div>
        </div>
    </>
  )
}
