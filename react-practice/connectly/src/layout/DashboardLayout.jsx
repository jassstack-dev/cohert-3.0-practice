
import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

const DashboardLayout = () => {
  return (
    <div className="h-screen p-2 grid grid-cols-1 md:grid-cols-[1fr_6fr] gap-2 overflow-hidden">

      <Sidebar />

      <div className="min-w-0 overflow-y-auto overflow-x-hidden md:pl-3 pt-16 md:pt-0">
        <Topbar />
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
