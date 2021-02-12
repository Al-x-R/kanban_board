import { combineReducers } from 'redux';
import authReducer from './authReducer'
import boardsReducer from './boardsReducer';
import boardByIdReducer from './boardByIdReducer'

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  board: boardByIdReducer
});