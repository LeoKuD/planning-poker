import User from 'components/User';
import React, { FC, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Message } from 'types/common-types';

interface MessagesProps {
socket: Socket
}

const Messages: FC<MessagesProps> = ({ socket }) => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message: Message): void => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        // newMessages[message.id] = message; TODO FIX
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID: number): void => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        // delete newMessages[messageID]; TODO FIX
        return newMessages;
      });
    };

    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  return (
    <div className="style.message__list">
      {[...Object.values(messages)]
        // .sort((a, b) => a.time - b.time) TODO ADD SORT
        .map((message: any) => (
          <div
            key={message.id}
            className="style.message__container"
            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
          >
            <span className="style.message">{message.value}</span>
            <span className="style.user">
              <User userData={message.user} />
            </span>
          </div>
        ))}
    </div>
  );
};

export default Messages;
