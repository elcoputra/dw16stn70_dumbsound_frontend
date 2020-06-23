import {
  GET_EPISODE_BY_MOVIE_ERROR,
  GET_EPISODE_BY_MOVIE_SUCCSESS,
  GET_EPISODE_BY_MOVIE_REQUEST,
  ADD_EPISODES_ERROR,
  ADD_EPISODES_REQUEST,
  ADD_EPISODES_SUCCSESS,
} from '../actionTypes';

const initialStateAddEpisode = {
  dataEpisode: [],
  loadingEpisode: false,
  errorEpisode: '',
};

export const episodeAddReducer = (state = initialStateAddEpisode, action) => {
  switch (action.type) {
    case ADD_EPISODES_REQUEST:
      return {
        ...state,
        loadingEpisode: true,
      };
    case ADD_EPISODES_SUCCSESS:
      return {
        ...state,
        loadingEpisode: false,
        dataEpisode: action.payload,
      };
    case ADD_EPISODES_ERROR:
      return {
        ...state,
        loadingEpisode: false,
        errorEpisode: action.payload,
      };
    default:
      return state;
  }
};

const initialStateEpisode = {
  dataEpisode: [],
  loadingEpisode: false,
  errorEpisode: '',
};

export const episodeReducer = (state = initialStateEpisode, action) => {
  switch (action.type) {
    case GET_EPISODE_BY_MOVIE_REQUEST:
      return {
        ...state,
        loadingEpisode: true,
      };
    case GET_EPISODE_BY_MOVIE_SUCCSESS:
      return {
        ...state,
        loadingEpisode: false,
        dataEpisode: action.payload,
      };
    case GET_EPISODE_BY_MOVIE_ERROR:
      return {
        ...state,
        loadingEpisode: false,
        errorEpisode: action.payload,
      };
    default:
      return state;
  }
};
