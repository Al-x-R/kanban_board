import { put } from 'redux-saga/effects';
import * as ColumnAction from '../actions/columnsAction';
import ColumnService from '../../services/columnService';

export function* createColumnSaga(action) {
  try {
    const { payload: { boardId, values } } = action;
    const data = yield ColumnService.createColumn(boardId, values);
    yield put(ColumnAction.createColumnSuccess(data));

  } catch (e) {
    yield put(ColumnAction.createColumnError(e));
  }
}

export function* getColumnsSaga(action) {
  try {
    const { payload: { boardId } } = action;
    const data = yield ColumnService.getColumns(boardId);
    yield put(ColumnAction.getColumnsSuccess(data));

  } catch (e) {
    yield put(ColumnAction.getColumnsError(e));
  }
}

export function* removeColumnSaga(action) {
  try {
    const { payload: { boardId, columnId } } = action;
    yield ColumnService.removeColumn(boardId, columnId);
    yield put(ColumnAction.removeColumnSuccess());

  } catch (err) {
    yield put(ColumnAction.removeColumnError(err));
  }
}

export function* updateColumnSaga(action) {
  try {
    const { payload: { boardId, columnId, values } } = action;
    yield ColumnService.updateColumn(boardId, columnId, values);
    yield put(ColumnAction.updateColumnSuccess());

  } catch (err) {
    yield put(ColumnAction.updateColumnError(err));
  }
}