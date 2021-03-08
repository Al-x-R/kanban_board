import ACTION_TYPE from '../types';

export const getCommentsRequest = (boardId,cardId) => ({
  type: ACTION_TYPE.GET_COMMENTS_REQUEST,
  payload: {
    boardId,
    cardId,
  },
});

export const getCommentsSuccess = (data) => ({
  type: ACTION_TYPE.GET_COMMENTS_SUCCESS,
  payload: {
    data,
  },
});

export const getCommentsError = (err) => ({
  type: ACTION_TYPE.GET_COMMENTS_ERROR,
  payload: {
    error: err,
  },
});

export const addCommentRequest = (boardId, cardId, values) => ({
  type: ACTION_TYPE.ADD_COMMENT_REQUEST,
  payload: {
    boardId,
    cardId,
    values
  },
});

export const addCommentSuccess = (data) => ({
  type: ACTION_TYPE.ADD_COMMENT_SUCCESS,
  payload: {
    data,
  },
});

export const addCommentError = (err) => ({
  type: ACTION_TYPE.ADD_COMMENT_ERROR,
  payload: {
    error: err,
  },
});

export const editCommentRequest = (commentId) => ({
  type: ACTION_TYPE.EDIT_COMMENT_REQUEST,
  payload: {
    commentId,
  },
});

export const editCommentSuccess = (data) => ({
  type: ACTION_TYPE.EDIT_COMMENT_SUCCESS,
  payload: {
    data,
  },
});

export const editCommentError = (err) => ({
  type: ACTION_TYPE.EDIT_COMMENT_ERROR,
  payload: {
    error: err,
  },
});

export const removeCommentRequest = (boardId, cardId, commentId) => ({
  type: ACTION_TYPE.REMOVE_COMMENT_REQUEST,
  payload: {
    boardId,
    cardId,
    commentId,
  },
});

export const removeCommentSuccess = () => ({
  type: ACTION_TYPE.REMOVE_COMMENT_SUCCESS,
});

export const removeCommentError = (err) => ({
  type: ACTION_TYPE.REMOVE_COMMENT_ERROR,
  payload: {
    error: err,
  },
});