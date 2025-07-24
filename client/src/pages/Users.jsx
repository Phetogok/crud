import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([{
    Name: 'John Doe',
    Email: 'jonh@gmail.com',
    Age: 30
  }]);

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
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td><Link to='/update' className='btn btn-success btn-sm'>Edit</Link> <button className='btn btn-danger btn-sm'>Del</button></td>
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