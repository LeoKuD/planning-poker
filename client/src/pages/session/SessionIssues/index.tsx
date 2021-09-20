import React, { FC } from 'react';
import SectionHeader from 'components/SectionHeader';
import IssueCard from 'components/Issue';
import { IssueData, ButtonTypes, RoundScore } from 'types/index';
import IssueInfo from 'components/IssueInfo';
import Button from 'components/Button';
import RoundStatistics from 'pages/results/RoundStatistics';
import { getRoundScore } from 'api/mock-api.service';
import styles from './index.module.scss';

type SessionIssuesProps = {
  issues: IssueData[];
  modeMaster: boolean; // false - player mode, true - master mode
};

const SessionIssues: FC<SessionIssuesProps> = ({ issues, modeMaster }) => {
  const sessionId = 'IU43E';

  const addNewIssue = (): void => {
    console.log('new issue added');
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__issues}>
        <SectionHeader header="Session Issues" />
        {issues.map((issue) => (
          <IssueCard key={issue.id} issueData={issue} modeMaster={modeMaster} />
        ))}
        {modeMaster && (
          <Button onClick={addNewIssue} type={ButtonTypes.primary}>
            Create new issue
          </Button>
        )}
      </div>

      <div className={styles.container__issueInfo}>
        <IssueInfo modMaster={modeMaster} />
      </div>

      <div className={styles.container__statistics}>
        <SectionHeader header="Statistics:" />
        <RoundStatistics roundData={getRoundScore(sessionId, issues[0].id) as RoundScore} />
      </div>
    </div>
  );
};

export default SessionIssues;
