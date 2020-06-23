import { GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCSESS, GET_CATEGORIES_ERROR } from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function getCategories() {
  return function (dispatch) {
    dispatch({
      type: GET_CATEGORIES_REQUEST,
    });
    API.get('/categories')
      .then((response) => dispatch({ type: GET_CATEGORIES_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_CATEGORIES_ERROR,
          payload: response.error,
        }),
      );
  };
}
