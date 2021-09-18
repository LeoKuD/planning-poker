import { getLobbyIssues, getLobbyUsers } from 'api/mock-api.service';
import LobbyChat from 'lobby/components/LobbyChat';
import LobbyIssues from 'lobby/components/LobbyIssues';
import LobbyTeam from 'lobby/components/LobbyTeam';
import React from 'react';
import { useHistory } from 'react-router';
import SessionHeader from 'session/components/SessionHeader';
import SessionScore from 'session/components/SessionScore';
import { io } from 'socket.io-client';
import style from './index.module.scss';

const Lobby: React.FC<HTMLElement> = () => {
  const history = useHistory();

  const socket = io('https://pp-api-team.herokuapp.com');
  const sessionId = 'IU43E';
  const modeGame = true;
  const scramMaster = true;
  const members = getLobbyUsers(sessionId);
  const issues = getLobbyIssues(sessionId);

  return (
    <main>
      <section className={style.content}>
        <SessionHeader sessionId={sessionId} modeMaster={scramMaster} />
        {/* <SessionInfo sessionId={sessionId} modeMaster={scramMaster} /> */}
        {/* <SessionControl modeMaster={scramMaster} /> */}
        <LobbyTeam header="Members:" members={members} />
        <LobbyIssues header="Issues:" issues={issues} />
        {/* <LobbySetting /> */}
      </section>
      <aside className={style.content}>
        {modeGame && <LobbyChat socket={socket} />}
        {!modeGame && <SessionScore sessionId={sessionId} />}
      </aside>
    </main>
  );
};

export default Lobby;
