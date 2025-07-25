import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/createUser', {name, email, age})
    .then((result) =>{
       navigate('/')
      })
    .catch((err) => console.log(err));
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='w-50 p-4 bg-dark text-white rounded'>
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
          </div>
          <button className='btn btn-primary mt-2'>Submit</button>
        </form>

      </div>

    </div>
  )
}

export default CreateUser