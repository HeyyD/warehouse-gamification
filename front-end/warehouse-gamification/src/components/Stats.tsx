import * as React from 'react';
import Stat from './Stat';
import './Stats.scss';

const Stats = () => {
  return (
    <div className='stats'>
      <h2> Stats </h2>
      <div className='stats-container'>
        <Stat/>
        <Stat/>
        <Stat/>
      </div>
    </div>
  );
};

export default Stats;
