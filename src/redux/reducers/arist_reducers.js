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

const initialStatePost = {
  loadingArtist: false,
  messageBoolArtist: false,
  artistsMessage: '',
  errorBoolArtist: false,
  errorArtist: '',
};
export const PostDataArtistReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case POST_ARTIST_REQUEST:
      return {
        ...state,
        loadingArtist: true,
      };
    case POST_ARTIST_SUCCSESS:
      return {
        ...state,
        loadingArtist: false,
        artistsMessage: action.payload,
        messageBoolArtist: true,
      };
    case POST_ARTIST_ERROR:
      return {
        ...state,
        loadingArtist: false,
        errorArtist: action.payload,
        errorBoolArtist: true,
      };
    case CLEAR_ERROR_ARTIST:
      return {
        ...state,
        errorBoolArtist: false,
        errorArtist: '',
      };
    case CLEAR_MESSAGE_ARTIST:
      return {
        ...state,
        artistsMessage: '',
        messageBoolArtist: false,
      };
    default:
      return state;
  }
};

///////////////////////////////////////////////////////////////////////////////
const initialstateGet = {
  artistData: [],
  loadingGetArtist: false,
  errorGetArtist: [],
};
export const getDataArtistReducer = (state = initialstateGet, action) => {
  switch (action.type) {
    case GET_ARTIST_REQUEST:
      return {
        ...state,
        loadingGetArtist: true,
      };
    case GET_ARTIST_SUCCSESS:
      return {
        ...state,
        loadingGetArtist: false,
        artistData: action.payload,
      };
    case GET_ARTIST_ERROR:
      return {
        ...state,
        loadingGetArtist: false,
        errorGetArtist: action.payload,
      };
    default:
      return state;
  }
};

///////////////////////////////////////////////////////////////////////////////
const initialGetArtistBySong = {
  artistDataBySong: {},
  loadingGetArtistBySong: false,
  errorGetArtistBySong: {},
  modalArtist: false,
};
export const getArtistBySongReducer = (state = initialGetArtistBySong, action) => {
  switch (action.type) {
    case GET_ARTIST_BY_SONG_REQUEST:
      return {
        ...state,
        loadingGetArtistBySong: true,
      };
    case GET_ARTIST_BY_SONG_SUCCESS:
      return {
        ...state,
        loadingGetArtistBySong: false,
        artistDataBySong: action.payload,
        modalArtist: true,
      };
    case GET_ARTIST_BY_SONG_ERROR:
      return {
        ...state,
        loadingGetArtistBySong: false,
        errorGetArtistBySong: action.payload,
      };
    case CLEAR_ARTIST_DATA_AND_MODAL:
      return {
        ...state,
        modalArtist: false,
        artistDataBySong: {},
      };

    default:
      return state;
  }
};
