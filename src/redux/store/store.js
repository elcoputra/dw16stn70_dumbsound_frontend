import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { modalRegisterReducer, modalLoginReducer } from '../reducers/modal_reducer'; //modalAddEpisodeReducer
import { userReducer } from '../reducers/account_reducer';
import { authReducer } from '../reducers/auth_reducer';
import { upgradeReducer } from '../reducers/upgrade_reducer';
import { getDataSongsReducer, postDataSongsReducer, getDetailSongReducer } from '../reducers/song_reducers';
import { transactionsReducer, transactionByIdReducer } from '../reducers/transactions_reducer';
import { getDataTypesReducer } from '../reducers/types_reducers';
import { PostDataArtistReducer, getDataArtistReducer } from '../reducers/arist_reducers';

const reducers = combineReducers({
  transactionsReducer,
  transactionByIdReducer,
  modalRegisterReducer,
  modalLoginReducer,
  userReducer,
  authReducer,
  upgradeReducer,

  // song
  getDataSongsReducer,
  postDataSongsReducer,

  // type
  getDataTypesReducer,

  // artist
  PostDataArtistReducer,
  getDataArtistReducer,
  getDetailSongReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
