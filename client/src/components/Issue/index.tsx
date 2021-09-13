import React, { FC, useState } from 'react';
import { IssuePriority, Issue, IssueData } from 'types/common-types';
import imgEdit from 'assets/img/issueEdit.png';
import imgDel from 'assets/img/issueDel.png';
import imgDelLobby from 'assets/img/issueDelLobby.png';
import styles from './index.module.scss';

export const IssueCard: FC<Issue & IssueData> = ({
  id = Date.now(),
  title = 'Title',
  link = 'http',
  priority = IssuePriority.low,
  modeMaster = false,
  masterSettingsMode = false,
}) => {
  const [current, setCurrent] = useState(false);
  const [editMode, setMode] = useState(masterSettingsMode);
  const actionIssue = (): void => {
    if (!editMode && modeMaster) {
      setCurrent(!current);
    }
  };

  return (
    <article
      onClick={actionIssue}
      onKeyPress={actionIssue}
      className={current ? styles.issue_activ : styles.issue}
      role="presentation"
    >
      <div className={styles.text}>
        <span className={styles.current_issue}>{current && 'CURRENT'}</span>
        <span className={styles.issue_name}>{title}</span>
        <span className={styles.issue_priority}>{priority}</span>
      </div>
      {modeMaster && (
        <div className={styles.issue_img}>
          <div className={editMode ? styles.master_mode : styles.del_issue}>
            {editMode ? (
              <>
                <img src={imgEdit} alt="Edit" />
                <img src={imgDel} alt="DELETE" />
              </>
            ) : (
              <img src={imgDelLobby} alt="DELETE" />
            )}
          </div>
        </div>
      )}
    </article>
  );
};
