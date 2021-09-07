import React, { FC } from 'react';
import s from './index.module.scss';
import logo from '../../assets/header-logo.svg';

const Header: FC = () => (
  <>
    <div className={s.header}>
      <img alt="logo" className={s.logo} src={logo} />
      <div className={s.blueLine} />
      <div className={s.greenLine} />
    </div>
  </>
);

export default Header;
