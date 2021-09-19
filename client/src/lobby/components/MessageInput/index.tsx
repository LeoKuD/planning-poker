import React, { FC, FormEvent, useState } from 'react';
import { Socket } from 'socket.io-client';

interface NewMessageProps {
  socket: Socket
}

const NewMessage: FC<NewMessageProps> = ({ socket }) => {
  const [value, setValue] = useState('');

  const submitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    socket.emit('send_message', {
      id: 1 + Math.random() * 9999,
      value,
      userId: null,
    });
    setValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input
        value={value}
        placeholder="Your message"
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
      />
    </form>
  );
};

export default NewMessage;
