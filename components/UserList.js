import React from 'react';
import User from './User';
import AddUser from './AddUser';

const UserList = ({users}) => (
    <ul>
        <AddUser />
        {users.map(x => <User {...x}  key={x.id} /> )}
    </ul>
)

export default UserList