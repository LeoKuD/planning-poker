import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/header-logo.svg';
import style from './index.module.scss';

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
