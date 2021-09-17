import React, { FC } from 'react';
import SectionHeader from 'components/SectionHeader';
import { IssueCard } from 'components/Issue';
import { IssueData } from 'types/common-types';
import IssueInfo from 'components/IssueInfo';
import styles from './index.module.scss';

type SessionIssuesProps = {
  issues: IssueData[],
  modeMaster? : boolean, // false - player mode, true - master mode
}

const SessionIssues: FC<SessionIssuesProps> = ({ issues, modeMaster }) => {
  if (modeMaster) {
    // add create new issue button
  }

  return (
    <div className={styles.container}>
      <div>
        <SectionHeader header="Session Issues" />
        {issues.map((issue) => (
          <IssueCard
            issueData={issue}
            modeMaster={modeMaster}
          />
        ))}
      </div>
      <IssueInfo />
    </div>
  );
};

export default SessionIssues;
