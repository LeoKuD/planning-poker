import { Button } from 'components/Button';
import React, { FC, ReactElement, useState } from 'react';
import { ButtonTypes } from 'types/common-types';
import styles from './index.module.scss';

interface ISessionControls {
  userRole: boolean; // false - master, true - User / Observer
  stage: boolean; // false - lobby, true - game
}
export const SessionControls: FC<ISessionControls> = ({ userRole, stage }) => {
  let response = (
    <Button type={ButtonTypes.primary} onClick={() => console.log('Exit')}>
      Exit
    </Button>
  );
  const controls: any = () => {
    if (!userRole && !stage) {
      response = (
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
      );
    } else if (!userRole && stage) {
      response = (
        <>
          <Button
            type={ButtonTypes.primary}
            onClick={() => console.log('Stop Game')}
          >
            Stop Game
          </Button>
        </>
      );
    }
    return response;
  };

  return (
    <div className={styles.session_controls}>{controls(userRole, stage)}</div>
  );
};
