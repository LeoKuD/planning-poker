import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import coffeIcon from 'assets/icons/coffee.svg';
import style from './index.module.scss';

type CardProps = {
  edit?: boolean,
  cardScore: number | null,
  shortName: string | null,
  onClick?: () => void,
  isCardSelected?: boolean
}

type FormData = {
  'cardScore': number;
}

const Card: FC<CardProps> = ({
  edit,
  cardScore,
  shortName,
  onClick,
  isCardSelected,
}) => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
    setShowInput(false);
  });

  const onCardClick = ():void => {
    if (edit) {
      return;
    }
    if (onClick) {
      onClick();
      // onClick invokes a function that sends a card which was selected by player. (game mode)
    }
  };

  return (
    <main
      role="none"
      className={isCardSelected ? style.card_selected : style.card}
      onClick={onCardClick}
    >
      {/*
        if cardScore is number then short name "SP" is rendered, else renders string 'break'.
        if edit is true, that means we are in settings component and we can change value of a card.
      */}
      <div className={style.shortName_top}>

        <p>{cardScore ? shortName : 'break'}</p>

        {edit && (
        <IconButton
          className={style.pencil}
          onClick={() => { setShowInput((prevState: boolean) => !prevState); }}
        >
          <EditIcon />
        </IconButton>
        ) }
      </div>

      {/*
        if cardScore was passed then a number is rendered in center of a card
        else, an icon of a coffe cup is rendered.
      */}
      <div className={style.cardScore}>

        {showInput || cardScore || <img src={coffeIcon} alt="break" />}

        {showInput && (
          <>
            <form onSubmit={onSubmit}>
              <input
                className={style.input}
                type="number"
                min="1"
                {...register('cardScore', {
                  maxLength: {
                    value: 2,
                    message: 'from 1 - 100',
                  },
                })}
              />
            </form>
            <p className={style.error}>{errors.cardScore?.message}</p>
          </>
        )}
      </div>

      <div className={style.shortName_bottom}>
        <p>{cardScore ? shortName : 'break'}</p>
      </div>

    </main>
  );
};

export default Card;
