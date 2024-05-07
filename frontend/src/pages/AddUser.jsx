import React, {useState} from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export default function AddUser({addUserSubmit}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitUser = (e) => {
    e.preventDefault();
    const newUser = {
      name, 
      email,
      password
    }
    addUserSubmit(newUser);
    toast.success('User successfully added!');
    navigate('/')
  }

  return (
    <section className='container mx-auto'>
      <h1 className='text-3xl my-6'>Add a New User</h1>

      <form onSubmit={submitUser}>
        <label htmlFor='Name' className='block text-gray-700 text-xl mb-3'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded py-2 px-2 w-full mb-3'
          placeholder='e.g. Jade'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor='title' className='block text-gray-700 text-xl mb-3'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='border rounded py-2 px-2 w-full mb-3'
          placeholder='e.g. jadek@gmail.com'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='title' className='block text-gray-700 text-xl mb-3'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          className='border rounded py-2 px-2 w-full mb-3'
          placeholder='e.g. 273t21hgegbhj'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='bg-indigo-300 rounded-full w-full py-3 shadow-md border-indigo-400 
        border-bold hover:bg-indigo-400 text-bold text-white' type='submit'>
          Save User
        </button>
      </form>
    </section>
  )
}
