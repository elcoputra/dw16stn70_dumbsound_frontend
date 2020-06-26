import {
  POST_ARTIST_ERROR,
  POST_ARTIST_REQUEST,
  POST_ARTIST_SUCCSESS,
  GET_ARTIST_ERROR,
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCSESS,
  CLEAR_ERROR_ARTIST,
  CLEAR_MESSAGE_ARTIST,
  GET_ARTIST_BY_SONG_REQUEST,
  GET_ARTIST_BY_SONG_SUCCESS,
  GET_ARTIST_BY_SONG_ERROR,
  CLEAR_ARTIST_DATA_AND_MODAL,
} from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function PostDataArtistAction(artistData) {
  return function (dispatch) {
    dispatch({
      type: POST_ARTIST_REQUEST,
    });
    API.post('/artist', artistData)
      .then((response) => dispatch({ type: POST_ARTIST_SUCCSESS, payload: response.data.message }))
      .catch((error) =>
        dispatch({
          type: POST_ARTIST_ERROR,
          payload: error.response.data.error,
        }),
      );
  };
}

export function clearErrorArtist() {
  return function (dispatch) {
    {
      dispatch({ type: CLEAR_ERROR_ARTIST });
    }
  };
}
export function clearMessageArtist() {
  return function (dispatch) {
    {
      dispatch({ type: CLEAR_MESSAGE_ARTIST });
    }
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

export function getArtistBySongAction(name) {
  return function (dispatch) {
    dispatch({
      type: GET_ARTIST_BY_SONG_REQUEST,
    });
    API.get('/song/artist/' + name)
      .then((response) => dispatch({ type: GET_ARTIST_BY_SONG_SUCCESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_ARTIST_BY_SONG_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function clearModalArtistDetailAction() {
  return function (dispatch) {
    dispatch({
      type: CLEAR_ARTIST_DATA_AND_MODAL,
    });
  };
}
