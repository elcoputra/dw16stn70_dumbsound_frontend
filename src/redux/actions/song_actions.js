import { GET_SONGS_ERROR, GET_SONGS_REQUEST, GET_SONGS_SUCCSESS } from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function getDataSongsAction() {
  return function (dispatch) {
    dispatch({
      type: GET_SONGS_REQUEST,
    });
    API.get('/songs')
      .then((response) => dispatch({ type: GET_SONGS_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_SONGS_ERROR,
          payload: response.error,
        }),
      );
  };
}
