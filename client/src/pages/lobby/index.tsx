import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import {
  getLobbyIssues,
  getLobbyUsers,
  getSessionOwner,
} from 'api/mock-api.service';
import LobbyChat from 'pages/lobby/LobbyChat';
import LobbyIssues from 'pages/lobby/LobbyIssues';
import LobbyTeam from 'pages/lobby/LobbyTeam';
import SessionInfo from 'pages/session/SessionInfo';
import LobbySettings from 'pages/lobby/LobbySettings/SettingsForm';
import SessionControls from 'components/SessionControls';
import { useDispatch } from 'react-redux';
import { SocketContext } from 'utils/socketContext';
import { setConnectionAC } from 'store/actions/app/actions';
import style from './index.module.scss';

const Lobby: React.FC<HTMLElement> = () => {
  const history = useHistory();
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.connect();
    // socket.on('session:user:add', (payload) => {
    //   console.log(payload);
    //   dispatch(addNewUserAC(payload));
    // });

    socket.on('session:connect', (payload) => {
      dispatch(setConnectionAC(payload));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sessionId = 'IU43E';
  const scramMaster = true;
  const members = getLobbyUsers(sessionId);
  const owner = getSessionOwner(sessionId);
  const issues = getLobbyIssues(sessionId);

  return (
    <main>
      <section className={style.content}>
        <SessionInfo user={owner} sessionId={sessionId} link="http:/" settingsMode={scramMaster} />
        <SessionControls isSessionStarted={false} isUserDealer={scramMaster} />
        <LobbyTeam header="Members:" members={members} />
        {scramMaster
          && (
          <>
            <LobbyIssues header="Issues:" issues={issues} />
            <LobbySettings />
          </>
          )}
      </section>
      <aside className={style.content}>
        <LobbyChat socket={socket} />
      </aside>
    </main>
  );
};

export default Lobby;
