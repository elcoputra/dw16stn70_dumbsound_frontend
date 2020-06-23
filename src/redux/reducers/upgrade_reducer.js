import { UPGRADE_ERROR, UPGRADE_REQUEST, UPGRADE_SUCCSESS } from '../actionTypes';

const initialState = {
  loading: null,
  error: '',
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
        loading: action.payload,
      };
    case UPGRADE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
