import React, { FC } from 'react';
import s from './index.module.css';
import logo from '../../assets/header-logo.svg';

const Header: FC = () => {
  return (
    <>
      <div className={s.header}>
        <img className={s.logo} src={logo} />
        <div className={s.blueLine}/>
        <div className={s.greenLine}/>
      </div>
    </>
  )
};

export default Header;