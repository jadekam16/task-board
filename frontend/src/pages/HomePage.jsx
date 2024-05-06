import { Container } from 'postcss'
import React from 'react'

export default function HomePage() {
  return (
    <>
        <div className='container mx-auto'>
            {/* This should be retrieved for the database */}
            <h1 className='text-xl text-bold my-4'>Sprint</h1>
            <div className='grid grid-cols-4 gap-4 my-2'>
                {/* This should also be dynamic and in its own card component */}
                <div className='bg-blue-300 shadow-md rounded-lg'>
                    To Do

                    {/* This should be dynamic and in its own ticket component */}
                    <div className='bg-gray-200 my-2 mx-2 shadow-md rounded-md py-10'>
                        Ticket
                    </div>
                    <div className='bg-gray-200 my-2 mx-2 shadow-md rounded-md py-10'>
                        Ticket
                    </div>
                    <div className='bg-gray-200 my-2 mx-2 shadow-md rounded-md py-10'>
                        Ticket
                    </div>
                </div>
                <div className='bg-blue-300 shadow-md rounded-lg'>
                    In Progress
                </div>
                <div className='bg-blue-300 shadow-md rounded-lg'>
                    Done
                </div>
                <div className='bg-blue-300 shadow-md rounded-lg'>
                    Task List
                </div>
            </div>
        </div>
    </> 
  )
}
