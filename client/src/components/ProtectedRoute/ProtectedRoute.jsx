import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { userSelector } from '../../store/selectors';

const ProtectedRoute = (props) => {
  const user = useSelector(userSelector);

  return (
    user
    ?
    <Route {...props} />
    :
    <Redirect to='/login' />
  );
};

export default ProtectedRoute;
