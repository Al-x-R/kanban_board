import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { registerRequest } from '../../store/actions/authAction';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// const passwordRule = [
//   /(?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])^.{8,255}$/,
//   'Your password must be at least 8 characters, and include at least one lowercase letter, one uppercase letter, and a number. ',
// ];

const validationSchema = Yup.object({
  firstName: Yup.string().trim().required('This field is required'),
  lastName: Yup.string().trim().required('This field is required'),
  email: Yup.string().trim().email().required(),
  password: Yup.string().required(),
  // password: Yup.string().matches(...passwordRule).required(),
});

const Register = () => {
  const dispatch = useDispatch();

  const paperStyle = { padding: 20, minHeight: '50vh', width: 300, margin: "0 auto" };
  const btnstyle = { margin: '35px 0' };

  const handleSubmit = useCallback(
    (values) => {
      dispatch(registerRequest(values));
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
              <Field name="firstName" type="text" as={TextField} label="First name"
                     helperText={<ErrorMessage name="firstName">
                       {msg => <span style={{ color: 'red' }}>{msg}</span>}
                     </ErrorMessage>}
                     fullWidth
              />
            </Box>
            <Box component="span" m={1}>
              <Field name="lastName" type="text" as={TextField} label="Last name"
                     helperText={<ErrorMessage name="lastName">
                       {msg => <span style={{ color: 'red' }}>{msg}</span>}
                     </ErrorMessage>}
                     fullWidth
              />
            </Box>
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
                     </ErrorMessage>}
                     fullWidth
              />
            </Box>
            <Box component="span" m={1}>
              <Button type="submit" disabled={isValidating}
                      color='primary' variant="contained"
                      style={btnstyle} fullWidth>Submit</Button>
            </Box>
            <Typography> Already have an account? <Link to='/login'>
              Login
            </Link>
            </Typography>
          </Form>
        </Paper>
      )}
    </Formik>
  );
};

export default Register;