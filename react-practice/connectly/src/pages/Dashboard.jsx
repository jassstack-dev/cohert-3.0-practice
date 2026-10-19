
import React, { useContext } from 'react'

import { store } from '../context/DataContext'
import StateCards from '../components/StateCards'
import LeadGraph from '../components/LeadGraph'

const Dashboard = () => {





  
 


  return (
    
<div className="p-5">
  <h1 className="text-2xl font-bold text-gray-800">
    Dashboard
  </h1>

  <p className="mt-1 text-sm text-gray-500">
    Here's what's happening with your leads.
  </p>

<StateCards/>
<LeadGraph/>
  
</div>

  )
}

export default Dashboard
