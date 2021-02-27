import ACTION_TYPE from '../types';

export const getBoardByIdRequest = (boardId) => ({
  type: ACTION_TYPE.GET_BOARD_BY_ID_REQUEST,
  payload: {
    boardId,
  },
});

export const getBoardByIdSuccess = (data) => ({
  type: ACTION_TYPE.GET_BOARD_BY_ID_SUCCESS,
  payload: {
    data,
  },
});

export const getBoardByIdError = (err) => ({
  type: ACTION_TYPE.GET_BOARD_BY_ID_ERROR,
  payload: {
    error: err,
  },
});

export const removeBoardByIdRequest = (boardId) => ({
  type: ACTION_TYPE.REMOVE_BOARD_BY_ID_REQUEST,
  payload: {
    boardId,
  },
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