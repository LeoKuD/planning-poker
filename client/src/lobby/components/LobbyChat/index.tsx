import { Socket } from 'socket.io-client';
import React, { FC } from 'react';
import style from './index.module.scss';
import MessageInput from '../MessageInput';
import Messages from '../Messages';

interface ChatProps {
  socket?: Socket
}

const LobbyChat: FC<ChatProps> = ({ socket }) => (
  <>
    <div className="App">
      { socket ? (
        <div className="style.chat__content">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  </>
);

export default LobbyChat;
