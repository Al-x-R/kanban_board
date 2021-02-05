import produce from 'immer';
import ACTION_TYPE from '../types';

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  error: null,
};

const authReducer = produce((draftState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.LOGIN_REQUEST:
      draftState.isLoading = true;
      break;
    case ACTION_TYPE.LOGIN_SUCCESS: {
      const { data: { user, token } } = payload;
      console.log(payload);
      draftState.user = user;
      draftState.token = token;
      draftState.isLoading = false;
    }
      break;
    case ACTION_TYPE.LOGIN_ERROR: {
      const { error } = payload;
      draftState.isLoading = false;
      draftState.error = error;
    }
      break;
    default:
      return initialState;
  }
});

export default authReducer;