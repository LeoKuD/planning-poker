import React from 'react';
import { getLobbyIssues, getRoundScore } from 'api/mock-api.service';
import RoundStatistics from 'pages/results/RoundStatistics';
import SessionHeader from 'pages/session/SessionHeader';
import IssueCard from 'components/Issue';
import { Issue, RoundScore } from 'types/index';
import style from './index.module.scss';

const Results: React.FC<HTMLElement> = () => {
  const sessionId = 'IU43E';
  const issues = getLobbyIssues(sessionId);
  return (
    <div>
      <SessionHeader sessionId={sessionId} modeMaster={false} />
      <ul>
        {issues.map((item: Issue) => (
          <li key={item.id} className={style.resultRound}>
            <IssueCard issueData={item} />
            <RoundStatistics roundData={getRoundScore(sessionId, item.id) as RoundScore} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
