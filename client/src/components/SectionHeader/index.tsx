import React, { FC } from 'react';
import style from './index.module.scss';

interface HeaderProps {
  header: string
}

const SectionHeader: FC<HeaderProps> = ({ header }) => (
  <div className={style.header}>
    <h4>{header}</h4>
  </div>
);

export default SectionHeader;
