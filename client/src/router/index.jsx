import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import BoardsPage from '../pages/BoardsPage/BoardsPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Board from '../components/boards/Board/Board';

export default () => {
  return (
    <Switch>
      <Route path={['/login', '/register']} component={AuthPage}/>
      <ProtectedRoute exact path='/boards' component={BoardsPage}/>
      <ProtectedRoute path='/boards/:id' component={Board}/>
    </Switch>
  );
}