import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBooks from './pages/CreateBooks'
import DeleteBooks from './pages/DeleteBooks'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import Editbook from './pages/Editbook'

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/books/create' element={<CreateBooks/>} />
       <Route path='/books/details/:id' element={<ShowBook/>} />
       <Route path='/books/edit/:id' element={<Editbook />} />
       <Route path='/books/delete/:id' element={< DeleteBooks />} />
    </Routes>
  )
}

export default App