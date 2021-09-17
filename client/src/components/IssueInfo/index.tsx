import React, { FC } from 'react';
import { Timer } from 'components/Timer';
import { RoundControls } from 'components/RoundControls';

type IssueInfoProps = {
    isRunning?: boolean,
    isRunningRound?: boolean
}

const IssueInfo: FC<IssueInfoProps> = ({ isRunningRound = false, isRunning = false }) => (
  <div>
    <Timer isRunningRound={isRunningRound} />
    <RoundControls isRunning={isRunning} />
  </div>
);

export default IssueInfo;
