import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import './header.css';

const AppBar = () => {
  const { Header } = Layout;

  return (
    <Layout>
      <Header className="header" >
        <div className="logo" style={{color: 'white'}}>
          <Link to="/" className='img'>
            BOARDS
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" >
          <Menu.Item key="1">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/register">Register</Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>

  );
};

export default AppBar;