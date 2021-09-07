import React, { FC, ReactElement } from 'react';
import style from './index.module.scss';

interface ModalProps {
    content: ReactElement
}

const Modal: FC<ModalProps> = ({ content }) => (
  <div className={style.modal}>
    {content}
  </div>
);

export default Modal;
