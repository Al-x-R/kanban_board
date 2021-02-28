import ACTION_TYPE from '../types';

export const createCardRequest = (boardId, values) => ({
    type: ACTION_TYPE.CREATE_CARD_REQUEST,
    payload: {
      values,
      boardId,
    },
  }
);

export const createCardSuccess = (data) => ({
    type: ACTION_TYPE.CREATE_CARD_SUCCESS,
    payload: {
      data,
    },
  }
);

export const createCardError = (err) => ({
    type: ACTION_TYPE.CREATE_CARD_ERROR,
    payload: {
      error: err,
    },
  }
);

export const getCardsRequest = (boardId) => ({
    type: ACTION_TYPE.GET_CARDS_REQUEST,
    payload: {
      boardId,
    },
  }
);

export const getCardsSuccess = (data) => ({
    type: ACTION_TYPE.GET_CARDS_SUCCESS,
    payload: {
      data,
    },
  }
);

export const getCardsError = (err) => ({
    type: ACTION_TYPE.GET_CARDS_ERROR,
    payload: {
      error: err,
    },
  }
);

export const updateCardRequest = (boardId, cardId, values) => ({
    type: ACTION_TYPE.UPDATE_CARD_REQUEST,
    payload: {
      boardId,
      cardId,
      values,
    },
  }
);

export const updateCardSuccess = (data) => ({
    type: ACTION_TYPE.UPDATE_CARD_SUCCESS,
    payload: {
      data,
    },
  }
);

export const updateCardError = (err) => ({
    type: ACTION_TYPE.UPDATE_CARD_ERROR,
    payload: {
      error: err,
    },
  }
);

export const removeCardRequest = (boardId, cardId) => ({
    type: ACTION_TYPE.REMOVE_CARD_REQUEST,
    payload: {
      boardId,
      cardId,
    },
  }
);

export const removeCardSuccess = () => ({
    type: ACTION_TYPE.REMOVE_CARD_SUCCESS,
  }
);

export const removeCardError = (err) => ({
    type: ACTION_TYPE.REMOVE_CARD_ERROR,
    payload: {
      error: err,
    },
  }
);
