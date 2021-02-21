import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  boards: [],
  board: {},
  isLoading: false,
  error: null,
};

const boardsReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.CREATE_BOARD_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.CREATE_BOARD_SUCCESS: {
      const { board } = payload;
      draftState.boards.push(board);
      draftState.isLoading = false;
    }
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

    case ACTION_TYPE.GET_BOARDS_SUCCESS: {
      const { boards } = payload;
      draftState.boards = boards;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_BOARDS_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_SUCCESS: {
      const { board } = payload;
      draftState.board = board;
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
      const { id } = payload;
      draftState.boards.filter(board => board.id !== id);
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.REMOVE_BOARD_BY_ID_SUCCESS:
      draftState.isLoading = false;
      break;

    case ACTION_TYPE.REMOVE_BOARD_BY_ID_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;
  }
}, initialState);

export default boardsReducer;
