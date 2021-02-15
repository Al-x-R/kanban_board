import ACTION_TYPE from '../types';

export const createColumnRequest = (values) => ({
  type: ACTION_TYPE.CREATE_COLUMN_REQUEST,
  payload: {
    values,
  },
});

export const createColumnSuccess = (column) => ({
  type: ACTION_TYPE.CREATE_COLUMN_SUCCESS,
  payload: {
    column,
  },
});

export const createColumnError = (error) => ({
  type: ACTION_TYPE.CREATE_COLUMN_ERROR,
  payload: {
    error,
  },
});

export const getColumnsRequest = (id) => ({
  type: ACTION_TYPE.GET_COLUMNS_REQUEST,
  payload: {
    id,
  },
});

export const getColumnsSuccess = (columns) => ({
  type: ACTION_TYPE.GET_COLUMNS_REQUEST,
  payload: {
    columns,
  },
});

export const getColumnsError = (error) => ({
  type: ACTION_TYPE.GET_COLUMNS_REQUEST,
  payload: {
    error,
  },
});