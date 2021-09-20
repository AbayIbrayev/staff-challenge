import React, { Fragment, useState } from 'react';

import Overlay from '../overlay/overlay.component';

import imgSmall from '../../assets/images/imageSmall.png';

import './card.styles.scss';

const Card = ({ person }) => {
  const {
    hireDate,
    jobDescription,
    email,
    name,
    birthday,
    jobTitle,
    mobile,
    showAge,
    city,
  } = person;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <div
        className={`card ${city === 1 ? 'card__orange' : ''} ${
          city === 2 ? 'card__blue' : ''
        } ${city === 3 ? 'card__purple' : ''} ${
          city === 4 ? 'card__green' : ''
        }`}
      >
        {city === 1 && <span className='city'>NYC</span>}
        {city === 2 && <span className='city'>SAN</span>}
        {city === 3 && <span className='city'>LDN</span>}
        {city === 4 && <span className='city'>MAN</span>}

        <div className='content'>
          <img src={imgSmall} alt={name} />
          <div className='text'>
            <h3 className='title'>{name}</h3>
            <p className='subtitle'>{jobTitle}</p>
          </div>
        </div>
        <button onClick={() => setIsOpen(true)}>
          <i className='fas fa-ellipsis-h'></i>
        </button>
      </div>

      <Overlay person={person} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Fragment>
  );
};

export default Card;
