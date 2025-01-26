import { useState, useEffect } from "react";

export default function Form({ storageKey }) {
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : [''];
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(submit));
    }, [submit, storageKey]);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit([
            ...submit,
            input
        ]);
        setInput('');
    }

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={input} onChange={e => handleChange(e)}/>
                <button type="submit">Fa Bu</button>
                <p>
                    {submit.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </p>
            </form>
        </div>
    )
}