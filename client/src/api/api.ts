import { Dispatch } from 'redux';
import { Socket } from 'socket.io-client';
import {
  addNewUserAC,
  createLobbyAC,
  setConnectionAC,
  setSessionValidAC,
  startSessionAC,
} from 'store/actions/app/actions';
import { APP_CLIENT, User } from 'types';

export const createLobbyAPI = (socket: Socket, dispatch: Dispatch): void => {
  socket.on('session:create', (session) => {
    console.log('session:create', session);
    dispatch(
      createLobbyAC({
        id: session.id,
        inviteLink: session.inviteLink,
        userId: session.userId,
      }),
    );
  });
};

export const setSessionValidAPI = (socket: Socket, dispatch: Dispatch): void => {
  socket.on('session:validate', (data) => {
    console.log('session:validate', data);
    dispatch(setSessionValidAC(data));
  });
};

export const setConnectionAPI = (socket: Socket, dispatch: Dispatch): void => {
  socket.on('session:connect', (session) => {
    console.log('session:connected', session);
    dispatch(setConnectionAC(session));
  });
};

export const addNewUserAPI: any = (socket: Socket, dispatch: any) => {
  socket.on('session:user:add', (newUser) => {
    console.log('session:user:add', newUser);
    dispatch(addNewUserAC(newUser));
  });
};

export const startSessionAPI: any = (socket: Socket, dispatch: any) => {
  socket.on('session:started', (sessionData) => {
    console.log('session:started', sessionData);
    dispatch(startSessionAC(sessionData));
  });
};

export const createLobby = (socket: Socket, session: Partial<APP_CLIENT>): void => {
  socket.emit('session:create', session);
};

export const validateLobby = (socket: Socket, sessionId: string | null): void => {
  socket.emit('session:validate', sessionId);
};

export const connectToLobby = (socket: Socket, sessionId: string, user: Omit<User, 'id'>): void => {
  socket.emit('session:connect', { sessionId, user });
};

export const removeLobby = (socket: Socket, sessionId: string | null): void => {
  socket.emit('session:exit', { sessionId });
};

export const startSession = (socket: Socket): void => {
  socket.emit('session:start', {}); // settings, issues, round, title здесь - нужно будет прокинуть в эвенте с форм клиента
};
