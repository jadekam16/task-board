import { Container } from 'postcss'
import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import TicketList from '../components/TicketList'

export default function HomePage() {
  return (
    <>
        <section className='container mx-auto'>
            {/* This should be retrieved for the database */}
            <h1 className='text-3xl text-bold my-4'>Sprint</h1>
            <Link
                to='/tasks'
                className='inline-block bg-indigo-400 py-2 px-4 rounded-md text-white text-bold hover:bg-indigo-500 mr-2 mb-4'
            >
                See all tasks
            </Link>
            <Link
                to='/add-task'
                className='inline-block bg-indigo-400 py-2 px-4 rounded-md text-white text-bold hover:bg-indigo-500 mr-2 mb-4'
            >
                Add a Task                                                                   
            </Link>
            
            <div className='grid grid-cols-3 gap-4 my-2'>
                <Card>
                    <h2 className='text-lg text-bold mx-4 my-2'>To Do</h2>
                    <TicketList id='To Do'/>
                </Card>
                <Card>
                    <h2 className='text-lg text-bold mx-4 my-2'>In Progress</h2>
                    <TicketList id='In Progress'/>
                </Card>
                <Card>
                    <h2 className='text-lg text-bold mx-4 my-2'>Done</h2>
                    <TicketList id='Done'/>
                </Card>
            </div>
        </section>
    </> 
  )
}
