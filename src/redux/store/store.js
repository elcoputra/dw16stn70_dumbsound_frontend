import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { modalRegisterReducer, modalLoginReducer, modalAddEpisodeReducer } from '../reducers/modal_reducer';
import { movieReducer, tvReducer, addMovieReducer, detailMovieReducer, addEpisode } from '../reducers/movie_reducer';
import { episodeReducer, episodeAddReducer } from '../reducers/episode_reducer';
import { userReducer } from '../reducers/account_reducer';
import { authReducer } from '../reducers/auth_reducer';
import { upgradeReducer } from '../reducers/upgrade_reducer';
import { transactionsReducer, transactionByIdReducer } from '../reducers/transactions_reducer';
import { categoriesReducer } from '../reducers/categories_reducer';
// global reducer combine
const reducers = combineReducers({
  // # OTW DI HAPUS
  modalRegisterReducer,
  modalLoginReducer,
  modalAddEpisodeReducer,
  movieReducer,
  tvReducer,
  detailMovieReducer,
  episodeReducer,
  userReducer,
  authReducer,
  upgradeReducer,
  transactionsReducer,
  transactionByIdReducer,
  addEpisode,
  categoriesReducer,
  addMovieReducer,
  episodeAddReducer,
  // ### OTW DI HAPUS
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
