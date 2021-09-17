import React, { FC } from 'react';
import { Timer } from 'components/Timer';
import { RoundControls } from 'components/RoundControls';
import style from './index.module.scss';

type IssueInfoProps = {
    isRunning?: boolean,
    isRunningRound?: boolean
}

const IssueInfo: FC<IssueInfoProps> = ({ isRunningRound = false, isRunning = false }) => (
  <div className={style.container}>
    <div className={style.container__timer}>
      <Timer isRunningRound={isRunningRound} />
    </div>
    <div className={style.container__controls}>
      <RoundControls isRunning={isRunning} />
    </div>
  </div>
);

export default IssueInfo;
