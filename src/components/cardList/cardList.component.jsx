import React from 'react';
import Card from '../card/card.component';
import './cardList.styles.scss';

const CardList = ({ staff }) => {
  return (
    <div className='cardList'>
      {staff.map((person) => (
        <Card person={person} key={person.id} />
      ))}
    </div>
  );
};

export default CardList;
