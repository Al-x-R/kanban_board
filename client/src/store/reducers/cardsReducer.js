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
    case ACTION_TYPE.GET_CARDS_REQUEST:
    case ACTION_TYPE.CREATE_CARD_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.UPDATE_COLUMN_REQUEST: {
      const { id, values } = payload;
      const cardIndex = draftState.cards.findIndex(card => card.id === id);
      if (cardIndex !== -1) {
        draftState.cards[cardIndex] = {
          ...draftState.cards[cardIndex],
          ...values,
        };
      }
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.UPDATE_CARD_SUCCESS:
    case ACTION_TYPE.CREATE_CARD_SUCCESS: {
      const { card } = payload;
      draftState.cards.push(card);
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_CARDS_SUCCESS: {
      const { cards } = payload;
      draftState.cards = cards;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_CARDS_ERROR:
    case ACTION_TYPE.CREATE_CARD_ERROR:
    case ACTION_TYPE.UPDATE_CARD_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;
  }
}, initialState);

export default cardsReducer;
