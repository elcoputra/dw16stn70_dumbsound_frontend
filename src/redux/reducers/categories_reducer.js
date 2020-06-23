import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCSESS, GET_CATEGORIES_ERROR } from '../actionTypes';

const initialState = {
  categories: [],
  loading: false,
  error: '',
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCSESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
