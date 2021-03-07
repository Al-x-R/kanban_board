import { combineReducers } from 'redux';

import authReducer from './authReducer';
import cardsReducer from './cardsReducer';
import boardsReducer from './boardsReducer';
import columnsReducer from './columnsReducer';
import activitiesReducer from './activitiesReducer';
import newBoardReducer from './newBoardReducer';
import currentBoardReducer from './currentBoardReducer';

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  newBoard: newBoardReducer,
  currentBoard: currentBoardReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  activities: activitiesReducer,
});
