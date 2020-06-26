import { UPGRADE_ERROR, UPGRADE_REQUEST, UPGRADE_SUCCSESS, CLEAR_UPGRADE_MESSAGE, CLEAR_UPGRADE_ERROR } from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function upgradeAction(upgrade) {
  return function (dispatch) {
    API.post('/transaction', upgrade)
      .then((response) =>
        dispatch({
          type: UPGRADE_SUCCSESS,
          payload: response.data.message,
        }),
      )
      .catch((error) =>
        dispatch({
          type: UPGRADE_ERROR,
          payload: error.response.data.error,
        }),
      );
  };
}
export function clearMessageUpgrade() {
  return function (dispatch) {
    {
      dispatch({ type: CLEAR_UPGRADE_MESSAGE });
    }
  };
}
export function clearErrorUpgrade() {
  return function (dispatch) {
    {
      dispatch({ type: CLEAR_UPGRADE_ERROR });
    }
  };
}
