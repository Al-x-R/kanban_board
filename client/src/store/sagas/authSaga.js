import { put } from 'redux-saga/effects';
import * as AuthAction from '../actions/authAction';
import AuthService from '../../services/authService';

export function* loginSaga(action) {
  try {
    const { payload: { values } } = action;

    const data = yield AuthService.login(values);

    yield put(AuthAction.loginSuccess(data));

  } catch (err) {
    yield put(AuthAction.loginError(err));
  }
}