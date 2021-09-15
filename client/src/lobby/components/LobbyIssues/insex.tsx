import React, { FC } from 'react';
import { ButtonTypes, IssueData } from 'types/common-types';
import SectionHeader from 'components/SectionHeader';
import { IssueCard } from 'components/Issue';
import { Button } from 'components/Button';
// import AddIcon from '@material-ui/icons/Add';
import style from './index.module.scss';

interface IssuesProps {
  header: string
  issues: IssueData[];
}

const LobbyIssues: FC<IssuesProps> = ({ header, issues }) => {
  const createIssue = (): void => {
    console.log('The creation form must be open');
  };
  return (
    <>
      <SectionHeader header={header} />
      <section className={style.issuesContainer}>
        <ul className={style.issuesList}>
          {issues.map((issue: IssueData) => (
            <li>
              <IssueCard issueData={issue} />
            </li>
          ))}
        </ul>
        <Button type={ButtonTypes.primary} onClick={createIssue}>
          Create new Issue
          {/* <AddIcon /> */}
        </Button>
      </section>
    </>
  );
};

export default LobbyIssues;
