import React from 'react'

function UpdateUser() {
  return (
     <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='w-50 p-4 bg-dark text-white rounded'>
        <form>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control' />
          </div>
          <button className='btn btn-primary mt-2'>Update</button>
        </form>

      </div>

    </div>
  )
}

export default UpdateUser