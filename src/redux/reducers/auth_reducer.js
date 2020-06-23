import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCSESS, LOGOUT_USER } from '../actionTypes';

const initialState = {
  userState: {},
  loading: false,
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCSESS:
      return {
        ...state,
        loading: false,
        userState: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userState: {},
      };
    default:
      return state;
  }
};
