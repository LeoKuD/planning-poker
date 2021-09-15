import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { IButton } from 'types/common-types';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

export const Button: FC<IButton> = ({
  onClick,
  children,
  disabled,
  type,
}: IButton) => {
  const buttonTypeClass = cx({
    button: true,
    [`${type}`]: true,
  });
  return (
    <button
      className={buttonTypeClass}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
