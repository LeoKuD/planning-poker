import {
  Action, Issue, User, APP_CLIENT,
} from 'types/index';
import * as types from '../actions/app/types';

export const initialState: {
  ownerId: string;
  userId: string;
  id: string;
  members: User[];
  issues: Issue[];
  sessionTitle: string;
  inviteLink: string;
  sessionSettings: any;
  isSessionValid: boolean;
} = {
  ownerId: '',
  userId: '',
  id: '',
  members: [],
  issues: [],
  sessionTitle: '',
  inviteLink: '',
  sessionSettings: '',
  isSessionValid: false,

};

export const appReducer = (state = initialState, action: Action): APP_CLIENT => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return {
        ...state,
        id: action.payload.id,
        userId: action.payload.userId,
        ownerId: action.payload.ownerId,
        sessionTitle: action.payload.sessionTitle,
        inviteLink: action.payload.inviteLink,
        members: action.payload.members,
        issues: action.payload.issues,
        isSessionValid: true,
      };
    case types.SET_SESSION_VALID:
      return {
        ...state,
        isSessionValid: action.payload,
      };
    case types.SET_CONNECTION: {
      return {
        ...state,
        ownerId: action.payload.ownerId,
      };
    }
    case types.ADD_NEW_USER: {
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    }
    case types.START_SESSION: {
      return {
        ...state,
        sessionSettings: action.payload,
      };
    }
    case types.EXIT_SESSION: {
      return initialState;
    }
    default:
      return state;
  }
};
