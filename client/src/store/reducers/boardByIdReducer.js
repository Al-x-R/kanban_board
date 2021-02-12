import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  board: {},
  isLoading: false,
  error: null,
};

const boardByIdReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.GET_BOARD_BY_ID_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_SUCCESS:
      const { board } = payload;
      draftState.board = board;
      draftState.isLoading = false;
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_ERROR:
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
      break;

    default:
      return initialState;
  }
});

export default boardByIdReducer;