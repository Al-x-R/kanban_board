import ACTION_TYPE from '../types';

export const createBoardRequest = (values) => ({
  type: ACTION_TYPE.CREATE_BOARD_REQUEST,
  payload: {
    values,
  },
});

export const createBoardSuccess = (data) => ({
  type: ACTION_TYPE.CREATE_BOARD_SUCCESS,
  payload: {
    data,
  },
});

export const createBoardError = (err) => ({
  type: ACTION_TYPE.CREATE_BOARD_ERROR,
  payload: {
    error: err,
  },
});

export const getBoardsRequest = () => ({
  type: ACTION_TYPE.GET_BOARDS_REQUEST,
});

export const getBoardsSuccess = (data) => ({
  type: ACTION_TYPE.GET_BOARDS_SUCCESS,
  payload: {
    data,
  },
});

export const getBoardsError = (err) => ({
  type: ACTION_TYPE.GET_BOARDS_ERROR,
  payload: {
    error: err,
  },
});
