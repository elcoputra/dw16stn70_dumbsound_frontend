import { GET_TYPES_REQUEST, GET_TYPES_SUCCSESS, GET_TYPES_ERROR } from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function getDataTypesAction() {
  return function (dispatch) {
    dispatch({
      type: GET_TYPES_REQUEST,
    });
    API.get('/types')
      .then((response) => dispatch({ type: GET_TYPES_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_TYPES_ERROR,
          payload: response.error,
        }),
      );
  };
}
