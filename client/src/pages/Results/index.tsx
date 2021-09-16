import React from 'react';
import { getLobbyIssues, getRoundScore } from 'api/mock-api.service';
import RoundStatistics from 'results/components/RoundStatistics';
import SessionHeader from 'session/components/SessionHeader';
import { IssueCard } from 'components/Issue';
import { Issue, RoundScore } from 'types/common-types';
import style from './index.module.scss';

const Results: React.FC<HTMLElement> = () => {
  const sessionId = 'IU43E';
  const issues = getLobbyIssues(sessionId);
  return (
    <div>
      <SessionHeader sessionId={sessionId} modeMaster={false} />
      <ul>
        {issues.map((item: Issue) => (
          <li className={style.resultRound}>
            <IssueCard issueData={item} />
            <RoundStatistics roundData={getRoundScore(sessionId, item.id) as RoundScore} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
