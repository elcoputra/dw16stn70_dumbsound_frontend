import { UPGRADE_ERROR, UPGRADE_REQUEST, UPGRADE_SUCCSESS } from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function upgradeAction(upgrade) {
  return function (dispatch) {
    API.post('/transaction', upgrade)
      .then(() =>
        dispatch({
          type: UPGRADE_SUCCSESS,
          payload: false,
        }),
      )
      .catch((error) =>
        dispatch({
          type: UPGRADE_ERROR,
          payload: error.response,
        }),
      );
  };
}
