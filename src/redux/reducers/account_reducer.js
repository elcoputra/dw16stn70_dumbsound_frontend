import {
  LOGIN_SUCCSESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCSESS,
  REGISTER_ERROR,
  CLEAR_LOGIN_DATA,
} from '../actionTypes';

const initialState = {
  userState: {},
  isLogin: false,
  loading: false,
  clearLogin: false,
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCSESS:
    case REGISTER_SUCCSESS:
      return {
        ...state,
        loading: false,
        userState: action.payload,
        isLogin: true,
      };
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_LOGIN_DATA:
      return {
        ...state,
        userState: {},
      };

    default:
      return state;
  }
};
