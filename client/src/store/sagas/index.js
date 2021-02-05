import { takeLatest, takeLeading, takeEvery } from 'redux-saga/effects';
import ACTION_TYPE from '../types';
import * as AuthSaga from './authSaga';

function* rootSaga() {
  yield takeLatest(ACTION_TYPE.LOGIN_REQUEST, AuthSaga.loginSaga);
}

export default rootSaga;