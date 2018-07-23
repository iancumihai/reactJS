import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const User = ({name, id}) => (
    <div>
    <li>
       {name}
        <Link to={`/edit/${id}`}>
            Edit
        </Link>
    </li>
    </div>
     
)
export default User;