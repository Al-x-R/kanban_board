import ACTION_TYPE from '../types';

export const getBoardByIdRequest = (id) => ({
  type: ACTION_TYPE.GET_BOARD_BY_ID_REQUEST,
  payload: {
    id
  }
});

export const getBoardByIdSuccess = (board) => ({
  type: ACTION_TYPE.GET_BOARD_BY_ID_SUCCESS,
  payload: {
    board,
  },
});

export const getBoardByIdError = (err) => ({
  type: ACTION_TYPE.GET_BOARD_BY_ID_ERROR,
  payload: {
    error: err,
  },
});