import React, {useState} from 'react';

const AddUserForm = props => {
    const initialFormState = {id: null, name:'', username:''};
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = event => {
        const {name, value} = event.target;
        // st validation UI
        if (name === 'name') {
            if (!name) {
                setClassNameOfName('has-error');
            } else {
                setClassNameOfName('is-success');
            }
        }
        if (name === 'username') {
            if (!name) {
                setClassNameOfUsername('has-error');
            } else {
                setClassNameOfUsername('is-success');
            }
        }
        // ed validation UI

        // return object with dynamic key
        setUser({ ...user, [name]: value });
    };
    const [classNameOfName, setClassNameOfName] = useState('');
    const [classNameOfUsername, setClassNameOfUsername] = useState('');
    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.name) {
                    setClassNameOfName('has-error');
                    return;
                }
                if (!user.username) {
                    setClassNameOfUsername('has-error');
                    return;
                }
                setClassNameOfName('');
                setClassNameOfUsername('');
                props.addUser(user);
                setUser(initialFormState);
            }}
            method='post'
        >
            <label>Name</label>
            <input type='text' name='name' value={user.name} placeholder='please input a name'
                   onChange={handleInputChange} className={classNameOfName}/>
            <label>Username</label>
            <input type='text' name='username' value={user.username} placeholder='please input a username'
                   onChange={handleInputChange} className={classNameOfUsername}/>
            <button id='btn_add_new_user1' data-testid='btn_add_new_user2'>Add new user</button>
        </form>
    )
};
export default AddUserForm;