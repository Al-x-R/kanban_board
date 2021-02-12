import { put } from 'redux-saga/effects';
import * as BoardByIdAction from '../actions/boardByIdAction';
import BoardsService from '../../services/boardsService';

export function* getBoardByIdSaga(action) {
  try {
    const { payload: { id } } = action;

    const board = yield BoardsService.getBoardById(id);
    console.log('saga board ', board);
    yield put(BoardByIdAction.getBoardByIdSuccess(board));

  } catch (err) {
    yield put(BoardByIdAction.getBoardByIdError(err));
  }
}