import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

const commentsReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.ADD_COMMENT_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.ADD_COMMENT_SUCCESS: {
      const { data } = payload;
      draftState.comments.push(data);
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.ADD_COMMENT_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.GET_COMMENTS_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.GET_COMMENTS_SUCCESS: {
      const { data } = payload;
      draftState.comments = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_COMMENTS_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

    case ACTION_TYPE.REMOVE_COMMENT_REQUEST: {
      const { commentId } = payload;
      draftState.comments = draftState.comments.filter(c => c.id !== commentId);
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.REMOVE_COMMENT_SUCCESS: {
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.REMOVE_COMMENT_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

  }
}, initialState);

export default commentsReducer;