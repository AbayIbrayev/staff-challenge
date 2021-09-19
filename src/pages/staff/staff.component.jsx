import React, { Fragment, useState, useEffect } from 'react';
import './staff.styles.scss';
import CardList from '../../components/cardList/cardList.component';

const Staff = () => {
  const [staff, setStaff] = useState([]);

  const API = 'http://interview.dev.steinias.com/api/employees';

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const json = await response.json();
      console.log(json);
    }
    fetchData();
  }, []);

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
            <i className='fas fa-search'></i>
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
