import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppProvider from '../hooks';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routes: React.FC = () => (
  <>
    <AppProvider>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/create-account" component={Signup} />
      </Switch>
    </AppProvider>
  </>
);

export default Routes;
