import React, { useState, useEffect } from "react";
import axios from 'axios';

const SearchResult = () => {
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('react');

    useEffect( () => {
        async function fetchData() {
            const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
            console.log('result', result);
            setData(result.data);
        }
        fetchData();
    }, [query]);
    return (
        <div>
            <input name='query' value={query} onChange={e => setQuery(e.target.value)} />
            <ul className='list'>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default SearchResult;