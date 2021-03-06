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
  }
}, initialState);

export default boardsReducer;
