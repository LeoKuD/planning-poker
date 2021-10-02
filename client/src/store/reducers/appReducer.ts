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
} = {
  ownerId: '',
  userId: '',
  id: '',
  members: [],
  issues: [],
  sessionTitle: '',
  inviteLink: '',
  sessionSettings: '',
};

export const appReducer = (state = initialState, action: Action): APP_CLIENT => {
  switch (action.type) {
    case types.CREATE_SESSION:
      return {
        ...state,
        ...action.payload,
      };
    case types.SET_SESSION_VALID:
      return {
        ...state,
        ...action.payload.session,
        isSessionValid: action.payload.response,
      };
    case types.SET_CONNECTION: {
      return {
        ...state,
        ...action.payload.session,
        userId: action.payload.userId,
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
