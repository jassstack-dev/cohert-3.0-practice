import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AppRoutes from './router/AppRoutes'

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default App