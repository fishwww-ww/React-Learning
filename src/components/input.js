import { useState, useEffect } from "react";
import './counter.css';

export default function Input() {
    const [submittedValue, setSubmittedValue] = useState('');
    const [storedState, setStoredState] = useState('');

    useEffect(() => {
        // �ӱ��ش洢�ж�ȡ stateValue
        const value = localStorage.getItem('stateValue');
        if (value) {
            setStoredState(value);
        }
    }, []);

    function handleChange(e) {
        setSubmittedValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // ��ֹ����Ĭ���ύ��Ϊ
        localStorage.setItem('submittedValue', submittedValue);
    }

    function handleRemove() {
        localStorage.removeItem('submittedValue');
        setSubmittedValue('');
    }

    return (
        <div className="container-2">
            <form onSubmit={handleSubmit}>
                <input value={submittedValue} onChange={handleChange}></input>
                <button type="submit">Submit</button> {/* ����ƴд���� */}
                <button type='button' onClick={handleRemove}>Remove</button>
            </form>
            <div>{submittedValue}</div>
            <p>{'data from counter.js ' + storedState}</p>
        </div>
    );
}