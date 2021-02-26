import { put } from 'redux-saga/effects';
import * as CardAction from '../actions/cardsAction';
import CardService from '../../services/cardService';

export function* createCardSaga(action) {
  try {
    const { payload: { values } } = action;
    const card = yield CardService.createCard(values);
    yield put(CardAction.createCardSuccess(card));

  } catch (err) {
    yield put(CardAction.createCardError(err));
  }
}

export function* getCardsSaga(action) {
  try {
    const { payload: { id } } = action;
    const cards = yield CardService.getCards(id);
    yield put(CardAction.getCardsSuccess(cards));

  } catch (err) {
    yield put(CardAction.getCardsError(err));
  }
}

export function* updateCardSaga(action) {
  try {
    const { payload: { id, values } } = action;
    const card = yield CardService.updateCard(id, values);
    yield put(CardAction.updateCardSuccess(card));

  } catch (err) {
    yield put(CardAction.updateCardError(err));
  }
}