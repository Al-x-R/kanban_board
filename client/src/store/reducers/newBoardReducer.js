import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  board: null,
  isLoading: false,
  error: null,
};

const currentBoardReducer = produce((draftState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.CREATE_BOARD_REQUEST:
      draftState.isLoading = true;
      break;
    case ACTION_TYPE.CREATE_BOARD_SUCCESS: {
      const { data } = payload;
      draftState.board = data;
      draftState.isLoading = false;
    }
      break;
    case ACTION_TYPE.CREATE_BOARD_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;
    case ACTION_TYPE.RESET_NEW_BOARD_REDUCER:
      draftState.board = null;
      draftState.error = null;
      draftState.isLoading = false;
  }
}, initialState);

export default currentBoardReducer;
