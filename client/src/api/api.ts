import { Socket } from 'socket.io-client';
import {
  addNewUserAC,
  createLobbyAC,
  setConnectionAC,
  setSessionValidAC,
  startSessionAC,
} from 'store/actions/app/actions';

export const createLobbyAPI: any = (socket: Socket, dispatch: any) => {
  socket.on('session:created', (session) => {
    console.log('session:created', session);
    dispatch(
      createLobbyAC({
        lobbyId: session.sessionId,
        userId: session.sessionDealerId,
        team: session.team,
        isAdmin: true,
      }),
    );
  });
};

export const setSessionValidAPI: any = (socket: Socket, dispatch: any) => {
  socket.on('session:validate', (data) => {
    console.log('session:validate', data);
    dispatch(setSessionValidAC(data.isSessionValid));
  });
};

export const setConnectionAPI: any = (socket: Socket, dispatch: any) => {
  socket.on('session:connected', (session) => {
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

export const createLobby = (socket: Socket, user: any): void => {
  socket.emit('session:create', user);
};

export const validateLobby = (socket: Socket, sessionId: string): void => {
  socket.emit('session:validate', { sessionId });
};

export const connectToLobby = (socket: Socket, sessionId: any, user: any): void => {
  socket.emit('session:connect', { sessionId, user });
};

export const startSession = (socket: Socket): void => {
  socket.emit('session:start', {}); // settings, issues, round, title здесь - нужно будет прокинуть в эвенте с форм клиента
};
