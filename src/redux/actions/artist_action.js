import { POST_ARTIST_ERROR, POST_ARTIST_REQUEST, POST_ARTIST_SUCCSESS } from '../actionTypes';
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
