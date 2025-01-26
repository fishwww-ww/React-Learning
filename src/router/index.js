import Login from "../Page/Login";
import Article from "../Page/Article";
import Layout from "../Page/Layout";
import About from "../Page/About";
import Board from "../Page/Board";
import NotFound from "../Page/NotFound";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                // path: 'board',
                index: true,
                element: <Board />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article/:id',
        element: <Article />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;