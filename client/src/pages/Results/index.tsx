import React from 'react';
import { getRoundScore } from 'api/mock-api.service';
import RoundStatistics from 'results/components/RoundStatistics';
import { RoundScore } from 'types/common-types';

const Results: React.FC<HTMLElement> = () => {
  const roundData = getRoundScore('IU43E', 19) as RoundScore;
  return (
    <>
      <RoundStatistics roundData={roundData} />
    </>
  );
};

export default Results;
