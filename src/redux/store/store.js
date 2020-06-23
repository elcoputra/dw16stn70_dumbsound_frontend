import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { modalRegisterReducer, modalLoginReducer } from '../reducers/modal_reducer'; //modalAddEpisodeReducer
import { userReducer } from '../reducers/account_reducer';
import { authReducer } from '../reducers/auth_reducer';
import { upgradeReducer } from '../reducers/upgrade_reducer';
import { getDataSongsReducer } from '../reducers/song_reducers';

// // OTW DI HAPUS
// import { movieReducer, tvReducer, addMovieReducer, detailMovieReducer, addEpisode } from '../reducers/movie_reducer';
// import { episodeReducer, episodeAddReducer } from '../reducers/episode_reducer';
// import { transactionsReducer, transactionByIdReducer } from '../reducers/transactions_reducer';
// import { categoriesReducer } from '../reducers/categories_reducer';
// global reducer combine
const reducers = combineReducers({
  // // # OTW DI HAPUS
  // modalAddEpisodeReducer,
  // movieReducer,
  // tvReducer,
  // detailMovieReducer,
  // episodeReducer,
  // transactionsReducer,
  // transactionByIdReducer,
  // addEpisode,
  // categoriesReducer,
  // addMovieReducer,
  // episodeAddReducer,
  // // ### OTW DI HAPUS
  modalRegisterReducer,
  modalLoginReducer,
  userReducer,
  authReducer,
  upgradeReducer,

  // song
  getDataSongsReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
