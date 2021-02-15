import ACTION_TYPE from '../types';

export const loginRequest = values => ({
  type: ACTION_TYPE.LOGIN_REQUEST,
  payload: {
    values,
  },
});

export const loginSuccess = data => ({
  type: ACTION_TYPE.LOGIN_SUCCESS,
  payload: {
    data,
  },
});

export const loginError = err => ({
  type: ACTION_TYPE.LOGIN_ERROR,
  payload: {
    error: err,
  },
});

export const registerRequest = values => ({
  type: ACTION_TYPE.REGISTER_REQUEST,
  payload: {
    values,
  },
});

export const registerSuccess = data => ({
  type: ACTION_TYPE.REGISTER_SUCCESS,
  payload: {
    data,
  },
});

export const registerError = err => ({
  type: ACTION_TYPE.REGISTER_ERROR,
  payload: {
    error: err,
  },
});

export const logoutRequest = () => ({
  type: ACTION_TYPE.LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: ACTION_TYPE.LOGOUT_SUCCESS,
});