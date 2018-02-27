import React from 'react';
import CardListItem from './CardListItem';

const CardList = ({ cards }) => {
  return (
    <div>
        {cards.map((card) => {
          return (
            <CardListItem
            key={card.id}
            title={card.title}
            priority={card.priority}
            status={card.status}
            created_by={card.created_by}
            assigned_to={card.assigned_to}
          />)
        }
        )
      }
    </div>
  )
}

export default CardList;