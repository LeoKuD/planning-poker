import React, { FC } from 'react';
import style from './index.module.scss';
import logo from '../../assets/header-logo.svg';

const Header: FC = () => (
  <div className={style.header}>
    <img alt="logo" className={style.logo} src={logo} />
    <div className={style.blueLine} />
    <div className={style.greenLine} />
  </div>
);

export default Header;
