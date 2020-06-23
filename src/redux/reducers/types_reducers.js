import { GET_TYPES_REQUEST, GET_TYPES_SUCCSESS, GET_TYPES_ERROR } from '../actionTypes';

const initialstateTypes = {
  types: [],
  loadingTypes: false,
  errorTypes: '',
};

export const getDataTypesReducer = (state = initialstateTypes, action) => {
  switch (action.type) {
    case GET_TYPES_REQUEST:
      return {
        ...state,
        loadingTypes: true,
      };
    case GET_TYPES_SUCCSESS:
      return {
        ...state,
        loadingTypes: false,
        types: action.payload,
      };
    case GET_TYPES_ERROR:
      return {
        ...state,
        loadingTypes: false,
        errorTypes: action.payload,
      };
    default:
      return state;
  }
};
