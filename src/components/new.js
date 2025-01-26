import Form from './form';
import { useMemo, useState } from 'react';

export default function New() {
    const [value, setValue] = useState(0);

    const result = useMemo(() => {
        return value * 2;
    }, [value]);

    return (
        <div>
            <p>New</p>
            <Form storageKey="newSubmit" />
            <button onClick={() => setValue(value + 1)}>{value}</button>
            <p>{result}</p>
        </div>
    );
}