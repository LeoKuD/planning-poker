import React from 'react';
import { useHistory } from 'react-router';
import { io } from 'socket.io-client';
import { getLobbyIssues, getLobbyUsers, getSessionOwner } from 'api/mock-api.service';
import LobbyChat from 'lobby/components/LobbyChat';
import LobbyIssues from 'lobby/components/LobbyIssues';
import LobbyTeam from 'lobby/components/LobbyTeam';
import SessionInfo from 'session/components/SessionInfo';
import SessionScore from 'session/components/SessionScore';
import LobbySetting from 'lobby/components/LobbySettings/SettingsForm';
// import SessionControl from 'session/components/SessionControl';
import style from './index.module.scss';

const Lobby: React.FC<HTMLElement> = () => {
  const history = useHistory();

  const socket = io('https://pp-api-team.herokuapp.com');
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
