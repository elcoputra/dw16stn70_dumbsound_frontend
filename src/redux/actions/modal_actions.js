import {
  OPEN_MODAL_REGISTER,
  CLOSE_MODAL_REGISTER,
  OPEN_MODAL_LOGIN,
  CLOSE_MODAL_LOGIN,
  CLOSE_MODAL_ADD_EPISODE,
  OPEN_MODAL_ADD_EPISODE,
} from '../actionTypes';

export const openModalRegister = () => {
  return {
    type: OPEN_MODAL_REGISTER,
    payload: true,
  };
};
export const closeModalRegister = () => {
  return {
    type: CLOSE_MODAL_REGISTER,
    payload: false,
  };
};
export const openModalLogin = () => {
  return {
    type: OPEN_MODAL_LOGIN,
    payload: true,
  };
};
export const closeModalLogin = () => {
  return {
    type: CLOSE_MODAL_LOGIN,
    payload: false,
  };
};
export const openModalAddEpisode = () => {
  return {
    type: OPEN_MODAL_ADD_EPISODE,
    payload: true,
  };
};
export const closeModalAddEpisode = () => {
  return {
    type: CLOSE_MODAL_ADD_EPISODE,
    payload: false,
  };
};
