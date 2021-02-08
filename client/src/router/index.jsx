import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import BoardsPage from '../pages/BoardsPage/BoardsPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

export default () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path={['/login', '/register']} component={AuthPage} />
      <ProtectedRoute path='/boards' component={BoardsPage} />
    </Switch>
  );
}