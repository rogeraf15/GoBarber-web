import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../hooks/AuthContext';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routes: React.FC = () => (
  <AuthProvider>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/create-account" component={Signup} />
    </Switch>
  </AuthProvider>

);

export default Routes;
