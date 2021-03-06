import { put } from 'redux-saga/effects';
import BoardsService from '../../services/boardsService';
import * as BoardByIdAction from '../actions/currentBoardAction';

export function* getBoardByIdSaga(action) {
  try {
    const { payload: { boardId } } = action;
    const data  = yield BoardsService.getBoardById(boardId);
    yield put(BoardByIdAction.getBoardByIdSuccess(data));

  } catch (err) {
    yield put(BoardByIdAction.getBoardByIdError(err));
  }
}

export function* removeBoardByIdSaga(action) {
  try {
    const { payload: { boardId } } = action;
    yield BoardsService.removeBoardById(boardId);
    yield put(BoardByIdAction.removeBoardByIdSuccess());

  } catch (err) {
    yield put(BoardByIdAction.removeBoardByIdError(err));
  }
}
