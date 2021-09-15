import Card from 'components/Card';
import React, { FC } from 'react';
import { RoundScore } from 'types/common-types';
import style from './index.module.scss';

interface RoundStatisticsProps {
  roundData: RoundScore;
}

const RoundStatistics: FC<RoundStatisticsProps> = ({ roundData }) => {
  const option = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const percent = new Intl.NumberFormat('en-US', option);
  const cardName = (value: string): string => value.split('-')[0];
  const cardScore = (value: string): number | null => parseInt(value.split('-')[1], 10);

  const statisticsList = Object.entries(roundData.score).map(([key, value]) => (
    <li>
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
