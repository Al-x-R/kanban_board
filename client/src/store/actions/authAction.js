import ACTION_TYPE from '../types'

export const loginRequest = values => ({
  type: ACTION_TYPE.LOGIN_REQUEST,
  payload: {
    values
  }
})

export const loginSuccess = data => ({
  type: ACTION_TYPE.LOGIN_SUCCESS,
  payload: {
    data
  }
})

export const loginError = err => ({
  type: ACTION_TYPE.LOGIN_ERROR,
  payload: {
    error: err
  }
})