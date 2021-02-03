import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
export default () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path={['/login', '/register']} component={AuthPage} />
    </Switch>
  );
}