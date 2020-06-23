import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCSESS,
  GET_MOVIES_ERROR,
  GET_TV_REQUEST,
  GET_TV_SUCCSESS,
  GET_TV_ERROR,
  GET_DETAIL_MOVIE_SUCCSESS,
  GET_DETAIL_MOVIE_ERROR,
  GET_DETAIL_MOVIE_REQUEST,
  ADD_EPISODE_REQUEST,
  ADD_EPISODE_ERROR,
  ADD_EPISODE_SUCCSESS,
  ADD_MOVIE_SUCCSESS,
  ADD_MOVIE_ERROR,
  ADD_MOVIE_REQUEST,
} from '../actionTypes';
import { API } from '../../config/axiosConfig';
import { getDataEpisodes, addDataEpisodes } from '../actions/episode_action';

export function addDataMovie(uploadFilm, uploadEpisodes) {
  return function (dispatch) {
    dispatch({
      type: ADD_MOVIE_REQUEST,
      payload: true,
    });
    API.post('/movie', uploadFilm)
      .then((response) =>
        dispatch(
          { type: ADD_MOVIE_SUCCSESS, payload: response.data.data },
          dispatch(addDataEpisodes(response.data.data.id, uploadEpisodes)),
        ),
      )
      .catch((response) =>
        dispatch({
          type: ADD_MOVIE_ERROR,
          payload: response,
        }),
      );
  };
}

export function getDataMovie() {
  return function (dispatch) {
    dispatch({
      type: GET_MOVIES_REQUEST,
    });
    API.get('/category/1/movies')
      .then((response) => dispatch({ type: GET_MOVIES_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_MOVIES_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function getDataTv() {
  return function (dispatch) {
    dispatch({
      type: GET_TV_REQUEST,
    });
    API.get('/category/2/movies')
      .then((response) => dispatch({ type: GET_TV_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_TV_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function getDetailMovie(idMovie) {
  return function (dispatch) {
    dispatch({
      type: GET_DETAIL_MOVIE_REQUEST,
    });
    API.get('/movie/' + idMovie)
      .then((response) => dispatch({ type: GET_DETAIL_MOVIE_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_DETAIL_MOVIE_ERROR,
          payload: response.error,
        }),
      );
  };
}

export function addEpisode(movieId, dataEpisode) {
  return function (dispatch) {
    dispatch({
      type: ADD_EPISODE_REQUEST,
    });
    API.post('/episode', dataEpisode)
      .then(() => dispatch({ type: ADD_EPISODE_SUCCSESS, payload: false }))
      .then(() => dispatch(getDataEpisodes(movieId)))
      .catch((response) =>
        dispatch({
          type: ADD_EPISODE_ERROR,
          payload: response.error,
        }),
      );
  };
}
