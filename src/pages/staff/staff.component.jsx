import React, { Fragment } from 'react';
import './staff.styles.scss';
import CardList from '../../components/cardList/cardList.component';

const Staff = () => {
  return (
    <Fragment>
      <section className='hero'>
        <div className='container'>
          <h1 className='title'>Staff Directory</h1>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet.
          </p>
        </div>
      </section>

      <section className='filter'>
        <div className='container'>
          <h3 className=' title'>Filter colleagues</h3>
          <div className='search'>
            <input type='text' placeholder='Search' />
            <i class='fas fa-search'></i>
          </div>
        </div>
      </section>

      <section className='cardList'>
        <div className='container'>
          <h3 className='title'>Showing 94 colleague(s)</h3>
          <span className='divider' />
          <CardList />
        </div>
      </section>
    </Fragment>
  );
};

export default Staff;
