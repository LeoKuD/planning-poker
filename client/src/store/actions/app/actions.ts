import { User } from 'store/reducers/appReducer';
import { Action } from 'types/index';
import * as types from './types';

export const createLobbyAC = (state: any): Action => ({
  type: types.CREATE_SESSION,
  payload: state,
});

export const setSessionValidAC = (data: any): Action => ({
  type: types.SET_SESSION_VALID,
  payload: data,
});

export const setConnectionAC = (data: any): Action => ({
  type: types.SET_CONNECTION,
  payload: data,
});

export const addNewUserAC = (newUser: User): Action => ({
  type: types.ADD_NEW_USER,
  payload: newUser,
});
export const startSessionAC = (sessionData: User): Action => ({
  type: types.START_SESSION,
  payload: sessionData,
});
