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

    case ACTION_TYPE.REMOVE_COLUMN_REQUEST: {
      const { columnId } = payload;
      draftState.columns = draftState.columns.filter(column => column.id !== columnId);
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.UPDATE_COLUMN_REQUEST: {
      const { columnId, values } = payload;
      const columnIndex = draftState.columns.findIndex(column => column.id === columnId);
      if (columnIndex !== -1) {
        draftState.columns[columnIndex] = {
          ...draftState.columns[columnIndex],
          ...values,
        };
      }
      draftState.isLoading = true;
    }
      break;

    case ACTION_TYPE.UPDATE_COLUMN_SUCCESS:{
      draftState.isLoading = false;
    }
    break

    case ACTION_TYPE.CREATE_COLUMN_SUCCESS: {
      const { data } = payload;
      draftState.columns.push(data);
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_COLUMNS_SUCCESS: {
      const { data } = payload;
      draftState.columns = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.REMOVE_COLUMN_SUCCESS: {
      const { data } = payload;
      draftState.columns = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_COLUMNS_ERROR:
    case ACTION_TYPE.CREATE_COLUMN_ERROR:
    case ACTION_TYPE.REMOVE_COLUMN_ERROR:
    case ACTION_TYPE.UPDATE_COLUMN_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;

  }
}, initialState);

export default columnsReducer;