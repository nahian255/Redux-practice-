import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from '../App';
import { Main } from '../layout/Main';
import { HomeOne } from '../components/HomeOne';
import { Card } from '../components/Card';
import { CartStore } from '../components/CartStore';
import { CartDetails } from '../components/CartDetails';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<HomeOne></HomeOne>
            },
            {
                path:'/cards',
                element:<Card></Card>
            },
            {
                path:'/cards-items',
                element:<CartStore/>
            },
            {
                path:'/cards-details/:id',
                element:<CartDetails></CartDetails>
            },
        ]

    }
])
export default router;