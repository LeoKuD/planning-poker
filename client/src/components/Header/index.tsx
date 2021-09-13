import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import logo from '../../assets/header-logo.svg';

const Header: FC = () => (
  <div className={style.header}>
    <img alt="logo" className={style.logo} src={logo} />
    <div className={style.blueLine}>
      <nav className={style.navContainer}>
        <Link
          className={style.navLink}
          to="/"
        >
          main
        </Link>
        <Link
          className={style.navLink}
          to="game"
        >
          game
        </Link>
        <Link
          className={style.navLink}
          to="lobby"
        >
          lobby
        </Link>
        <Link
          className={style.navLink}
          to="results"
        >
          results
        </Link>
      </nav>
    </div>
    <div className={style.greenLine} />
  </div>
);

export default Header;
