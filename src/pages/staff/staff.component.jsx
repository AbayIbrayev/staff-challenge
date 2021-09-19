import React, { Fragment, useState, useEffect } from 'react';
import './staff.styles.scss';
import CardList from '../../components/cardList/cardList.component';
import Loader from '../../components/loader/loader.component';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loader, setLoader] = useState(false);

  const API = 'http://interview.dev.steinias.com/api/employees';

  useEffect(() => {
    function distanceToBirthday(date) {
      let currentDate = new Date();

      let birthday = new Date(date);
      birthday.setFullYear(currentDate.getFullYear());

      if (birthday - currentDate < 0) {
        birthday.setFullYear(currentDate.getFullYear() + 1);
      }

      return birthday;
    }

    function getUpcomingBirthdays(bdays) {
      return bdays
        .slice(0)
        .sort(
          (a, b) =>
            distanceToBirthday(a.birthday) - distanceToBirthday(b.birthday)
        );
    }

    async function fetchData() {
      setLoader(true);
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          const json = await response.json();
          setLoader(false);
          let sortedJson = getUpcomingBirthdays(json).map((obj) => ({
            ...obj,
            city: Math.floor(Math.random() * 4) + 1,
          }));
          // console.log(sortedJson);
          setStaff(sortedJson);
        }
      } catch (error) {
        console.log(error);
      }
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
          <h3 className='title'>
            Showing {staff ? staff.length : 0} colleague(s)
          </h3>
          <span className='divider' />
          {loader ? <Loader /> : <CardList staff={staff} />}
        </div>
      </section>
    </Fragment>
  );
};

export default Staff;
