import React, {useState, useEffect} from 'react';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);
    const handleInputChange = event => {
        const {name, value} = event.target;

        // return object with dynamic key
        setUser({ ...user, [name]: value });
    };
    useEffect(() => {
        // This is where the Effect Hook comes into place. We want to let the EditUserForm component know the props have changed,
        // which we would have done before with componentDidUpdate.
        console.log('useEffect');
        setUser(props.currentUser);
    }, [props]);
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.updateUser(user.id, user);
            }}
            method='post'
        >
            <label>Name</label>
            <input type='text' name='name' value={user.name} placeholder='please input a name' onChange={handleInputChange}/>
            <label>Username</label>
            <input type='text' name='username' value={user.username} placeholder='please input a username' onChange={handleInputChange}/>
            <button>Update user</button> <button className='button muted-button'
                    onClick={() => {
                        props.setEditing(false)
                    }}
            >Cancel</button>
        </form>
    )
};
export default EditUserForm;