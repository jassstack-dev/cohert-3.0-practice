import React from 'react'
import Form from './components/Form'
import { useState } from 'react'
import User from './components/User'

const App = () => {


    const [Products, setProducts] = useState([])


  

  return (
    <div>
      <Form setProduct = {setProducts}/>
      <User  product= {Products} />
    </div>
  )
}

export default App