import ACTION_TYPE from '../types';

export const getBoardActivitiesRequest = (boardId) => ({
  type: ACTION_TYPE.GET_BOARD_ACTIVITIES_REQUEST,
  payload: {
    boardId,
  },
});

export const getBoardActivitiesSuccess = (data) => ({
  type: ACTION_TYPE.GET_BOARD_ACTIVITIES_SUCCESS,
  payload: {
    data,
  },
});

export const getBoardActivitiesError = (err) => ({
  type: ACTION_TYPE.GET_BOARD_ACTIVITIES_ERROR,
  payload: {
    error: err,
  },
});

export const getCardActivitiesRequest = (boardId, cardId) => ({
  type: ACTION_TYPE.GET_CARD_ACTIVITIES_REQUEST,
  payload: {
    boardId,
    cardId,
  },
});

export const getCardActivitiesSuccess = (data) => ({
  type: ACTION_TYPE.GET_CARD_ACTIVITIES_SUCCESS,
  payload: {
    data,
  },
});

export const getCardActivitiesError = (err) => ({
  type: ACTION_TYPE.GET_CARD_ACTIVITIES_ERROR,
  payload: {
    error: err,
  },
});