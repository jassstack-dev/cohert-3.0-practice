import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Leads from '../pages/Leads'
import CreateLead from '../pages/CreateLead'
import LeadDetails from '../pages/LeadDetails'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
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
            },{
                path: 'lead-details/:id',
                element: <LeadDetails/>
            }
        ]
        }
    ])

    

  return  <RouterProvider router={router} />
}

export default AppRoutes