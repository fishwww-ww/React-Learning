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