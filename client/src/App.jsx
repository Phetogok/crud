import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import UpadateUser from './pages/UpdateUser'


function App() {


  return (
    <div className='bg-black text-white'>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Users/>} />
      <Route path="/create" element={<CreateUser/>} />
      <Route path="/update" element={<UpadateUser/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
