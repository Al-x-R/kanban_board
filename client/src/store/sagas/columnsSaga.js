import ColumnService from '../../services/columnService';
import { put } from 'redux-saga/effects';
import * as ColumnAction from '../actions/columnsAction';

export function* createColumnSaga(action) {
  try {
    const { payload: { values } } = action;
    const column = yield ColumnService.createColumn(values);
    yield put(ColumnAction.createColumnSuccess(column));

  } catch (e) {
    yield put(ColumnAction.createColumnError(e));
  }
}

export function* getColumns(action) {
  try {
    const { payload: { id } } = action;
    const columns = yield ColumnService.getColumns(id);
    yield put(ColumnAction.getColumnsSuccess(columns));

  } catch (e) {
    yield put(ColumnAction.getColumnsError(e));
  }
}