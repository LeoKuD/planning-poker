import { Button } from 'components/Button';
import React, { FC } from 'react';
import { ButtonTypes } from 'types/common-types';
import styles from './index.module.scss';

interface IRoundControls {
  isRunning: boolean;
}

export const RoundControls: FC<IRoundControls> = ({ isRunning }) => {
  return (
    <article className={styles.roundControls}>
      {isRunning ? (
        <Button
          type={ButtonTypes.primary}
          onClick={() => console.log('Start round')}
        >
          Run Round
        </Button>
      ) : (
        <div>
          <Button
            type={ButtonTypes.primary}
            onClick={() => console.log('Start round')}
          >
            Run Round
          </Button>
          <Button
            type={ButtonTypes.primary}
            onClick={() => console.log('Start round')}
          >
            Run Round
          </Button>
        </div>
      )}
    </article>
  );
};
