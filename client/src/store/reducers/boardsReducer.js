import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  boards: [],
  currentBoard: null,
  currentBoardIndex: null,
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
      const { data } = payload;
      draftState.currentBoardIndex = draftState.boards.length;
      draftState.boards.push(data);
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
      const { data } = payload;
      draftState.boards = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_BOARDS_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_REQUEST: {
      const { boardId } = payload;
      draftState.currentBoardIndex = draftState.boards.findIndex(b => b.id === boardId)
      draftState.boards = draftState.boards.filter(board => board.id === boardId);
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.GET_BOARD_BY_ID_SUCCESS: {
      const { data } = payload;
      draftState.currentBoard = data;
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
      const { boardId } = payload;
      draftState.boards = draftState.boards.filter(b => b.id !== boardId)
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
