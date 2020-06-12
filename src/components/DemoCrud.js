// React Hooks State
import React, {useState, Fragment} from 'react';
import UserTable from "../components/tables/UserTable";
import AddUserForm from "../components/forms/AddUserForm";
import EditUserForm from "../components/forms/EditUserForm";
import {UserData} from '../fakers/MockDataFaker';
const DemoCrud = () => {
  const userData = UserData;
  const [users, setUsers] = useState(userData);
  const addUser = user => {
    user.id = users.length + 1;

    // return array
    setUsers([...users, user]);
  };
  const [editing,setEditing] = useState(false);
  const initialFormState = {id:null, name:'', username:''};
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const editRow = user => {
    console.log('editRow');
    setEditing(true);
    setCurrentUser({id: user.id, name: user.name, username: user.username});
  };
  const updateUser = (id, updateUser) => {
      setEditing(false);
      setUsers(users.map(
          user => (
              user.id === id ? updateUser : user
          )
      ));
  };
  const deleteUser = id => {
    if (window.confirm("Do you really want to delete?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };
  return (
    <Fragment>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
              </div>
          ) : (
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )}
        </div>
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </Fragment>
  );
};

export default DemoCrud;
