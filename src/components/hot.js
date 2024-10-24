import Form from './form';
import { useRef } from 'react';

export default function Hot() {
    const ref = useRef(null);

    return (
        <div>
            <p>Hot</p>
            <Form storageKey="hotSubmit" />
            <input ref={ref}></input>
            <button onClick={() => console.log(ref.current)}>Focus</button>
        </div>
    );
}