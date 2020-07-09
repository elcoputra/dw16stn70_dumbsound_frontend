import {
  TRANS_ERROR,
  TRANS_REQUEST,
  TRANS_SUCCSESS,
  TRANS_UPDATE_REQUEST,
  TRANS_UPDATE_ERROR,
  TRANS_UPDATE_SUCCSESS,
} from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function getDataTransactionsAction(target) {
  return function (dispatch) {
    dispatch({
      type: TRANS_REQUEST,
      payload: true,
    });
    API.post('/transactions', { target: target })
      .then((response) =>
        dispatch({
          type: TRANS_SUCCSESS,
          payload: response.data.data,
        }),
      )
      .catch((error) =>
        dispatch({
          type: TRANS_ERROR,
          payload: error,
        }),
      );
  };
}

export function UpdateDataTransactionsAction(transId, updateData) {
  return function (dispatch) {
    dispatch({
      type: TRANS_UPDATE_REQUEST,
      payload: true,
    });
    API.patch('/transaction/' + transId, updateData)
      .then((response) =>
        dispatch({
          type: TRANS_UPDATE_SUCCSESS,
          payload: response.data.data,
        }),
      )
      .then(() => dispatch(getDataTransactionsAction()))
      .catch((error) =>
        dispatch({
          type: TRANS_UPDATE_ERROR,
          payload: error,
        }),
      );
  };
}
