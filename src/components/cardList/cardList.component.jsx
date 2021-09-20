import React from 'react';
import Card from '../card/card.component';
import './cardList.styles.scss';

const CardList = ({ searchResults }) => {
  return (
    <div className='cardList'>
      {searchResults.map((person) => (
        <Card person={person} key={person.id} />
      ))}
    </div>
  );
};

export default CardList;
