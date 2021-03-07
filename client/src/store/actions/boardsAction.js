import ACTION_TYPE from '../types';


export const getBoardsRequest = () => (
  {
    type: ACTION_TYPE.GET_BOARDS_REQUEST,
  }
);

export const getBoardsSuccess = (data) => (
  {
    type: ACTION_TYPE.GET_BOARDS_SUCCESS,
    payload: {
      data,
    },
  }
);

export const getBoardsError = (err) => (
  {
    type: ACTION_TYPE.GET_BOARDS_ERROR,
    payload: {
      error: err,
    },
  }
);
