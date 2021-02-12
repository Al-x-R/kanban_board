import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import BoardsPage from '../pages/BoardsPage/BoardsPage';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Board from '../pages/Board/Board';

export default () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path={['/login', '/register']} component={AuthPage} />
      <ProtectedRoute path='/boards' component={BoardsPage} />
      <ProtectedRoute path='/board/:id' component={Board} />
    </Switch>
  );
}