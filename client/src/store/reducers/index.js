import { combineReducers } from 'redux';

import authReducer from './authReducer'
import cardsReducer from './cardsReducer'
import boardsReducer from './boardsReducer';
import columnsReducer from './columnsReducer'

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  columns: columnsReducer,
  cards: cardsReducer
});