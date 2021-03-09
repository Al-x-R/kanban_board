import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import AuthPage from './pages/AuthPage/AuthPage';
import Board from './components/Board/Board';
import BoardsList from './components/Board/BoardsList';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <ProtectedRoute exact path='/' component={BoardsList}/>
          <ProtectedRoute path='/boards/:boardId' component={Board}/>
          <Route path={['/login', '/register']} component={AuthPage}/>
        </Switch>
      </Router>
  );
}

export default App;
