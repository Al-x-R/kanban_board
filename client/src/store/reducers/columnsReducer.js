import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  columns: [],
  column: {},
  isLoading: false,
  error: null,
};

const columnsReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.CREATE_COLUMN_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.CREATE_COLUMN_SUCCESS: {
      const { column } = payload;
      draftState.columns.push(column);
      draftState.column = column;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.CREATE_COLUMN_ERROR: {
      const { error } = payload;
      draftState.error = error;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_COLUMNS_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.GET_COLUMNS_SUCCESS: {
      const { columns } = payload;
      draftState.columns = columns;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_COLUMNS_ERROR:
      const { error } = payload;
      draftState.error = error;
      draftState.isLoading = false;
      break;

    default:
      return initialState;
  }
});

export default columnsReducer;