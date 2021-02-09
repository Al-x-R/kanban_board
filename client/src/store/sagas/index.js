import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../types';
import * as AuthSaga from './authSaga';
import * as BoardsSaga from './boardsSaga'

function* rootSaga() {
  yield takeLatest(ACTION_TYPE.LOGIN_REQUEST, AuthSaga.loginSaga);
  yield takeLatest(ACTION_TYPE.LOGOUT_REQUEST, AuthSaga.logoutSaga);
  yield takeLatest(ACTION_TYPE.REGISTER_REQUEST, AuthSaga.registerSaga);

  yield takeLatest(ACTION_TYPE.GET_BOARDS_REQUEST, BoardsSaga.getBoardsSaga)
  yield takeLatest(ACTION_TYPE.CREATE_BOARD_REQUEST, BoardsSaga.createBoardSaga)
}

export default rootSaga;