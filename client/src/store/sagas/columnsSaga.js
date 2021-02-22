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

export function* getColumnsSaga(action) {
  try {
    const { payload: { id } } = action;
    const columns = yield ColumnService.getColumns(id);
    yield put(ColumnAction.getColumnsSuccess(columns));

  } catch (e) {
    yield put(ColumnAction.getColumnsError(e));
  }
}

export function* removeColumnSaga(action) {
  try {
    const { payload: { id } } = action;
    yield ColumnService.removeColumn(id);
    yield put(ColumnAction.removeColumnSuccess());

  } catch (err) {
    yield put(ColumnAction.removeColumnError(err));
  }
}

export function* updateColumnSaga(action) {
  try {
    const { payload: { id, values } } = action;
    const column = yield ColumnService.updateColumn(id,  values );
    yield put(ColumnAction.updateColumnSuccess(column));

  } catch (err) {
    yield put(ColumnAction.updateColumnError(err));
  }
}