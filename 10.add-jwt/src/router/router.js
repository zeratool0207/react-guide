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
                    loader: () => (!getLocalStorage() ? redirect('/error') : null),
                    element: <Main />
                },
                {
                    path: '/counter',
                    loader: () => (!getLocalStorage() ? redirect('/error') : null),
                    element: <Counter />
                },
                {
                    path: '/main',
                    loader: () => (!getLocalStorage() ? redirect('/error') : null),
                    element: <Main />
                },
                {
                    path: '/grid',
                    loader: () => (!getLocalStorage() ? redirect('/error') : null),
                    element: <GridTest />
                },
                {
                    path: '/faq',
                    loader: () => (!getLocalStorage() ? redirect('/error') : null),
                    element: <Faq />
                },
                {
                    path: '/auth',
                    loader: () => (!getLocalStorage() ? redirect('/error') : null),
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