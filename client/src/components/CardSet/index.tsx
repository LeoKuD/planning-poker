import React, { FC, useState } from 'react';
import plusIcon from 'assets/plus-icon.svg';
import SectionHeader from '../SectionHeader';
import style from './index.module.scss';
import Card from '../Card';

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
    <div className={style.cardSet}>
      <SectionHeader header="Add card values:" />
      <div className={style.cards}>
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
          <button onClick={onPlusBtnClick} type="button" className={style.plusCard}>
            <img src={plusIcon} alt="plusIcon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CardSet;
