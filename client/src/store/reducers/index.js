import { combineReducers } from 'redux';

import authReducer from './authReducer';
import cardsReducer from './cardsReducer';
import boardsReducer from './boardsReducer';
import columnsReducer from './columnsReducer';
import commentsReducer from './commentsReducer';
import activitiesReducer from './activitiesReducer';
import newBoardReducer from './newBoardReducer';
import currentBoardReducer from './currentBoardReducer';

export default combineReducers({
  auth: authReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  newBoard: newBoardReducer,
  currentBoard: currentBoardReducer,
  columns: columnsReducer,
  comment: commentsReducer,
  activities: activitiesReducer,
});
