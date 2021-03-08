import { put } from 'redux-saga/effects';
import ActivitiesService from '../../services/activitiesService';
import * as ActivitiesAction from '../actions/activitiesAction';

export function* getBoardActivities(action) {
  try {
    const { payload: { boardId } } = action;
    const data = yield ActivitiesService.getBoardActivities(boardId);
    yield put(ActivitiesAction.getBoardActivitiesSuccess(data));

  } catch (err) {
    yield put(ActivitiesAction.getBoardActivitiesError(err));
  }
}

export function* getCardActivities(action) {
  try {
    const { payload: { boardId, cardId } } = action;
    const data = yield ActivitiesService.getCardActivities(boardId, cardId);
    yield put(ActivitiesAction.getCardActivitiesSuccess(data));

  } catch (err) {
    yield put(ActivitiesAction.getCardActivitiesError(err));
  }
}