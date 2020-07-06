import {
  LOGIN_SUCCSESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCSESS,
  REGISTER_ERROR,
  CLEAR_LOGIN_DATA,
  CLEAR_ERROR,
  CLEAR_MESSAGE,
} from '../actionTypes';

const initialState = {
  userState: {},
  isLogin: false,
  loading: false,
  clearLogin: false,
  error: '',
  errorBool: false,
  messageBool: false,
  message: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // REQUEST
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // SUCCESS
    case LOGIN_SUCCSESS:
    case REGISTER_SUCCSESS:
      return {
        ...state,
        loading: false,
        messageBool: true,
        message: action.message,
        userState: action.payload,
        isLogin: true,
      };
    // ERROR
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        errorBool: true,
      };
    // CLEAR LOGIN DATA
    case CLEAR_LOGIN_DATA:
      return {
        ...state,
        userState: {},
      };
    // CLEAR ERROR
    case CLEAR_ERROR:
      return {
        ...state,
        error: '',
        errorBool: false,
      };
    // CLEAR MESSAGE
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: '',
        messageBool: false,
      };

    default:
      return state;
  }
};
