import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { SocketContext } from 'utils/socketContext';
import { useDispatch, useSelector } from 'react-redux';
import {
  createLobbyAC,
  exitSessionAC,
  setSessionValidAC,
} from 'store/actions/app/actions';
import { getSessionId } from 'utils';
import Modal from 'components/Modal';
import { createLobby, removeLobby, validateLobby } from 'api/api';
import { RootState } from 'store/types';
import StartYourPlanning from './StartYourPlanning';
import ConnectToLobby from './ConnectToLobby';

const Home: React.FC<HTMLElement> = () => {
  const history = useHistory();
  const socket = useContext(SocketContext);
  const [showConnectInfo, setShowConnectInfo] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { id, inviteLink, isSessionValid } = useSelector((state: RootState) => state.app);
  const sessionId = isAdmin ? id : getSessionId(inviteLink);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('session:create', (payload) => {
      dispatch(createLobbyAC(payload));
    });

    socket.on('session:validate', (payload) => {
      dispatch(setSessionValidAC(payload));
    });

    socket.on('session:exit', (payload) => {
      dispatch(exitSessionAC(payload));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startNewGame = (): void => {
    socket.connect();
    createLobby(socket, {
      sessionTitle: 'Spring',
    });
    setIsAdmin(true);
    setShowConnectInfo(true); // TODO open form for dealer
  };

  const closeForm = (): void => {
    if (isAdmin) {
      removeLobby(socket, id ?? '');
    }
    history.push('/');
    setShowConnectInfo(false);
  };

  const connect = (url: string): void => {
    validateLobby(socket, getSessionId(url));
    setIsAdmin(false);
    setShowConnectInfo(true); // TODO open form for player
  };

  return (
    <>
      {!showConnectInfo && <StartYourPlanning startNewGame={startNewGame} connect={connect} />}
      {(showConnectInfo || isSessionValid)
        && (
        <Modal content={(
          <ConnectToLobby
            closeForm={closeForm}
            isAdmin={isAdmin}
            sessionId={sessionId}
          />
)}
        />
        )}
    </>
  );
};

export default Home;
