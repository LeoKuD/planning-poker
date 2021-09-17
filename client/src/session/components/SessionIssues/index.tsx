import React, { FC } from 'react';
import SectionHeader from 'components/SectionHeader';
import { IssueCard } from 'components/Issue';
import { IssueData, ButtonTypes } from 'types/common-types';
import IssueInfo from 'components/IssueInfo';
import { Button } from 'components/Button';
import styles from './index.module.scss';

type SessionIssuesProps = {
  issues: IssueData[],
  modeMaster? : boolean, // false - player mode, true - master mode
}

const SessionIssues: FC<SessionIssuesProps> = ({ issues, modeMaster }) => {
  if (modeMaster) {
    // add create new issue button
  }
  const addNewIssue = (): void => {
    console.log('new issue added');
  };

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
        <Button onClick={addNewIssue} type={ButtonTypes.primary}>
          Create new issue
        </Button>
      </div>
      <IssueInfo />
    </div>
  );
};

export default SessionIssues;
