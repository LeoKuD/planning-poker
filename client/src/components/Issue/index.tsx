import React, { FC, useState } from 'react';
import { Issue } from 'types/common-types';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './index.module.scss';

interface IssueProps {
  issueData: Issue,
  modeMaster?: boolean,
  masterSettingsMode?: boolean,
}

export const IssueCard: FC<IssueProps> = ({
  issueData,
  modeMaster,
  masterSettingsMode,
  // id = Date.now(),
  // title = 'Title',
  // link = 'http',
  // priority = IssuePriority.low,
  // modeMaster = false,
  // masterSettingsMode = false,
}) => {
  const {
    title, priority,
  } = issueData;
  const [current, setCurrent] = useState(false);
  const [editMode, setMode] = useState(masterSettingsMode);
  const actionIssue = (): void => {
    if (!editMode && modeMaster) {
      setCurrent(!current);
    }
  };
  const issueClass = classNames.bind(styles)({
    [styles.issue]: true,
    [styles.active]: current,
  });
  return (
    <article className={issueClass}>
      <div
        onClick={actionIssue}
        onKeyPress={actionIssue}
        role="presentation"
        className={styles.text}
      >
        <span className={styles.current_issue}>{current && 'CURRENT'}</span>
        <span className={styles.issue_name}>{title}</span>
        <span className={styles.issue_priority}>{priority}</span>
      </div>
      {modeMaster && (
        <div className={styles.issue_img}>
          <div className={editMode ? styles.master_mode : styles.del_issue}>
            {editMode ? (
              <>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </>
            ) : (
              <IconButton aria-label="delete">
                <CloseIcon />
              </IconButton>
            )}
          </div>
        </div>
      )}
    </article>
  );
};
