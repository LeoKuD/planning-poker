import React, { FC } from 'react';
import SessionHeader from 'components/SectionHeader';
import User from 'components/User';
import { UserData, ButtonTypes } from 'types/common-types';
import { Button } from 'components/Button';
import style from './index.module.scss';

type SessionInfoProps = {
    lobbyInfo: string,
    user: UserData,
    link: string,
    settingsMode?: boolean
}

const SessionInfo: FC<SessionInfoProps> = ({
  lobbyInfo = '', user, link, settingsMode,
}) => {
  const copyToClipboard = async (): Promise<void> => {
    await navigator.clipboard.writeText(link);
    alert('Link copied');
  };

  return (
    <div className={style.container}>
      <div className={style.container__header}>
        <SessionHeader header={lobbyInfo} />
      </div>
      <div className={style.container__user}>
        <label htmlFor="scramMaster">Scram Master:</label>
        <User userData={user} isSmall={false} />
      </div>
      {settingsMode
      && (
      <div className={style.container__copyControls}>
        <p>Link to Lobby:</p>
        <input className={style.container__link} type="text" value={link} id="linkInput" />
        <Button type={ButtonTypes.secondary} onClick={copyToClipboard}>Copy</Button>
      </div>
      )}
    </div>
  );
};

export default SessionInfo;
