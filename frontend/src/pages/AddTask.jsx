import React, {useState} from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export default function AddTask({addTaskSubmit}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [assigned, setAssigned] = useState('Jade');

  const navigate = useNavigate();

  const submitTask = (e) => {
    e.preventDefault();
    const newTask = {
      title, 
      description,
      assignedTo: assigned,
      status: 'To Do'
    }
    addTaskSubmit(newTask);
    toast.success('Task successfully added!');
    navigate('/')
  }
  return (
      <section className='container mx-auto'>
        <h1 className='text-3xl my-6'>Add a New Task</h1>

        <form onSubmit={submitTask}>
          <label htmlFor='title' className='block text-gray-700 text-xl mb-3'>
            Task Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='border rounded py-2 px-2 w-full mb-3'
            placeholder='e.g. Finish taskboard functionality'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor='description' className='block text-gray-700 text-xl mb-3'>
            Task Description
          </label>
          <textarea
            type='text'
            id='description'
            name='description'
            className='border rounded py-2 px-2 w-full mb-3'
            placeholder='e.g. Implement POST and DELETE methods to ensure tasks can be added and deleted'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor='description' className='block text-gray-700 text-xl mb-3'>
            Assign To
          </label>
          <select
             type='text'
             id='assign'
             name='assign'
             className='border rounded py-2 px-2 w-full mb-3'
             required
             value={assigned}
             onChange={(e) => setAssigned(e.target.value)}
          >
            <option value="Full-Time">Jade</option>
            <option value="Full-Time">Another User</option>
          </select>

          <button className='bg-indigo-300 rounded-full w-full py-3 shadow-md border-indigo-400 
          border-bold hover:bg-indigo-400 text-bold text-white' type='submit'>
            Save Task
          </button>
        </form>
      </section>
  )
}
