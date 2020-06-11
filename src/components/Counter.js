import React, {useState} from 'react';
import {useDocumentTitle} from './CustomReactHooks';
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const title = `You clicked ${count} times. from Counter`;
    useDocumentTitle(title);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )
};
export default Counter;