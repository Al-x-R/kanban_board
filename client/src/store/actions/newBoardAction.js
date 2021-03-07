import ACTION_TYPE from '../types';

export const createBoardRequest = (values) => (
  {
    type: ACTION_TYPE.CREATE_BOARD_REQUEST,
    payload: {
      values,
    },
  }
);

export const createBoardSuccess = (data) => (
  {
    type: ACTION_TYPE.CREATE_BOARD_SUCCESS,
    payload: {
      data,
    },
  }
);

export const createBoardError = (err) => (
  {
    type: ACTION_TYPE.CREATE_BOARD_ERROR,
    payload: {
      error: err,
    },
  }
);

export const resetNewBoardReducer = () => (
  {
    type: ACTION_TYPE.RESET_NEW_BOARD_REDUCER,
  }
);
