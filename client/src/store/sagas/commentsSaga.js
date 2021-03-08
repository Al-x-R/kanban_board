import { put } from 'redux-saga/effects';
import CommentService from '../../services/commentService';
import * as CommentsAction from '../actions/commentsAction';

export function* getCommentsSaga(action) {
  try {
    const { payload: { bardId, cardId } } = action;
    const data = yield CommentService.getComments(bardId, cardId);
    yield put(CommentsAction.getCommentsSuccess(data));

  } catch (err) {
    yield put(CommentsAction.getCommentsError(err));
  }
}

export function* addCommentSaga(action) {
  try {
    const { payload: { boardId, cardId, values } } = action;
    const data = yield CommentService.addComment(boardId, cardId, values);
    yield put(CommentsAction.addCommentSuccess(data));

  } catch (err) {
    yield put(CommentsAction.addCommentError(err));
  }
}

export function* editCommentSaga(action) {
  try {
    const { payload: { commentId } } = action;
    const data = yield CommentService.editComment(commentId);
    yield put(CommentsAction.editCommentSuccess(data));

  } catch (err) {
    yield put(CommentsAction.editCommentError(err));
  }
}

export function* removeCommentSaga(action) {
  try {
    const { payload: { boardId, cardId, commentId } } = action;
    yield CommentService.removeComment(boardId, cardId, commentId);
    yield put(CommentsAction.removeCommentSuccess());

  } catch (err) {
    yield put(CommentsAction.removeCommentError(err));
  }
}
