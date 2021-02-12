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

export const removeBoardByIdRequest = (id) => ({
  type: ACTION_TYPE.REMOVE_BOARD_BY_ID_REQUEST,
  payload: {
    id
  }
});

export const removeBoardByIdSuccess = () => ({
  type: ACTION_TYPE.REMOVE_BOARD_BY_ID_SUCCESS,
});

export const removeBoardByIdError = (err) => ({
  type: ACTION_TYPE.REMOVE_BOARD_BY_ID_ERROR,
  payload: {
    error: err,
  },
});