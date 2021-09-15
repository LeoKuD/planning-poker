import React, { FC, useState, ChangeEvent } from 'react';
import { getLobbyIssues } from 'api/mock-api.service';
import CreateIcon from '@material-ui/icons/Create';
import style from './index.module.scss';

interface HeaderProps {
  sessionId: string,
  modeMaster: boolean
}

const SessionHeader: FC<HeaderProps> = ({ sessionId, modeMaster }) => {
  const [editMode, setMode] = useState(false);
  const issues = getLobbyIssues(sessionId);
  const issuesIdList = issues.reduce((pre, cur) => `${pre} ${cur.id},`, '(issues');
  const header = `Spring ${sessionId} ${issuesIdList})`;

  const addIdIssues = (): void => {
    setMode(!editMode);
  };
  const submitHandler = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(event.currentTarget.value);
  };
  return (
    <div className={style.header}>
      <h4>{header}</h4>
      {modeMaster && <CreateIcon onClick={addIdIssues} />}
      {editMode && (
      <div>
        <form onSubmit={submitHandler}>
          <input
            className={style.issueIdInput}
            type="text"
          />
          <input
            type="Submit"
          />
        </form>
      </div>
      )}
    </div>
  );
};

export default SessionHeader;
