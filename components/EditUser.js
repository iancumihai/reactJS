import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditUser extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const name = this.getName.value;
  const data = {
      id : this.props.match.params.id,
      name : name
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.match.params.id, data: data })
}
log = () => {
    this.props.dispatch({type:'EDIT', id: this.props.match.params.id})
}
render() {
return (
<div>
  <h3>{this.props.match.params.id}</h3>
</div>
);
}
}
export default connect()(EditUser);