import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './helper/auth/PrivateRoute.js';
import Home from './components/home/Home';
import Notification from './components/notification/Notification';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/signup" exact component={Signup} /> */}
        {/* <Route path="/signin" exact component={Signin} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/notifications" exact component={Notification} />
        {/* <PrivateRoute path="/home" exact component={Home} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
