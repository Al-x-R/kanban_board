import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../types';
import * as AuthSaga from './authSaga';

function* rootSaga() {
  yield takeLatest(ACTION_TYPE.LOGIN_REQUEST, AuthSaga.loginSaga);
  yield takeLatest(ACTION_TYPE.LOGOUT_REQUEST, AuthSaga.logoutSaga);
  yield takeLatest(ACTION_TYPE.REGISTER_REQUEST, AuthSaga.registerSaga);
}

export default rootSaga;