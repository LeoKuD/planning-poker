import React, { createContext } from 'react';
import { io } from 'socket.io-client';
import { apiConfig } from 'api/config';

export const socket = io(`${apiConfig.BASE_URL}`);
export const SocketContext = createContext(socket);
