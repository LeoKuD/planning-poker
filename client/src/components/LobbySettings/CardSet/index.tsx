import React, { FC } from 'react';
import style from './index.module.scss';

type CardSetProps = {

}

const CardSet: FC<CardSetProps> = () => (
  <div className={style.cardSet}>
    Cards array
  </div>
);

export default CardSet;
