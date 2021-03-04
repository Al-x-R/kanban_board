import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  boardActivities: [],
  cardActivities: [],
  isLoading: false,
  error: null,
};

const activitiesReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.GET_BOARD_ACTIVITIES_REQUEST:
    case ACTION_TYPE.GET_CARD_ACTIVITIES_REQUEST:
      draftState.isLoading = true;
      break;

    case ACTION_TYPE.GET_BOARD_ACTIVITIES_SUCCESS: {
      const { data } = payload;
      draftState.boardActivities = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_CARD_ACTIVITIES_SUCCESS: {
      const { data } = payload;
      draftState.cardActivities = data;
      draftState.isLoading = false;
    }
      break;

    case ACTION_TYPE.GET_BOARD_ACTIVITIES_ERROR:
    case ACTION_TYPE.GET_CARD_ACTIVITIES_ERROR:{
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;
  }
}, initialState);

export default activitiesReducer;