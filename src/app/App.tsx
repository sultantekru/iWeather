import React from 'react'
import { Home } from '../pages/Home'
import { Location } from '../pages/Location'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App
