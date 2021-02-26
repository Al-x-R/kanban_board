import ACTION_TYPE from '../types';

export const createCardRequest = (values) => ({
  type: ACTION_TYPE.CREATE_CARD_REQUEST,
  payload: {
    values,
  },
});

export const createCardSuccess = (card) => ({
  type: ACTION_TYPE.CREATE_CARD_SUCCESS,
  payload: {
    card,
  },
});

export const createCardError = (err) => ({
  type: ACTION_TYPE.CREATE_CARD_ERROR,
  payload: {
    error: err,
  },
});

export const getCardsRequest = (id) => ({
  type: ACTION_TYPE.GET_CARDS_REQUEST,
  payload: {
    id,
  },
});

export const getCardsSuccess = (cards) => ({
  type: ACTION_TYPE.GET_CARDS_SUCCESS,
  payload: {
    cards,
  },
});

export const getCardsError = (err) => ({
  type: ACTION_TYPE.GET_CARDS_ERROR,
  payload: {
    error: err,
  },
});

export const updateCardRequest = (id, values) => ({
  type: ACTION_TYPE.UPDATE_CARD_REQUEST,
  payload: {
    id,
    values,
  },
});

export const updateCardSuccess = (card) => ({
  type: ACTION_TYPE.UPDATE_CARD_SUCCESS,
  payload: {
    card,
  },
});

export const updateCardError = (err) => ({
  type: ACTION_TYPE.UPDATE_CARD_ERROR,
  payload: {
    error: err,
  },
});