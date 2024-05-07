import React from 'react'
import TicketList from '../components/TicketList'

export default function TaskList() {
  return (
    <section className='container mx-auto my-4'>
      <h1 className='text-3xl text-bold my-4'>Tasks List</h1>
      <div className='grid grid-cols-3 gap-5'>
        <TicketList isHome={true}/>
      </div>
    </section>
  )
}
