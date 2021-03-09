import * as Yup from 'yup';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { loginRequest } from '../../store/actions/authAction';

const initialValues = {
  email: 'john.doe@gmail.com',
  password: 'secret',
};

const validationSchema = Yup.object({
  email: Yup.string().trim().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();

  const paperStyle = { padding: 20, minHeight: '50vh', width: 300, margin: '0 auto' };
  const btnStyle = { margin: '35px 0' };

  const handleSubmit = useCallback(
    (values) => {
      dispatch(loginRequest(values));
    }, [dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isValidating }) => (
        <Paper style={paperStyle}>
          <Form>
            <Box component="span" m={1}>
              <Field name="email" type="email" as={TextField} label="Email"
                     helperText={<ErrorMessage name="email">
                       {msg => <span style={{ color: 'red' }}>{msg}</span>}
                     </ErrorMessage>}
                     fullWidth
              />
            </Box>
            <Box component="span" m={1}>
              <Field name="password" type="password" as={TextField} label="Password"
                     helperText={<ErrorMessage name="password">
                       {msg => <span style={{ color: 'red' }}>{msg}</span>}
                     </ErrorMessage>
                     }
                     fullWidth
              />
            </Box>
            <Box component="span" m={1}>
              <Button type="submit" disabled={isValidating}
                      color='primary' variant="contained"
                      style={btnStyle} fullWidth>Submit</Button>
            </Box>
            <Typography> Don`t have an account? <Link to='/Register'>
              Register
            </Link>
            </Typography>
          </Form>
        </Paper>
      )}
    </Formik>
  );
};

export default Login;
