import { put } from 'redux-saga/effects';
import * as CardAction from '../actions/cardsAction';
import CardService from '../../services/cardService';

export function* createCardSaga(action) {
  try {
    const { payload: { values, boardId } } = action;
    const data = yield CardService.createCard(boardId, values);
    console.log(data)
    yield put(CardAction.createCardSuccess(data));

  } catch (err) {
    yield put(CardAction.createCardError(err));
  }
}

export function* getCardsSaga(action) {
  try {
    const { payload: { boardId } } = action;
    const data = yield CardService.getCards(boardId);
    yield put(CardAction.getCardsSuccess(data));

  } catch (err) {
    yield put(CardAction.getCardsError(err));
  }
}

export function* updateCardSaga(action) {
  try {
    const { payload: { boardId, cardId, values } } = action;
    const data = yield CardService.updateCard(boardId, cardId, values);
    yield put(CardAction.updateCardSuccess());

  } catch (err) {
    yield put(CardAction.updateCardError(err));
  }
}

export function* removeCardSaga(action) {
  try {
    const { payload: { boardId, cardId } } = action;
    const data = yield CardService.removeCard(boardId, cardId);
    yield put(CardAction.removeCardSuccess(data));

  } catch (err) {
    yield put(CardAction.removeCardError(err));
  }
}
