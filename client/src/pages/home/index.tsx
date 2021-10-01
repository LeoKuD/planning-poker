import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { apiConfig } from 'api/config';
import { APP_CLIENT } from 'types';
import { SocketContext } from 'utils/socketContext';
import { useDispatch } from 'react-redux';
// import {
//   createLobbyAC,
//   setConnectionAC,
//   setSessionValidAC,
// } from 'store/actions/app/actions';
import { getSessionId } from 'utils';
import Modal from 'components/Modal';
import { createLobbyAPI, removeLobbyAPI, validateLobby } from 'api/api';
import StartYourPlanning from './StartYourPlanning';
import ConnectToLobby from './ConnectToLobby';

const Home: React.FC<HTMLElement> = () => {
  const history = useHistory();
  const socket = useContext(SocketContext);
  const [welcomeMsg, setWelcomeMsg] = useState<string>('');
  const [showConnectInfo, setShowConnectInfo] = useState(false);
  const [session, setSession] = useState({} as Partial<APP_CLIENT>);
  const [isSessionValid, setIsSessionValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${apiConfig.BASE_URL}/api/start`);
      setWelcomeMsg(res.data.msg);
    })();
  }, []);

  useEffect(() => {
    socket.on('session:created', (payload) => {
      console.log('session:created-1', payload);
      // dispatch(createLobbyAC(payload));
      setSession({
        id: payload.id,
        inviteLink: payload.inviteLink,
        // isAdmin: true,
      });
    });

    socket.on('session:validate', (payload) => {
      console.log('session:validate', payload);
      // dispatch(setSessionValidAC(payload));
      setIsSessionValid(payload.isSessionValid);
    });

    socket.on('session:connected', (payload) => {
      console.log('session:connected', payload);
      // dispatch(setConnectionAC(payload));
      setSession({
        id: payload.id,
        inviteLink: payload.inviteLink,
        // isAdmin: false,
      });
    });

    socket.on('session:exit', (payload) => {
      console.log('session:exit', payload);
      // dispatch(setConnectionAC(payload));
      setSession({});
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startNewGame = (): void => {
    createLobbyAPI(socket, {
      sessionTitle: 'Spring',
    });
    setShowConnectInfo(true); // TODO open form for dealer
  };

  const closeForm = (): void => {
    removeLobbyAPI(socket, session.id ?? '');
    history.push('/');
    setShowConnectInfo(false);
  };

  const connect = (url: string): void => {
    const sessionId = getSessionId(url);
    validateLobby(socket, sessionId);
    if (!isSessionValid) {
      // TODO message about error
      return;
    }
    setShowConnectInfo(true); // TODO open form for player
  };

  return (
    <>
      {!showConnectInfo && <StartYourPlanning startNewGame={startNewGame} connect={connect} />}
      {showConnectInfo && <Modal content={<ConnectToLobby closeForm={closeForm} />} />}
    </>
  );
};

export default Home;
