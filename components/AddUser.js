import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import { Redirect} from 'react-router-dom'

const AddUser = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          let user = {id: this.getId.value, name: this.getName.value };
          dispatch(addUser(user));
        }}
      >
        <input type = "text" name = "id" ref={(id)=>this.getId = id} placeholder = "ID"/>
        <input type = "text" name = "name" ref={(name)=>this.getName = name} placeholder = "Name" />
        <button type="submit">
          Add User
        </button>
      </form>
    </div>
  )
}
export default connect()(AddUser);