import React, {Fragment, useState } from "react";
import useDataFromAsyncApi from "../utilities/UseDataFromAsyncApi";

const UserList = () => {
    const config = {
        method: 'get',
        url: 'http://127.0.0.1:3001/api/users',
        defaultResponseData: {
            records: []
        }
    }
    const [{ data, error, isLoading }, setConfig] = useDataFromAsyncApi(
        config
    );
    //console.log(data);
    return (
        <Fragment>
            {error && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul className='list'>
                    {data.records.map(item => (
                        <li key={item.id}>
                            name:"{item.name}", username:"{item.username}"
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>
    );
};
export default UserList;