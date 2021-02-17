import { combineReducers } from 'redux';
import authReducer from './authReducer'
import boardsReducer from './boardsReducer';
import columnsReducer from './columnsReducer'
import cardsReducer from './cardsReducer'

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  columns: columnsReducer,
  cards: cardsReducer
});