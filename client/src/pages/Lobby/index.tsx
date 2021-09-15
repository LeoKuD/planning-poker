import React from 'react';
import Modal from 'components/Modal';
import ConnectToLobby from 'main/components/ConnectToLobby';
import { useHistory } from 'react-router';

const Lobby: React.FC<HTMLElement> = () => {
  const history = useHistory();

  const closeForm = (): void => {
    history.push('/');
  };

  return (
    <Modal content={<ConnectToLobby closeForm={closeForm} />} />
  );
};

export default Lobby;
