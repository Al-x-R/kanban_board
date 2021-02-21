import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useLocation, Redirect } from 'react-router-dom';

import Login from '../../components/Auth/Login';
import { userSelector } from '../../store/selectors';
import Register from '../../components/Auth/Register';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState();
  const location = useLocation();
  const user = useSelector(userSelector);

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const Form = isLogin ? Login : Register;
  const pageTitle = isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT';

  if (user) {
    return <Redirect to={'/boards'}/>;
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Typography style={{ margin: '50px auto 30px' }} variant="h5" component="h2" gutterBottom>{pageTitle}</Typography>
      <Form/>
    </div>
  );
};

export default AuthPage;
