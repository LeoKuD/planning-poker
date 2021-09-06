import React, { FC, ReactElement } from 'react';
import s from './index.module.css';

interface ModalProps {
    content: ReactElement
};

const Modal: FC<ModalProps> = ({ content }) => {
  return (
    <>
      <div className={s.modal}>
          {content}
      </div>
    </>
  )
};

export default Modal;