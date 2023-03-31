import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Homepage/Home'
import './App.css'

const App = () => {
  return (
    <BrowserRouter> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
