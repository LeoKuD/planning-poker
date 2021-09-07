import React, { FC, ReactElement } from 'react';
import s from './index.module.scss';

interface ModalProps {
    content: ReactElement
}

const Modal: FC<ModalProps> = ({ content }) => (
  <>
    <div className={s.modal}>
      {content}
    </div>
  </>
);

export default Modal;
