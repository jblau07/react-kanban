import React from 'react';
import CardListItem from '../containers/CardListItem';

const CardList = ({ cards, status }) => {
  return (
    <div>
        {cards.filter(card => {
          return card.status.toLowerCase() === status
        })
        .map((card) => {
          return (
            <CardListItem
            key={card.id}
           {...card}
          />)
        }
        )
      }
    </div>
  )
}

export default CardList;