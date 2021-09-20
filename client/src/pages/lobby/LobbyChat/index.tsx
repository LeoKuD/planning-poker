import { Socket } from 'socket.io-client';
import React, { FC } from 'react';
import Messages from 'pages/lobby/Messages';
import NewMessage from 'pages/lobby/MessageInput';
import style from './index.module.scss';

interface ChatProps {
  socket?: Socket
}

const LobbyChat: FC<ChatProps> = ({ socket }) => (
  <>
    <div className="App">
      { socket ? (
        <div className="style.chat__content">
          <Messages socket={socket} />
          <NewMessage socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  </>
);

export default LobbyChat;
