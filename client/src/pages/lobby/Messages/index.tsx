import React, { FC, useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { Message, IMessages } from 'types/index';

interface MessagesProps {
socket: Socket
}

const Messages: FC<MessagesProps> = ({ socket }) => {
  const [messages, setMessages] = useState({} as IMessages);

  useEffect(() => {
    const messageListener = (message: Message): void => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    socket.on('receive_message', ({ id, content, author }) => {
      messageListener({ id, content, author });
    });

    // socket.emit('getMessages');

    return () => {
      socket.off('send_message', messageListener);
    };
  }, [socket]);

  return (
    <div className="style.message__list">
      {[...Object.values(messages)]
        // .sort((a, b) => a.time - b.time)
        .map((message: Message) => (
          <div
            key={message.id}
            className="style.message__container"
            title={`Sent at ${new Date(message.time || '').toLocaleTimeString()}`}
          >
            <span className="style.message">{message.content}</span>
            <span className="style.user">
              -
              {' '}
              {message.author}
              {/* <User userData={message.author} isSmall /> */}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Messages;
