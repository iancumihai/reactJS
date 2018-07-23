import React from 'react';
import VisibleUserList from '../containers/VisibleUserList';
import {BrowserRouter} from 'react-router-dom'
import {NavLink, Route, Switch} from 'react-router-dom'
import EditUser from './EditUser';
import AddUser from './AddUser'

const App = () => (
  <BrowserRouter>
    <div>
        <Route exact={true} path="/" component={VisibleUserList}/>
        <Route path="/edit/:id" component={EditUser}/>
    </div>
  </BrowserRouter>
)
export default App