import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Examples = () => {
    let { id } = useParams();
    const title = 'React';
    return (
      <div>
          <h1>id:{id}</h1>
          <h1>{title}</h1>
          <Link to="/">Home</Link>
      </div>
    );
};
export default Examples;