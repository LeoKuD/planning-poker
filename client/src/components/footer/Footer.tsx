import React, { FC } from 'react';
import s from './Footer.module.css';
import logo from '../../assets/img/rs_school_js.svg';

export const Footer: FC = () => {
  interface IgitHubLinks {
    name: string,
    link: string,
    id: number
  }
  const gitHubLinks : IgitHubLinks[] = [
    {
      name: 'github.com/LeoKuD',
      link: 'https://github.com/LeoKuD',
      id: 0,
    },
    {
      name: 'github.com/kastrubait',
      link: 'https://github.com/kastrubait',
      id: 1,
    },
    {
      name: 'github.com/kisaragi99',
      link: 'ttps://github.com/kisaragi99',
      id: 2,
    }];
  return (
    <footer className={s.footer}>
      <div className={s.footer_logo}><a href="https://rs.school/react/"><img src={logo} alt="Logo RSS" /></a></div>
      <div className={s.footer_text}>2021</div>
      <div className={s.footer_links}>
        <ul>
          {gitHubLinks.map((item : IgitHubLinks) => <li key={item.id}><a href={item.link}>{item.name}</a></li>)}
        </ul>
      </div>
    </footer>
  );
};
