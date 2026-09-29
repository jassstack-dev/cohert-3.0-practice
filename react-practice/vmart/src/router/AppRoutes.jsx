import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Details from '../pages/Details'
import CartUi from '../pages/CartUi'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path ='/cart' element={<CartUi/>} />
        
    </Routes>
  )
}

export default AppRoutes