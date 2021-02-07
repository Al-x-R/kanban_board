import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { loginRequest } from '../../store/actions/authAction';
import { userSelector } from '../../store/selectors';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().trim().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const dispatch = useDispatch();

  const paperStyle = { padding: 20, minHeight: '50vh', width: 300, margin: "0 auto" };
  const btnstyle = { margin: '35px 0' };

  const handleSubmit = useCallback(
    (values, formikBag) => {
      dispatch(loginRequest(values));
    });

  const user = useSelector(userSelector);

  if (user) {
    return <Redirect to={'/boards'}/>;
  }


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, isSubmitting, isValidating }) => (
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
                      style={btnstyle} fullWidth>Submit</Button>
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
