import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                props.users.length === 0 ? (
                    <tr>
                        <td colSpan={4}>No users</td>
                    </tr>
                ) : (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className='button muted-button' onClick={() => {
                                    props.editRow(user)
                                }}>Edit</button> <button className='button muted-button' onClick={() => {
                                    props.deleteUser(user.id)
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))
                )
            }
            </tbody>
        </table>
        );
};
export default UserTable;
