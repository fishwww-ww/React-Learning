import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
            1 router
            <Link to="/">Board</Link>
            <Link to="/about">About</Link>
            <Outlet />
            <button>
                <Link to='/login'>Go to Login</Link>
            </button>
            <button>
                <Link to='/article/1001'>Go to Article</Link>
            </button>
            <button onClick={() => navigate('/login')}>navigate to login</button>
        </div>
    )
}
export default Layout;