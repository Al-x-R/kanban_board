import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  cards: [],
  isLoading: false,
  error: null,
};

const cardsReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.CREATE_CARD_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.CREATE_CARD_SUCCESS: {
      const { card } = payload;
      draftState.cards.push(card);
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.CREATE_CARD_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.GET_CARDS_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.GET_CARDS_SUCCESS: {
      const { cards } = payload;
      draftState.cards = cards
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_CARDS_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    default:
      return initialState;
  }
});

export default cardsReducer;