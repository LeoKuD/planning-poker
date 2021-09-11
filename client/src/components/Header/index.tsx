import React, { FC } from 'react';
import logo from 'assets/header-logo.svg';
import style from './index.module.scss';

const Header: FC = () => (
  <div className={style.header}>
    <img alt="logo" className={style.logo} src={logo} />
    <div className={style.blueLine} />
    <div className={style.greenLine} />
  </div>
);

export default Header;
