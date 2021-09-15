import { Button } from 'components/Button';
import React, { FC } from 'react';
import { ButtonTypes, IRoundControls } from 'types/common-types';
import styles from './index.module.scss';

export const RoundControls: FC<IRoundControls> = ({ isRunning }) => (
  <article className={styles.roundControls}>
    {isRunning ? (
      <Button
        type={ButtonTypes.secondary}
        onClick={() => console.log('Start round')}
      >
        Restart Round
      </Button>
    ) : (
      <div className={styles.round_end}>
        <Button
          type={ButtonTypes.secondary}
          onClick={() => console.log('Restart Round')}
        >
          Next ISSUE
        </Button>
        <Button
          type={ButtonTypes.secondary}
          onClick={() => console.log('Next ISSUE')}
        >
          Run Round
        </Button>
      </div>
    )}
  </article>
);
