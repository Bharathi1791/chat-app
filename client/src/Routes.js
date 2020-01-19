import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Views/Login';
import Chatroom from './Views/Chatroom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/chatroom" component={Chatroom} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
