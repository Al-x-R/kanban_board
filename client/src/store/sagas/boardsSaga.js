import { put } from 'redux-saga/effects';
import * as BoardsAction from '../actions/boardsAction';
import BoardsService from '../../services/boardsService';

export function* createBoardSaga(action) {
  try {
    const { payload: { values } } = action;

    const board = yield BoardsService.createBoard(values);

    yield put(BoardsAction.createBoardSuccess(board));

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