import { POST_ARTIST_ERROR, POST_ARTIST_REQUEST, POST_ARTIST_SUCCSESS } from '../actionTypes';

const initialstateTypes = {
  artistsMessage: '',
  loadingArtist: false,
  errorArtist: '',
};

export const PostDataArtistReducer = (state = initialstateTypes, action) => {
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
      };
    case POST_ARTIST_ERROR:
      return {
        ...state,
        loadingArtist: false,
        errorArtist: action.payload,
      };
    default:
      return state;
  }
};
