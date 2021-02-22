import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPE from '../types';
import * as AuthSaga from './authSaga';
import * as BoardsSaga from './boardsSaga';
import * as BoardByIdSaga from './boardByIdSaga';
import * as ColumnsSaga from './columnsSaga';
import * as CardsSaga from './cardsSaga';

function* rootSaga() {
  yield takeLatest(ACTION_TYPE.LOGIN_REQUEST, AuthSaga.loginSaga);
  yield takeLatest(ACTION_TYPE.LOGOUT_REQUEST, AuthSaga.logoutSaga);
  yield takeLatest(ACTION_TYPE.REGISTER_REQUEST, AuthSaga.registerSaga);

  yield takeLatest(ACTION_TYPE.GET_BOARDS_REQUEST, BoardsSaga.getBoardsSaga);
  yield takeLatest(ACTION_TYPE.CREATE_BOARD_REQUEST, BoardsSaga.createBoardSaga);

  yield takeLatest(ACTION_TYPE.GET_BOARD_BY_ID_REQUEST, BoardByIdSaga.getBoardByIdSaga);
  yield takeLatest(ACTION_TYPE.REMOVE_BOARD_BY_ID_REQUEST, BoardByIdSaga.removeBoardByIdSaga);

  yield takeLatest(ACTION_TYPE.CREATE_COLUMN_REQUEST, ColumnsSaga.createColumnSaga);
  yield takeLatest(ACTION_TYPE.GET_COLUMNS_REQUEST, ColumnsSaga.getColumnsSaga);
  yield takeLatest(ACTION_TYPE.REMOVE_COLUMN_REQUEST, ColumnsSaga.removeColumnSaga);
  yield takeLatest(ACTION_TYPE.UPDATE_COLUMN_REQUEST, ColumnsSaga.updateColumnSaga);

  yield takeLatest(ACTION_TYPE.CREATE_CARD_REQUEST, CardsSaga.createCardSaga);
  yield takeLatest(ACTION_TYPE.GET_CARDS_REQUEST, CardsSaga.getCardsSaga);
}

export default rootSaga;