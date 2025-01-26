<<<<<<< HEAD
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
=======
import { createBrowserRouter } from "react-router-dom"
import App from "../App.js"
import Hot from "../components/hot.js"
import New from "../components/new.js"

const router = createBrowserRouter([
    {
        path: '/home',
        element: <App />,
        children: [
            {
                // path: 'hot',
                index: true,
                element: <Hot />
            },
            {
                path: 'new',
                element: <New />
            }
        ]
    }
])

export default router
>>>>>>> 2971918cac435b210b00b076b372a07f7ff7447e
