import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { appReducer } from './reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});
