import React from 'react';
import imgBig from '../../assets/images/imageBig.png';
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

  return (
    <div
      className={`card ${city === 1 ? 'card__orange' : ''} ${
        city === 2 ? 'card__blue' : ''
      } ${city === 3 ? 'card__purple' : ''} ${city === 4 ? 'card__green' : ''}`}
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
      <button>
        <i className='fas fa-ellipsis-h'></i>
      </button>
    </div>
  );
};

export default Card;
