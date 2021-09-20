import React, { FC } from 'react';
import { UserData, UserRole } from 'types/index';
import Avatar from 'components/Avatar';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import BlockIcon from '@material-ui/icons/Block';
import style from './index.module.scss';

interface UserProps {
  userData: UserData,
  isSmall: boolean
}

const User: FC<UserProps> = ({ userData, isSmall }) => {
  const userName = ` ${userData.firstName} ${userData.lastName}`;
  const isYou = true;
  const showDeleteButton = isYou && userData.role === UserRole.dealer;
  const isYouText = 'IT\'S YOU';
  const userClass = classNames({
    [style.userContainer]: true,
    [style.smallContainer]: isSmall,
  });
  const fontClass = classNames({
    [style.nameFont]: true,
    [style.fontSmall]: isSmall,
  });
  const classes = makeStyles({
    closeIcon: {
      color: 'gray',
      position: 'absolute',
      right: 8,
      cursor: 'pointer',
    },
  })();
  const deleteUser = (): void => {
    console.log('delete user');
  };

  return (
    <div className={userClass}>
      <Avatar
        userData={userData}
        isSmall={isSmall}
      />
      <div className={style.nameContainer}>
        {isYou && <span><strong>{isYouText}</strong></span>}
        <span className={fontClass}>{userName}</span>
        <span>{userData.position}</span>
      </div>
      {!showDeleteButton && <BlockIcon className={classes.closeIcon} onClick={deleteUser} />}
    </div>
  );
};
export default User;
