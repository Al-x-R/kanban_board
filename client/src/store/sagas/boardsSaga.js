import { put } from 'redux-saga/effects';
import * as BoardsAction from '../actions/boardsAction';
import BoardsService from '../../services/boardsService';

export function* createBoardSaga(action) {
  try {
    const { payload: { values } } = action;
    const data = yield BoardsService.createBoard(values);
    console.log('cr data',data)
    yield put(BoardsAction.createBoardSuccess(data));

  } catch (err) {
    yield put(BoardsAction.createBoardError(err));
  }
}

export function* getBoardsSaga() {
  try {
    const data = yield BoardsService.getBoards();
    yield put(BoardsAction.getBoardsSuccess(data));

  } catch (err) {
    yield put(BoardsAction.getBoardsError(err));
  }
}
