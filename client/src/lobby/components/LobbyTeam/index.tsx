import SectionHeader from 'components/SectionHeader';
import User from 'components/User';
import React, { FC } from 'react';
import { UserData } from 'types/common-types';
import style from './index.module.scss';

interface TeamProps {
  header: string
  members: UserData[];
}

const LobbyTeam: FC<TeamProps> = ({ header, members }) => (
  <>
    <SectionHeader header={header} />
    <div className={style.lobby__content}>
      {members.map((member: UserData) => (
        <User userData={member} isSmall />
      ))}
    </div>
  </>
);

export default LobbyTeam;
