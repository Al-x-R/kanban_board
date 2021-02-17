import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Board from '../components/boards/Board/Board';
import BoardsList from '../components/boards/BoardsList/BoardsList';

export default () => {
  return (
    <Switch>
      <Route path={['/login', '/register']} component={AuthPage}/>
      <ProtectedRoute exact path='/boards' component={BoardsList}/>
      <ProtectedRoute path='/boards/:id' component={Board}/>
    </Switch>
  );
}