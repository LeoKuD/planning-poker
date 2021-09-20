import Button from 'components/Button';
import React, { FC } from 'react';
import { ButtonTypes } from 'types/index';
import styles from './index.module.scss';

interface ISessionControls {
  isUserDealer: boolean; // true - master, false - User / Observer
  isSessionStarted: boolean; // false - lobby/settings, true - game
}
const SessionControls: FC<ISessionControls> = ({
  isUserDealer,
  isSessionStarted,
}) => (
  <div className={styles.session_controls}>
    {isUserDealer && !isSessionStarted && (
      <div className={styles.two_buttons}>
        <Button
          type={ButtonTypes.secondary}
          onClick={() => console.log('Start Game')}
        >
          Start Game
        </Button>
        <Button
          type={ButtonTypes.primary}
          onClick={() => console.log('Cancel Game')}
        >
          Cancel game
        </Button>
      </div>
    )}
    {isUserDealer && isSessionStarted && (
      <Button
        type={ButtonTypes.primary}
        onClick={() => console.log('Stop Game')}
      >
        Stop Game
      </Button>
    )}
    {!isUserDealer && (
      <Button type={ButtonTypes.primary} onClick={() => console.log('Exit')}>
        Exit
      </Button>
    )}
  </div>
);

export default SessionControls;
