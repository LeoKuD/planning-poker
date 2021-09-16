import React, { FC } from 'react';
import { getLobbyUsers } from 'api/mock-api.service';
import User from 'components/User';
import { UserData } from 'types/common-types';
import style from './index.module.scss';

interface SessionScoreProps {
  sessionId: string,
}
interface SessionScoreData {
  value: number | null,
  userId: string,
}

const SessionScore: FC<SessionScoreProps> = ({ sessionId }) => {
  const members = getLobbyUsers(sessionId);
  const userById = (userId: string): UserData | undefined => members.find((user) => user.id === userId);
  const testData = members.reduce((pre, curUser) => {
    const score: SessionScoreData = {
      value: null,
      userId: curUser.id,
    };
    pre.push(score);
    return pre;
  }, [] as SessionScoreData[]);

  return (
    <div className={style.scoreContent}>
      <div className={style.scoreHeader}>
        <span className={style.score}>Score:</span>
        <span className={style.players}>Players:</span>
      </div>
      <ul>
        {testData.map((item: SessionScoreData) => (
          <li className={style.scoreContent}>
            <span className={style.scoreResult}>
              {!item.value ? 'In progress' : item.value}
            </span>
            <User userData={userById(item.userId) as UserData} isSmall />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionScore;
