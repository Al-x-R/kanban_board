import ACTION_TYPE from '../types';

export const createColumnRequest = (boardId, values) => ({
  type: ACTION_TYPE.CREATE_COLUMN_REQUEST,
  payload: {
    boardId,
    values,
  },
});

export const createColumnSuccess = (data) => ({
  type: ACTION_TYPE.CREATE_COLUMN_SUCCESS,
  payload: {
    data,
  },
});

export const createColumnError = (error) => ({
  type: ACTION_TYPE.CREATE_COLUMN_ERROR,
  payload: {
    error,
  },
});

export const getColumnsRequest = (boardId) => ({
  type: ACTION_TYPE.GET_COLUMNS_REQUEST,
  payload: {
    boardId,
  },
});

export const getColumnsSuccess = (data) => ({
  type: ACTION_TYPE.GET_COLUMNS_SUCCESS,
  payload: {
    data,
  },
});


export const getColumnsError = (error) => ({
  type: ACTION_TYPE.GET_COLUMNS_ERROR,
  payload: {
    error,
  },
});

export const removeColumnRequest = (boardId, columnId) => ({
  type: ACTION_TYPE.REMOVE_COLUMN_REQUEST,
  payload: {
    boardId,
    columnId,
  },
});

export const removeColumnSuccess = () => ({
  type: ACTION_TYPE.REMOVE_COLUMN_SUCCESS,
});

export const removeColumnError = (error) => ({
  type: ACTION_TYPE.REMOVE_COLUMN_ERROR,
  payload: {
    error,
  },
});

export const updateColumnRequest = (boardId, columnId, values) => ({
  type: ACTION_TYPE.UPDATE_COLUMN_REQUEST,
  payload: {
    boardId,
    columnId,
    values,
  },
});

export const updateColumnSuccess = (data) => ({
  type: ACTION_TYPE.UPDATE_COLUMN_SUCCESS,
  payload: {
    data,
  },
});

export const updateColumnError = (error) => ({
  type: ACTION_TYPE.UPDATE_COLUMN_ERROR,
  payload: {
    error,
  },
});