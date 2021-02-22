import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  columns: [],
  isLoading: false,
  error: null,
};

const columnsReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.CREATE_COLUMN_REQUEST:
    case ACTION_TYPE.GET_COLUMNS_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.CREATE_COLUMN_SUCCESS: {
      const { column } = payload;
      draftState.columns.push(column);
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_COLUMNS_SUCCESS: {
      const { columns } = payload;
      draftState.isLoading = false;
      draftState.columns = columns;
    }
      break;

    case ACTION_TYPE.REMOVE_COLUMN_REQUEST: {
      const { id } = payload;
      draftState.columns.filter(column => column.id !== id);
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.REMOVE_COLUMN_SUCCESS:
      draftState.isLoading = false;
      break;

    case ACTION_TYPE.GET_COLUMNS_ERROR:
    case ACTION_TYPE.CREATE_COLUMN_ERROR:
    case ACTION_TYPE.REMOVE_COLUMN_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

  }
}, initialState);

export default columnsReducer;