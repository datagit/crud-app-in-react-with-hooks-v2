import React, {Fragment, useState } from "react";
import {useDataApi} from './CustomReactHooks';

const SearchResult2 = () => {
    const baseUrl = 'https://hn.algolia.com/api/v1/search?query=';
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        `${baseUrl}${query}`,
        { hits: [] }
    );
    return (
        <Fragment>
            <form onSubmit={event => {
                doFetch(`${baseUrl}${query}`);
                event.preventDefault();
            }}>
                <input
                    name='query'
                    type='text'
                    value={query}
                    onChange={e => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul className='list'>
                    {data.hits.map(item => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    );
};
export default SearchResult2;