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
  GET_SONGS_BY_ARTIST_REQUEST,
  GET_SONGS_BY_ARTIST_SUCCESS,
  GET_SONGS_BY_ARTIST_ERROR,
  DELETE_SONGS_REQUEST,
  DELETE_SONGS_SUCCSESS,
  DELETE_SONGS_ERROR,
  CLEAR_DELETE_SONG_MESSAGE,
  CLEAR_DELETE_SONG_ERROR,
  OPEN_MODAL_UPDATE_SONG,
  CLOSE_MODAL_UPDATE_SONG,
  UPDATE_SONGS_REQUEST,
  UPDATE_SONGS_SUCCSESS,
  UPDATE_SONGS_ERROR,
  SEARCH_SONGS_REQUEST,
  SEARCH_SONGS_SUCCESS,
  SEARCH_SONGS_ERROR,
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
    dispatch({ type: CLEAR_ERROR_ADD_SONG });
  };
}

export function getDataSongsAction() {
  return function (dispatch) {
    dispatch({
      type: GET_SONGS_REQUEST,
    });
    API.get('/songs')
      .then((response) => dispatch({ type: GET_SONGS_SUCCSESS, payload: response.data.data, messageBool: false }))
      .catch((response) =>
        dispatch({
          type: GET_SONGS_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function getSongsByArtistAction(id) {
  return function (dispatch) {
    dispatch({
      type: GET_SONGS_BY_ARTIST_REQUEST,
    });
    API.get('artist/' + id + '/songs')
      .then((response) => dispatch({ type: GET_SONGS_BY_ARTIST_SUCCESS, payload: response.data.data }))
      .catch((error) =>
        dispatch({
          type: GET_SONGS_BY_ARTIST_ERROR,
          payload: error.response,
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

// Delete song
export function deleteSongAction(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_SONGS_REQUEST,
      });
      const response = await API.delete('/song/' + id);
      dispatch({
        type: DELETE_SONGS_SUCCSESS,
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SONGS_ERROR,
        payload: error.response.data.error,
      });
    }
  };
}

export function clearMessageDeleteSongAction() {
  return function (dispatch) {
    dispatch({ type: CLEAR_DELETE_SONG_MESSAGE });
  };
}

export function clearErrorDeleteSongAction() {
  return function (dispatch) {
    dispatch({ type: CLEAR_DELETE_SONG_ERROR });
  };
}

// update + modal update
export function openModalSongUpdateAction(id, title, artist, year, thumbnailLink, musicLink) {
  return function (dispatch) {
    dispatch({
      type: OPEN_MODAL_UPDATE_SONG,
      payload: { id: id, title: title, artist: artist, year: year, thumbnailLink: thumbnailLink, musicLink: musicLink },
    });
  };
}
export function closeModalSongUpdateAction() {
  return function (dispatch) {
    dispatch({ type: CLOSE_MODAL_UPDATE_SONG });
  };
}

export function updateSongAction(id, data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_SONGS_REQUEST,
      });
      const response = await API.patch('/song/' + id, data);
      dispatch({
        type: UPDATE_SONGS_SUCCSESS,
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SONGS_ERROR,
        payload: error.response.data.error,
      });
    }
  };
}
export function searchSongsAction(search) {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_SONGS_REQUEST,
      });
      const searchData = { search: search };
      console.log(searchData);
      const response = await API.post('/song/searches/', searchData);
      dispatch({ type: SEARCH_SONGS_SUCCESS, payload: response.data.data, message: response.data.message, messageBool: true });
    } catch (error) {
      dispatch({
        type: SEARCH_SONGS_ERROR,
        payload: error.response.data.error,
      });
    }
  };
}
