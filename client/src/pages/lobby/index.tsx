import React from 'react';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';
import {
  getLobbyIssues,
  getLobbyUsers,
  getSessionOwner,
} from 'api/mock-api.service';
import LobbyChat from 'pages/lobby/LobbyChat';
import LobbyIssues from 'pages/lobby/LobbyIssues';
import LobbyTeam from 'pages/lobby/LobbyTeam';
import SessionInfo from 'pages/session/SessionInfo';
import SessionScore from 'pages/session/SessionScore';
import LobbySetting from 'pages/lobby/LobbySettings/SettingsForm';
// import SessionControl from 'session/components/SessionControl';
import { apiConfig } from 'api/config';
import style from './index.module.scss';

const Lobby: React.FC<HTMLElement> = () => {
  const history = useHistory();

  const socket = io(`${apiConfig.BASE_URL}`);
  const sessionId = 'IU43E';
  const modeGame = true;
  const scramMaster = true;
  const members = getLobbyUsers(sessionId);
  const owner = getSessionOwner(sessionId);
  const issues = getLobbyIssues(sessionId);

  return (
    <main>
      <section className={style.content}>
        <SessionInfo user={owner} sessionId={sessionId} link="http:/" settingsMode={scramMaster} />
        {/* <SessionControl modeMaster={scramMaster} /> */}
        <LobbyTeam header="Members:" members={members} />
        <LobbyIssues header="Issues:" issues={issues} />
        <LobbySetting />
      </section>
      <aside className={style.content}>
        {modeGame && <LobbyChat socket={socket} />}
        {!modeGame && <SessionScore sessionId={sessionId} />}
      </aside>
    </main>
  );
};

export default Lobby;
