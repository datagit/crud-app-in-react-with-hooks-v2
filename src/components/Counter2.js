import React, {Fragment} from 'react';
import {useDocumentTitle, useLocalStorageState} from './CustomReactHooks';

const Counter2 = () => {
    const [count, setCount] = useLocalStorageState("key_count", 0);
    const title = `You clicked ${count} times. from Counter2`;
    useDocumentTitle(title);
    return (
      <Fragment>
          <h3>{count}</h3>
          <button onClick={() => setCount(count + 1)}>Increment2</button>
      </Fragment>
    );
};
export default Counter2;