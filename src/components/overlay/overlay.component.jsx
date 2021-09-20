import React from 'react';
import './overlay.component.scss';

import { useMediaQuery } from 'react-responsive';

const Overlay = ({ person, isOpen, setIsOpen }) => {
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

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div
      className={`overlay ${city === 1 ? 'overlay__orange' : ''} ${
        city === 2 ? 'overlay__blue' : ''
      } ${city === 3 ? 'overlay__purple' : ''} ${
        city === 4 ? 'overlay__green' : ''
      } ${isOpen ? 'overlay__open' : ''}`}
    >
      <div className='inner'>
        {city === 1 && <span className='city'>NYC</span>}
        {city === 2 && <span className='city'>SAN</span>}
        {city === 3 && <span className='city'>LDN</span>}
        {city === 4 && <span className='city'>MAN</span>}

        <button onClick={() => setIsOpen(false)}>
          <i className='fas fa-times'></i>
        </button>
        <div className='img' />

        <div className='content'>
          <div className='text'>
            <h3 className='title'>{name}</h3>
            <p className='subtitle'>{jobTitle}</p>
            <p className='description highlight'>{hireDate}</p>
            {!isMobile && (
              <p className='description'>
                Birthday:{' '}
                <span>
                  <i className='fas fa-birthday-cake'></i>{' '}
                  {showAge && `Turning ${'NUM'}`} on {birthday}
                </span>
              </p>
            )}
          </div>
          <div className='contacts'>
            <a href='mailto:'>
              <i className='fas fa-envelope'></i> {email}
            </a>
            <a href='tel:+'>
              <i className='fas fa-phone-alt'></i>
              {mobile}
            </a>
          </div>
          <div className='text'>
            <p className='description'>{jobDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
