import { UPGRADE_ERROR, UPGRADE_REQUEST, UPGRADE_SUCCSESS, CLEAR_UPGRADE_MESSAGE, CLEAR_UPGRADE_ERROR } from '../actionTypes';

const initialState = {
  loading: null,
  errorUpgradeBool: false,
  errorUpgrade: '',
  messageUpgrade: '',
  messageUpgradeBool: false,
};

export const upgradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPGRADE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPGRADE_SUCCSESS:
      return {
        ...state,
        messageUpgrade: action.payload,
        messageUpgradeBool: true,
        loading: false,
      };
    case UPGRADE_ERROR:
      return {
        ...state,
        loading: false,
        errorUpgradeBool: true,
        errorUpgrade: action.payload,
      };
    case CLEAR_UPGRADE_MESSAGE:
      return {
        ...state,
        messageUpgradeBool: false,
        messageUpgrade: '',
      };
    case CLEAR_UPGRADE_ERROR:
      return {
        ...state,
        errorUpgrade: '',
        errorUpgradeBool: false,
      };
    default:
      return state;
  }
};
