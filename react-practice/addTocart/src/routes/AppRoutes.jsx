import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/ProductDetail' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default AppRoutes