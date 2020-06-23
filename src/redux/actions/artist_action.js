import {
  POST_ARTIST_ERROR,
  POST_ARTIST_REQUEST,
  POST_ARTIST_SUCCSESS,
  GET_ARTIST_ERROR,
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCSESS,
} from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function PostDataArtistAction(artistData) {
  return function (dispatch) {
    dispatch({
      type: POST_ARTIST_REQUEST,
    });
    API.post('/artist', artistData)
      .then((response) => dispatch({ type: POST_ARTIST_SUCCSESS, payload: response.data.message }))
      .catch((response) =>
        dispatch({
          type: POST_ARTIST_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function getDataArtistAction() {
  return function (dispatch) {
    dispatch({
      type: GET_ARTIST_REQUEST,
    });
    API.get('/artists')
      .then((response) => dispatch({ type: GET_ARTIST_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_ARTIST_ERROR,
          payload: response.error,
        }),
      );
  };
}
