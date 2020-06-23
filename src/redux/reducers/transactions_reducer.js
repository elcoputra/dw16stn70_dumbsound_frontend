import {
  TRANS_ERROR,
  TRANS_REQUEST,
  TRANS_SUCCSESS,
  TRANS_UPDATE_ERROR,
  TRANS_UPDATE_REQUEST,
  TRANS_UPDATE_SUCCSESS,
} from '../actionTypes';

const initialState = {
  dataTransactions: [],
  loadingTransactions: false,
  errorTransactions: '',
};

export const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANS_REQUEST:
      return {
        ...state,
        loadingTransactions: true,
      };
    case TRANS_SUCCSESS:
      return {
        ...state,
        loadingTransactions: false,
        dataTransactions: action.payload,
      };
    case TRANS_ERROR:
      return {
        ...state,
        loadingTransactions: false,
        errorTransactions: action.payload,
      };
    default:
      return state;
  }
};

const initialState2 = {
  dataTransactionById: [],
  loadingTransactionById: false,
  errorTransactionById: '',
};

export const transactionByIdReducer = (state = initialState2, action) => {
  switch (action.type) {
    case TRANS_UPDATE_REQUEST:
      return {
        ...state,
        loadingTransactionById: true,
      };
    case TRANS_UPDATE_SUCCSESS:
      return {
        ...state,
        loadingTransactionById: false,
        dataTransactionById: action.payload,
      };
    case TRANS_UPDATE_ERROR:
      return {
        ...state,
        loadingTransactionById: false,
        errorTransactionById: action.payload,
      };
    default:
      return state;
  }
};
