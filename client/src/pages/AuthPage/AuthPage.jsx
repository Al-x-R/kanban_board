import React, { useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import AppBar from '../../components/AppBar/AppBar';
import Login from '../../components/forms/Login/Login';
import Register from '../../components/forms/Register/Register';
import MatLog from '../../components/forms/Login/MaterialLogin'

const AuthPage = () => {
  const { Content, Footer } = Layout;
  const [isLogin, setIsLogin] = useState();
  const location = useLocation();

  useLayoutEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location.pathname]);

  const Form =  isLogin ? Login : Register

  return (
    <Layout>
      <AppBar/>
      <Content style={{
        margin: '24px 16px',
        paddingTop: 50,
        minHeight: 500,
      }}>
        AUTH PAGE
        <Row >
          <Col span={12} offset={5}><Form/></Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AuthPage;
