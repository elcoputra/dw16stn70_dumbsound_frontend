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
  CLEAR_MESSAGE_ADD_SONG,
  CLEAR_ERROR_ADD_SONG,
} from '../actionTypes';

const initialstateSongs = {
  songs: [],
  loading: false,
  error: [],
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

// ADD SONG //
const initialstatePostSong = {
  loadingAddSong: false,
  messageBoolAddSong: false,
  messageAddSong: '',
  errorBoolAddSong: false,
  errorAddSong: '',
};

export const postDataSongsReducer = (state = initialstatePostSong, action) => {
  switch (action.type) {
    case POST_SONGS_REQUEST:
      return {
        ...state,
        loadingAddSong: true,
        messageBoolAddSong: false,
        errorBoolAddSong: false,
      };
    case POST_SONGS_SUCCSESS:
      return {
        ...state,
        loadingAddSong: false,
        messageBoolAddSong: true,
        messageAddSong: action.payload,
      };
    case POST_SONGS_ERROR:
      return {
        ...state,
        loadingAddSong: false,
        errorBoolAddSong: true,
        errorAddSong: action.payload,
      };
    case CLEAR_MESSAGE_ADD_SONG:
      return {
        ...state,
        messageBoolAddSong: false,
        messageAddSong: '',
      };
    case CLEAR_ERROR_ADD_SONG:
      return {
        ...state,
        errorAddSong: '',
        errorBoolAddSong: false,
      };
    default:
      return state;
  }
};

// Get detail song //
const initialstateDetailSong = {
  song: [],
  loadingDetail: false,
  errorDetail: [],
};

export const getDetailSongReducer = (state = initialstateDetailSong, action) => {
  switch (action.type) {
    case GET_DETAIL_SONG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAIL_SONG_SUCCSESS:
      const detail = action.payload;
      return {
        ...state,
        loading: false,
        song: [
          ...state.song,
          {
            name: detail.title,
            musicSrc: detail.musicLink,
            cover: detail.thumbnailLink,
            singer: detail.artist.name,
          },
        ],
      };
    case GET_DETAIL_SONG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_DETAIL_SONG_SUCCSESS:
      return {
        ...state,
        song: [],
      };
    default:
      return state;
  }
};
