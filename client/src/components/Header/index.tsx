import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import logo from '../../assets/header-logo.svg';

const Header: FC = () => (
  <div className={style.header}>
    <img alt="logo" className={style.logo} src={logo} />
    <div className={style.blueLine}>
      <nav
        className="style.navContainer"
        style={{
          padding: '1em',
          color: '#fff',
        }}
      >
        <Link
          style={{
            padding: '0.5em',
            color: '#fff',
          }}
          to="/"
        >
          main
        </Link>
        <Link
          className="style.navLink"
          style={{
            padding: '0.5em',
            color: '#fff',
          }}
          to="game"
        >
          game
        </Link>
        <Link
          className="style.navLink"
          style={{
            padding: '0.5em',
            color: '#fff',
          }}
          to="lobby"
        >
          lobby
        </Link>
        <Link
          className="style.navLink"
          style={{
            padding: '0.5em',
            color: '#fff',
          }}
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
