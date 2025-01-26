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
    // �� localStorage �ж�ȡ��ʼ״̬
    const initialState = parseInt(localStorage.getItem('stateValue')) || 0;
    const [state, setState] = useState(initialState);
    // �� state �����仯ʱ�����䱣�浽 localStorage ��
    useEffect(() => {
        localStorage.setItem('stateValue', state);
    }, [state]);
    return [state, setState];
}