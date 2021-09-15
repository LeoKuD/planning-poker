import React, { FC } from 'react';
import Card from 'components/Card';
import { RoundScore } from 'types/common-types';
import { cardName, cardScore, percent } from 'utils';
import style from './index.module.scss';

interface RoundStatisticsProps {
  roundData: RoundScore;
}

const RoundStatistics: FC<RoundStatisticsProps> = ({ roundData }) => {
  const statisticsList = Object.entries(roundData.score).map(([key, value]) => (
    <li key={`${key}${new Date().getTime()}`}>
      <Card
        shortName={cardName(key).toUpperCase()}
        cardScore={cardScore(key)}
      />
      <div className={style.cardScore}>
        {percent.format(
          value,
        )}
      </div>
    </li>
  ));
  return (
    <ul className={style.resultsContent}>
      {statisticsList}
    </ul>
  );
};

export default RoundStatistics;
