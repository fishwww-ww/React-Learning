import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Counter from '../../components/counter.js';
import Input from "../../components/input.js";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            <Link to="/article">Go to Article</Link>
            {/* <button onClick={() => navigate('/article')}>Go to Article</button>
            <button onClick={() => navigate('/article?id=1001&name=jack')}>searchParams</button> */}
            <button onClick={() => navigate('/article/1001')}>Params</button>
            <button>
                <Link to='/'>Go to Layout</Link>
            </button>
            <Counter />
            <Input />
        </div>
    );
}