import {
  GET_SONGS_ERROR,
  GET_SONGS_REQUEST,
  GET_SONGS_SUCCSESS,
  POST_SONGS_REQUEST,
  POST_SONGS_SUCCSESS,
  POST_SONGS_ERROR,
  GET_DETAIL_SONG_ERROR,
  GET_DETAIL_SONG_REQUEST,
  GET_DETAIL_SONG_SUCCSESS,
  CLEAR_DETAIL_SONG_SUCCSESS,
  CLEAR_ERROR_ADD_SONG,
  CLEAR_MESSAGE_ADD_SONG,
} from '../actionTypes';
import { API } from '../../config/axiosConfig';

// ADD SONG //
export function postDataSongsAction(dataSong) {
  return function (dispatch) {
    dispatch({
      type: POST_SONGS_REQUEST,
    });
    API.post('/song', dataSong)
      .then((response) => dispatch({ type: POST_SONGS_SUCCSESS, payload: response.data.message }))
      .catch((error) =>
        dispatch({
          type: POST_SONGS_ERROR,
          payload: error.response.data.error,
        }),
      );
  };
}

export function clearMessageAddSong() {
  return function (dispatch) {
    {
      dispatch({ type: CLEAR_MESSAGE_ADD_SONG });
    }
  };
}
export function clearErrorAddSong() {
  return function (dispatch) {
    {
      dispatch({ type: CLEAR_ERROR_ADD_SONG });
    }
  };
}

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

export function getDetailSongAction(id) {
  return function (dispatch) {
    dispatch({
      type: GET_DETAIL_SONG_REQUEST,
    });
    API.get('/song/' + id)
      .then((response) => dispatch({ type: GET_DETAIL_SONG_SUCCSESS, id: response.data.data.id, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_DETAIL_SONG_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function clearPlaylist(id) {
  return function (dispatch) {
    dispatch({
      type: CLEAR_DETAIL_SONG_SUCCSESS,
    });
  };
}
