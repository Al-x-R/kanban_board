import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { userSelector } from '../../store/selectors';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const user = useSelector(userSelector);

  return (
    <Route {...props}
           render={(props) => (
             user
               ? <Component {...props}/>
               : <Redirect to='/login'/>
           )}
    />
  );
};

export default ProtectedRoute;