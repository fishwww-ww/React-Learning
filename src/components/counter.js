import { useState, useEffect } from "react";
import './counter.css';

export default function Counter() {
    const [state, setState] = useCount();

    function handleRemove() {
        localStorage.removeItem('stateValue');
        setState(0);
    }

    function handleClick() {
        setState(state + 1);
    }

    return (
        <div className="container-1">
            {state}
            <button onClick={handleClick}>+</button>
            <button onClick={handleRemove}>Remove State</button>
        </div>
    );
}

function useCount () {
    // 从 localStorage 中读取初始状态
    const initialState = parseInt(localStorage.getItem('stateValue')) || 0;
    const [state, setState] = useState(initialState);
    // 当 state 发生变化时，将其保存到 localStorage 中
    useEffect(() => {
        localStorage.setItem('stateValue', state);
    }, [state]);
    return [state, setState];
}