import React, { FC } from 'react';
import logo from 'assets/images/rs_school_js.svg';
import styles from './index.module.scss';

const Footer: FC = () => {
  const gitHubNames: string[] = ['LeoKuD', 'kastrubait', 'kisaragi99'];
  return (
    <footer className={styles.footer}>
      <figure className={styles.footer_logo}>
        <a href="https://rs.school/react/">
          <img src={logo} alt="Logo RSS" />
        </a>
      </figure>
      <p className={styles.footer_text}>@ 2021</p>
      <nav className={styles.footer_links}>
        <ul>
          {gitHubNames.map((item: string) => (
            <li key={item}>
              <a href={`https://github.com/${item}`}>
                github.com/
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
