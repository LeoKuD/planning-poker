import React, { FC } from 'react';
import { UserData } from 'types/common-types';

interface UserProps {
  userData: UserData
}

const User: FC<UserProps> = ({ userData }) => (
  <div>
    {userData.firstName}
  </div>
);

export default User;
