import React, { FC } from 'react';
import { IButton } from 'types/common-types';
import style from './index.module.scss';

export const Button: FC<IButton> = ({ onClick, children }: IButton) => (
  <button className={style.button} type="button" onClick={onClick}>
    {children}
  </button>
);
