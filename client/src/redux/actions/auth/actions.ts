import { Dispatch } from 'react';
import * as types from './types';

import * as utils from '../../../utils';
import { Action } from '../../../types';

const createGetProfile = (): Action => ({
  type: types.GET_PROFILE,
});

const getProfileSuccess = (data: any): Action => ({
  type: types.GET_PROFILE_SUCCESS,
  payload: data,
});

const catchAuthRequestErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.AUTH_REQUEST_FAILURE,
    payload: err.message,
  });
  console.log(err);
};

export const userLoggedOut = () => (dispatch: Dispatch<any>) => {
  localStorage.removeItem(process.env.REACT_APP_LOCAL_TOKEN as string);
  dispatch({
    type: types.LOGOUT,
  });
};

export const getProfile = (history: any) => async (dispatch: Dispatch<any>) => {
  const token = utils.getLocalStorageToken();

  if (token) {
    try {
      dispatch(createGetProfile());
      // const _res = await authAPI.getProfile(token);
      dispatch(getProfileSuccess('data'));
      history.push('/demo');
    } catch (err) {
      dispatch(catchAuthRequestErr(err));
    }
  } else {
    dispatch(userLoggedOut());
  }
};
