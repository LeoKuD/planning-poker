import { StateType, ActionType } from 'typesafe-actions';

export type Store = StateType<typeof import('./index').default>;

export type RootState = StateType<typeof import('./reducers/rootReducer').default>;

export type RootAction = ActionType<typeof import('./actions/rootActions').default>;
