import { useState, useEffect } from "react";
import './counter.css';

export default function Input() {
    const [submittedValue, setSubmittedValue] = useState('');
    const [storedState, setStoredState] = useState('');

    useEffect(() => {
        // 从本地存储中读取 stateValue
        const value = localStorage.getItem('stateValue');
        if (value) {
            setStoredState(value);
        }
    }, []);

    function handleChange(e) {
        setSubmittedValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // 阻止表单的默认提交行为
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
                <button type="submit">Submit</button> {/* 修正拼写错误 */}
                <button type='button' onClick={handleRemove}>Remove</button>
            </form>
            <div>{submittedValue}</div>
            <p>{'data from counter.js ' + storedState}</p>
        </div>
    );
}