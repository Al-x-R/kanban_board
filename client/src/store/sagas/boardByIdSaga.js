import { put } from 'redux-saga/effects';
import * as BoardByIdAction from '../actions/boardByIdAction';
import BoardsService from '../../services/boardsService';

export function* getBoardByIdSaga(action) {
  try {
    const { payload: { id } } = action;
    const board = yield BoardsService.getBoardById(id);
    yield put(BoardByIdAction.getBoardByIdSuccess(board));

  } catch (err) {
    yield put(BoardByIdAction.getBoardByIdError(err));
  }
}

export function* removeBoardByIdSaga(action) {
  try {
    const { payload: { id } } = action;
    yield BoardsService.removeBoardById(id)
    yield put(BoardByIdAction.removeBoardByIdSuccess());

  } catch (err) {
    yield put(BoardByIdAction.removeBoardByIdError(err));
  }
}