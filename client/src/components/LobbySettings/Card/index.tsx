import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './index.module.scss';

type CardProps = {
    edit?: boolean,
    cardScore: number | null,
    shortName: string,
}
type FormData = {
    'cardScore': number;
}

const Card: FC<CardProps> = ({ edit, cardScore, shortName }) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
    setShowInput(false);
  });

  return (
    <div className={style.card}>
      {/*
        if cardScore is number then short name "SP" is rendered, else renders string 'break'.
        if edit is true, that means we are in settings component and we can change value of a card.
      */}
      <div className={style.shortName_top}>
        {cardScore ? shortName : 'break'}
        {edit && (
        <div
          role="none"
          className={style.pencil}
          onClick={() => { setShowInput((prevState: boolean) => !prevState); }}
        >
          Pencil icon
        </div>
        ) }
      </div>

      {/*
        if cardScore was passed then a number is rendered in center of a card
        else, an icon of a coffe cup is rendered.
      */}
      <div className={style.cardScore}>
        {cardScore || 'coffee icon'}
        {showInput && (
          <div className={style.input}>
            <form onSubmit={onSubmit}>
              <input
                type="number"
                {...register('cardScore', {
                  maxLength: {
                    value: 2,
                    message: 'must be less than 100',
                  },
                })}
              />
            </form>
            <div className={style.error}>{errors.cardScore?.message}</div>
          </div>
        )}
      </div>

      <div className={style.shortName_bottom}>{cardScore ? shortName : 'break'}</div>
    </div>
  );
};

export default Card;
