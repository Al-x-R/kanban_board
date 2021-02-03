import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import '../forms.css';
import axios from 'axios'
import AuthService from '../../../services/authService';

const Login = () => {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol:{
      span: 14 ,
    }
  };

  const onFinish = (values) => {
    AuthService.login(values).then(res => console.log(res))
    // axios.post('http://localhost:3001/login', values)
    //   .then(res => {
    //     console.log('res -> ', res)
    //   })
    //   .catch(err => {
    //     console.log('err -> ', err)
    //   })
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
                 label="Email"
                 name={'email'}
                 rules={[
                   {
                     required: true,
                     message: 'Please input your email!',
                   },
                 ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name={'password'}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password className='input'/>
      </Form.Item>

      <p>Don`t have an account? <Link to='/register' style={{ textDecoration: 'none' }}>Register</Link></p>

      <Form.Item>
        <Button className='submitBtn'
                type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>

  );
};

export default Login;
