import ACTION_TYPE from '../types';
import * as AuthSaga from './authSaga';
import * as CardsSaga from './cardsSaga';
import * as BoardsSaga from './boardsSaga';
import * as ColumnsSaga from './columnsSaga';
import { takeLatest } from 'redux-saga/effects';
import * as BoardByIdSaga from './boardByIdSaga';
import * as ActivitiesSaga from './activitiesSaga'

function* rootSaga() {
  /**
   * AUTH SAGAS
   */
  yield takeLatest(ACTION_TYPE.LOGIN_REQUEST, AuthSaga.loginSaga);
  yield takeLatest(ACTION_TYPE.LOGOUT_REQUEST, AuthSaga.logoutSaga);
  yield takeLatest(ACTION_TYPE.REGISTER_REQUEST, AuthSaga.registerSaga);

  /**
   * ALL BOARDS SAGAS
   */
  yield takeLatest(ACTION_TYPE.GET_BOARDS_REQUEST, BoardsSaga.getBoardsSaga);

  /**
   * NEW BOARD SAGAS
   */
  yield takeLatest(ACTION_TYPE.CREATE_BOARD_REQUEST, BoardsSaga.createBoardSaga);

  /**
   * CURRENT BOARD SAGAS
   */
  yield takeLatest(ACTION_TYPE.GET_BOARD_BY_ID_REQUEST, BoardByIdSaga.getBoardByIdSaga);
  yield takeLatest(ACTION_TYPE.REMOVE_BOARD_BY_ID_REQUEST, BoardByIdSaga.removeBoardByIdSaga);

  yield takeLatest(ACTION_TYPE.GET_COLUMNS_REQUEST, ColumnsSaga.getColumnsSaga);
  yield takeLatest(ACTION_TYPE.CREATE_COLUMN_REQUEST, ColumnsSaga.createColumnSaga);
  yield takeLatest(ACTION_TYPE.REMOVE_COLUMN_REQUEST, ColumnsSaga.removeColumnSaga);
  yield takeLatest(ACTION_TYPE.UPDATE_COLUMN_REQUEST, ColumnsSaga.updateColumnSaga);

  yield takeLatest(ACTION_TYPE.GET_CARDS_REQUEST, CardsSaga.getCardsSaga);
  yield takeLatest(ACTION_TYPE.CREATE_CARD_REQUEST, CardsSaga.createCardSaga);
  yield takeLatest(ACTION_TYPE.UPDATE_CARD_REQUEST, CardsSaga.updateCardSaga);
  yield takeLatest(ACTION_TYPE.REMOVE_CARD_REQUEST, CardsSaga.removeCardSaga);

  yield takeLatest(ACTION_TYPE.GET_CARD_ACTIVITIES_REQUEST, ActivitiesSaga.getCardActivities)
  yield takeLatest(ACTION_TYPE.GET_BOARD_ACTIVITIES_REQUEST, ActivitiesSaga.getBoardActivities)
}

export default rootSaga;
