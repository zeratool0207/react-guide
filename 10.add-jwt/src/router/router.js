import { createBrowserRouter, redirect } from "react-router-dom";

import { getLocalStorage } from "../util/config";


import Login from "../pages/Login";
import Main from "../pages/Main";
import Counter from "../components/Counter";
import GridTest from "../pages/GridTest";
import Faq from "../pages/Faq";
import Auth from "../components/Auth";
import Error from '../pages/Error';

import App from "../App";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <App />
            ),
            children: [
                {
                    path: '/',
                    element: <Login />,
                },
                {
                    path: '/main',
                    element: <Main />
                },
                {
                    path: '/counter',
                    element: <Counter />
                },
                {
                    path: '/main',
                    element: <Main />
                },
                {
                    path: '/grid',
                    element: <GridTest />
                },
                {
                    path: '/faq',
                    element: <Faq />
                },
                {
                    path: '/auth',
                    // loader: () => (!getLocalStorage() ? redirect('/error') : null),
                    element: <Auth />
                },
                {
                    path: '/error',
                    element: <Error />
                },
                // {
                //     path: '/pass',
                //     element: <Pass />
                // },
                // {
                //     path: '/error',
                //     element: <Error />
                // }
            ]
        }
    ]

)