import React, { FC, useState } from 'react';
import plusIcon from 'assets/icons/plus-icon.svg';
import SectionHeader from 'components/SectionHeader';
import Card from 'components/Card';
import style from './index.module.scss';

type Cards = {
  id: string,
  cardScore: null | number,
  shortName: string,
};

type CardSetProps = {
  cards: Array<Cards>,
  edit?: boolean
}

const CardSet: FC<CardSetProps> = ({ cards, edit = false }) => {
  const [selectedCard, setSelectedCard] = useState<string>('');

  const onCardClick = (cardId: string): void => {
    if (edit) {
      return;
    }
    setSelectedCard(cardId);
    console.log(cardId);
    // set and send selected card id (by player only in game mode)
  };

  const onPlusBtnClick = (): void => {
    console.log('add card');
    // add new card (by scram master only in edit mode)
  };

  return (
    <>
      <SectionHeader header="Add card values:" />
      <div className={style.cardSet}>
        <div className={style.cardSet__cards}>
          {cards.map((card) => (
            <Card
              edit={edit}
              key={card.id}
              cardScore={card.cardScore}
              shortName={card.shortName}
              isCardSelected={selectedCard === card.id}
              onClick={() => { onCardClick(card.id); }}
            />
          ))}
          {edit && (
          <button onClick={onPlusBtnClick} type="button" className={style.cardSet__plusCard}>
            <img src={plusIcon} alt="plusIcon" />
          </button>
          )}
        </div>
      </div>
    </>

  );
};

export default CardSet;
