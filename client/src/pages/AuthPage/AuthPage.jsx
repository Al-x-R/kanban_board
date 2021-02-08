import React, { useState, useLayoutEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import Header from '../../components/Header';
import { userSelector } from '../../store/selectors';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState();
  const location = useLocation();
  const user = useSelector(userSelector);

  useLayoutEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const Form = isLogin ? Login : Register;
  const pageTitle = isLogin ? 'LOGIN TO YOUR ACCOUNT' : 'CREATE AN ACCOUNT';

  if (user) {
    return <Redirect to={'/boards'}/>;
  }

  return (
    <div>
      <Header/>
      <Typography style={{ margin: '50px auto 30px' }} variant="h5" component="h2" gutterBottom>{pageTitle}</Typography>
      <Form/>
    </div>

  );
};

export default AuthPage;
