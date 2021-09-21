import { Action } from 'types/index';
import * as types from 'store/actions/app/types';

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  position: string;
  avatarUrl: string;
  isAdmin: boolean;
  isObserver: boolean;
}

export const initialState: {
  userId: string;
  lobbyId: string;
  team: User[];
  isAdmin: boolean;
  isSessionValid: any;
  sessionSettings: any;
} = {
  userId: '',
  lobbyId: '',
  team: [],
  isAdmin: false,
  isSessionValid: false,
  sessionSettings: '',

};

export const appReducer = (state = initialState, action: Action): any => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return {
        ...state,
        lobbyId: action.payload.sessionId,
        userId: action.payload.sessionDealerId,
        team: action.payload.team,
        isAdmin: true,
      };
    default:
      return state;
  }
};
