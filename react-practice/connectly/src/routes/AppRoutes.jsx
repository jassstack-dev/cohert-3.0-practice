import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Leads from '../pages/Leads'
import CreateLead from '../pages/CreateLead'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: 'dashboard',
            element: <DashboardLayout/>,
            children: [{
                path: '',
                element: <Dashboard/>,
            },
            {
                path:'leads',
                element:<Leads/>
            },{
                path: 'create-leads',
                element:<CreateLead/>
            }
        ]
        }
    ])

    

  return  <RouterProvider router={router} />
}

export default AppRoutes