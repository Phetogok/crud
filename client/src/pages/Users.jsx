import React, { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
     axios.get('http://localhost:3001/')
     .then(result => setUsers(result.data))
     .catch(err => console.log(err)); 


  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteUser/${id}`)
    .then(result => {
      window.location.reload()
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 '>
      <div className='w-50 bg-white p-3 rounded '> 

        <Link to='/create' className='btn btn-success mb-2'>Add +</Link>

        <table className='table table-striped'> 
          <thead> 
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td><Link to={`/update/${user._id}`} className='btn btn-success btn-sm'>Edit</Link> <button onClick={(e) => handleDelete(user._id)} className='btn btn-danger btn-sm'>Del</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Users