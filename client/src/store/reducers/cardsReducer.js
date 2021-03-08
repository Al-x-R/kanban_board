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

    case ACTION_TYPE.UPDATE_CARD_REQUEST: {
      const { cardId, values } = payload;
      const cardIndex = draftState.cards.findIndex(card => card.id === cardId);
      if (cardIndex !== -1) {
        draftState.cards[cardIndex] = {
          ...draftState.cards[cardIndex],
          ...values,
        };
      }
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.REMOVE_CARD_REQUEST: {
      const { cardId } = payload;
      draftState.cards = draftState.cards.filter(card => card.id !== cardId);
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.CREATE_CARD_SUCCESS: {
      const { data } = payload;
      draftState.cards.push(data);
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.UPDATE_CARD_SUCCESS:
    case ACTION_TYPE.REMOVE_CARD_SUCCESS:{
      draftState.isLoading = false
    }
      break

    case ACTION_TYPE.GET_CARDS_SUCCESS: {
      const { data } = payload;
      draftState.cards = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_CARDS_ERROR:
    case ACTION_TYPE.CREATE_CARD_ERROR:
    case ACTION_TYPE.UPDATE_CARD_ERROR:
    case ACTION_TYPE.REMOVE_CARD_ERROR:{
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.MOVE_CARD_IN_COLUMN: {
      const {dragIndex, hoverIndex} = payload
      const drag = draftState.cards[dragIndex]
      const hover = draftState.cards[hoverIndex]
      const prevArray = draftState.cards.splice(hover, 1, drag)
      draftState.cards = draftState.cards.splice(drag, 1, prevArray)
    }
    break
  }
}, initialState);

export default cardsReducer;
