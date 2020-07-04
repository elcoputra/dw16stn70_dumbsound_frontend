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
const initialstateSongsByArtist = {
  songsByArtist: {},
  loadingSongsByArtist: false,
  errorSongsByArtist: {},
};

export const getSongsByArtistReducer = (state = initialstateSongsByArtist, action) => {
  switch (action.type) {
    case GET_SONGS_BY_ARTIST_REQUEST:
      return {
        ...state,
        loadingSongsByArtist: true,
      };
    case GET_SONGS_BY_ARTIST_SUCCESS:
      return {
        ...state,
        loadingSongsByArtist: false,
        songsByArtist: action.payload,
      };
    case GET_SONGS_BY_ARTIST_ERROR:
      return {
        ...state,
        loadingSongsByArtist: false,
        errorSongsByArtist: action.payload,
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

// Delete song
const initialDeleteSong = {
  loadingDeleteSong: false,
  messageDeleteSongBool: false,
  errorDeleteSongBool: false,
  messageDeleteSong: '',
  errorDeleteSong: '',
};

export const deleteSongReducer = (state = initialDeleteSong, action) => {
  switch (action.type) {
    case DELETE_SONGS_REQUEST:
      return {
        ...state,
        loadingDeleteSong: true,
      };
    case DELETE_SONGS_SUCCSESS:
      return {
        ...state,
        loadingDeleteSong: false,
        messageDeleteSongBool: true,
        messageDeleteSong: action.payload,
      };
    case DELETE_SONGS_ERROR:
      return {
        ...state,
        errorDeleteSongBool: true,
        loadingDeleteSong: false,
        errorDeleteSong: action.payload,
      };
    case CLEAR_DELETE_SONG_MESSAGE:
      return {
        ...state,
        messageDeleteSongBool: false,
        messageDeleteSong: '',
      };
    case CLEAR_DELETE_SONG_ERROR:
      return {
        ...state,
        errorDeleteSongBool: false,
        errorDeleteSong: '',
      };
    default:
      return state;
  }
};

// update song + update modal
const initialUpdateSong = {
  openModalUpdate: false,
  dataSongForUpdate: {},
  // Update data process
  loadingUpdateSong: false,
  messageUpdateSong: '',
  errorUpdateSong: '',
  messageBoolUpdateSong: false,
  errorBoolUpdateSong: false,
};

export const updateSongReducer = (state = initialUpdateSong, action) => {
  switch (action.type) {
    case OPEN_MODAL_UPDATE_SONG:
      return {
        ...state,
        openModalUpdate: true,
        dataSongForUpdate: action.payload,
      };
    case CLOSE_MODAL_UPDATE_SONG:
      return {
        ...state,
        openModalUpdate: false,
      };
    // UPDATING
    case UPDATE_SONGS_REQUEST:
      return {
        ...state,
        loadingUpdateSong: true,
      };
    case UPDATE_SONGS_SUCCSESS:
      return {
        ...state,
        loadingUpdateSong: false,
        messageUpdateSong: action.payload,
        messageBoolUpdateSong: true,
      };
    case UPDATE_SONGS_ERROR:
      return {
        ...state,
        loadingUpdateSong: false,
        errorUpdateSong: action.payload,
        errorBoolUpdateSong: true,
      };
    default:
      return state;
  }
};
