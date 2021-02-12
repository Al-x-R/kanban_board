import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  boards: [],
  isLoading: false,
  error: null,
};

const boardsReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.CREATE_BOARD_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.CREATE_BOARD_SUCCESS:
      const { board } = payload;
      draftState.boards.push(board);
      draftState.isLoading = false;
      break;

    case ACTION_TYPE.CREATE_BOARD_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.GET_BOARDS_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.GET_BOARDS_SUCCESS:
      const { boards } = payload;
      draftState.boards = boards;
      draftState.isLoading = false;
      break;

    case ACTION_TYPE.GET_BOARDS_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    default:
      return initialState;
  }
});

export default boardsReducer;