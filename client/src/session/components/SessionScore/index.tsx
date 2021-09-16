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
      <ul>
        {testData.map((item: SessionScoreData) => (
          <li className={style.scoreContent}>
            <span className={style.score}>
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
