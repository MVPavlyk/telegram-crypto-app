import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import WebApp from '@twa-dev/sdk'
import HomePage from './pages/Home';
import LeaderboardPage from './pages/Leaderboard';
import BASE_ROUTE, {ROUTES} from "./config/routes";

WebApp.ready();


const router = createBrowserRouter([
    {
        path: BASE_ROUTE,
        element: <App/>,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage/>,
            },
            {
                path: ROUTES.LEADERBOARD,
                element: <LeaderboardPage/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
