import React, { FC } from 'react';
import { UserData } from 'types/common-types';
import classNames from 'classnames';
import style from './index.module.scss';

interface AvatarProps {
  userData: UserData,
  isSmall: boolean
}

const Avatar: FC<AvatarProps> = ({ userData, isSmall }) => {
  const { avatar, firstName, lastName } = userData;
  const avatarName = lastName ? firstName[0] + lastName[0] : firstName[0];
  const avatarClass = classNames({
    [style.avatarContainer]: true,
    [style.small]: isSmall,
  });
  return (
    <div
      className={avatarClass}
      style={{
        backgroundImage: `url(${avatar})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {!avatar && <span>{avatarName.toUpperCase()}</span>}
    </div>
  );
};

export default Avatar;
