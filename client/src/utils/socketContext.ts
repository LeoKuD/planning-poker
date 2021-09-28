import React, { createContext } from 'react';
import { io } from 'socket.io-client';
import { BASE_API_URL } from 'shared/constants';

export const socket = io(`${BASE_API_URL}`);
export const SocketContext = createContext(socket);
