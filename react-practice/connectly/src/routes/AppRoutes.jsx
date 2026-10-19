import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Leads from '../pages/Leads'
import CreateLead from '../pages/CreateLead'
import LeadDetails from '../pages/LeadDetails'
import FollowUp from '../components/FollowUp'
import FollowUpDetails from '../pages/FollowUpDetails'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/dashboard',
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
            },{
                path: 'follow-up',
                element: <FollowUp/>
            },{
                path: 'detail-follow-up/:id',
                element: <FollowUpDetails/>
            }
        ]
        }
    ])

    

  return  <RouterProvider router={router} />
}

export default AppRoutes