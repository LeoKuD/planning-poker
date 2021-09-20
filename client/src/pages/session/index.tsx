import React, { useEffect, useState } from 'react';
import {
  getCards,
  getLobbyIssues,
  getSessionOwner,
} from 'api/mock-api.service';
import Button from 'components/Button';
import CardSet from 'components/CardSet';
import Timer from 'components/Timer';
import User from 'components/User';
import SessionHeader from 'pages/session/SessionHeader';
import SessionIssues from 'pages/session/SessionIssues';
import SessionScore from 'pages/session/SessionScore';
import { ButtonTypes } from 'types/index';
import styles from './index.module.scss';

// interface IGameProps {
//   userData: UserData;
//   isSmall: boolean;
//   sessionId: string;
// }

const Game: React.FC<HTMLElement> = () => {
  const [masterMode, setMasterMode] = useState<boolean>(false);
  const userId = 'DD44S'; // DD45S - player, DD44S - master
  const sessionId = 'IU43E';
  const owner = getSessionOwner(sessionId);
  const issues = getLobbyIssues(sessionId);
  const cards = getCards(sessionId);

  useEffect(() => {
    if (userId === owner.id) {
      setMasterMode(true);
    }
  });
  return (
    <div className={styles.game}>
      <div className={styles.header}>
        <SessionHeader sessionId={sessionId} modeMaster={false} />
      </div>
      <div className={styles.user_control}>
        <User userData={owner} isSmall={!false} />
        {!masterMode && <Timer isRunningRound={false} />}
        {masterMode ? (
          <Button
            type={ButtonTypes.primary}
            onClick={() => console.log('Stop Game')}
          >
            Stop Game
          </Button>
        ) : (
          <Button
            type={ButtonTypes.primary}
            onClick={() => console.log('Exit')}
          >
            Exit
          </Button>
        )}
      </div>
      <div className={styles.issues}>
        <SessionIssues issues={issues} modeMaster={masterMode} />
      </div>
      <div className={styles.cards}>
        <CardSet cards={cards} />
      </div>
      <div className={styles.score}>
        <SessionScore sessionId={sessionId} />
      </div>
    </div>
  );
};

export default Game;
