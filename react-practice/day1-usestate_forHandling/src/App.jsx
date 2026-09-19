import React, { use, useState } from 'react'
import Form from './components/Form'
import User from './components/User'

const App = () => {


      const [Users, setUsers] = useState([])
      console.log(Users)

  return (
    <div>
      <Form setUsers={setUsers} />
      <div className="min-h-screen bg-slate-950 p-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {
      Users.map(function(elem) {
        return <User user={elem} />
      })
    }
  </div>
</div>
    </div>
  )
}

export default App