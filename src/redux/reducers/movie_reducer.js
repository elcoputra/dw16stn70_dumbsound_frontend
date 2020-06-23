import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCSESS,
  GET_MOVIES_ERROR,
  GET_TV_REQUEST,
  GET_TV_SUCCSESS,
  GET_TV_ERROR,
  GET_DETAIL_MOVIE_REQUEST,
  GET_DETAIL_MOVIE_SUCCSESS,
  GET_DETAIL_MOVIE_ERROR,
  ADD_EPISODE_REQUEST,
  ADD_EPISODE_ERROR,
  ADD_EPISODE_SUCCSESS,
  ADD_MOVIE_SUCCSESS,
  ADD_MOVIE_ERROR,
  ADD_MOVIE_REQUEST,
} from '../actionTypes';

const initialStateAddMovie = {
  dataMovie: {},
  loading: false,
  error: '',
};

export const addMovieReducer = (state = initialStateAddMovie, action) => {
  switch (action.type) {
    case ADD_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_MOVIE_SUCCSESS:
      return {
        ...state,
        loading: false,
        dataMovie: action.payload,
      };
    case ADD_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialStateMovie = {
  dataMovies: [],
  loading: false,
  error: '',
};

export const movieReducer = (state = initialStateMovie, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCSESS:
      return {
        ...state,
        loading: false,
        dataMovies: action.payload,
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialStateTV = {
  dataTvSeries: [],
  loadingTV: false,
  errorTV: '',
};

export const tvReducer = (state = initialStateTV, action) => {
  switch (action.type) {
    case GET_TV_REQUEST:
      return {
        ...state,
        loadingTV: true,
      };
    case GET_TV_SUCCSESS:
      return {
        ...state,
        loadingTV: false,
        dataTvSeries: action.payload,
      };
    case GET_TV_ERROR:
      return {
        ...state,
        loadingTV: false,
        errorTV: action.payload,
      };
    default:
      return state;
  }
};

const initialStateDetailMovie = {
  dataDetailMovie: [],
  loadingDetailMovie: false,
  errorDetailMovie: '',
};

export const detailMovieReducer = (state = initialStateDetailMovie, action) => {
  switch (action.type) {
    case GET_DETAIL_MOVIE_REQUEST:
      return {
        ...state,
        loadingDetailMovie: true,
      };
    case GET_DETAIL_MOVIE_SUCCSESS:
      return {
        ...state,
        loadingDetailMovie: false,
        dataDetailMovie: action.payload,
      };
    case GET_DETAIL_MOVIE_ERROR:
      return {
        ...state,
        loadingTV: false,
        errorDetailMovie: action.payload,
      };
    default:
      return state;
  }
};

const initialStateAddEpisode = {
  loadingAddEpisode: false,
  errorAddEpisode: '',
};

export const addEpisode = (state = initialStateAddEpisode, action) => {
  switch (action.type) {
    case ADD_EPISODE_REQUEST:
      return {
        ...state,
        loadingAddEpisode: true,
      };
    case ADD_EPISODE_SUCCSESS:
      return {
        ...state,
        loadingAddEpisode: action.playload,
      };
    case ADD_EPISODE_ERROR:
      return {
        ...state,
        loadingAddEpisode: false,
        errorAddEpisode: action.playload,
      };
    default:
      return state;
  }
};
