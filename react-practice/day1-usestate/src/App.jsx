import React from 'react'
import {useState} from 'react'
import Form from './components/Form'
import User from './components/user'

const App = () => {

  

   const [user, setUser] = useState([])
   console.log(user)
  
  return (
    <div>
      <Form setUser={setUser} />
      {
        user.map((elem,id)=>{
          return <User key={elem.id}  user={elem} />
        })
      }
    </div>
  )
}

export default App