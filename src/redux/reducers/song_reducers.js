import { GET_SONGS_ERROR, GET_SONGS_REQUEST, GET_SONGS_SUCCSESS } from '../actionTypes';

const initialstateSongs = {
  songs: [],
  loading: false,
  error: '',
};

export const getDataSongsReducer = (state = initialstateSongs, action) => {
  switch (action.type) {
    case GET_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SONGS_SUCCSESS:
      return {
        ...state,
        loading: false,
        songs: action.payload,
      };
    case GET_SONGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
