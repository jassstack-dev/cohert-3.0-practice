import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {
  return (
   <div className='h-screen p-2 grid grid-cols-[1fr_6fr]'>
        
     <Sidebar/>
        <div className='overflow-auto pl-5'>
            <Topbar/>
        <Outlet/>
        </div>

        </div>
  )
}

export default DashboardLayout