import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  board: null,
  isLoading: false,
  error: null,
  isDeleted: false,
};

const currentBoardReducer = produce((draftState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.GET_BOARD_BY_ID_REQUEST: {
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_SUCCESS: {
      const { data } = payload;
      draftState.board = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.REMOVE_BOARD_BY_ID_REQUEST: {
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.REMOVE_BOARD_BY_ID_SUCCESS:
      draftState.board = null;
      draftState.isLoading = false;
      draftState.isDeleted = true;
      break;

    case ACTION_TYPE.REMOVE_BOARD_BY_ID_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;
  }

}, initialState);

export default currentBoardReducer;
