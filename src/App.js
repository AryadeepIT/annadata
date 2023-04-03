import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Homepage/Home'
import ProductPage from './pages/Product/ProductPage'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageNotFound from './pages/PageNotFound/PageNotFound';

const App = () => {
  return (
    <BrowserRouter> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" element={<ProductPage />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
