import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/home')}>Hot</button>
            {/* <button onClick={() => navigate('/home/hot')}>Hot</button> */}
            <button onClick={() => navigate('/home/new')}>New</button>
        </div>
    );
}
