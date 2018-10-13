import * as React from 'react';
import Stat from './Stat';
import './Stats.scss';

const Stats = () => {
  return (
    <div className='stats'>
      <h2> Stats </h2>
      <div className='stats-container'>
        <Stat icon='fa fa-archive' text='Boxes' stat={244} />
        <Stat icon='fa fa-archive' text='Boxes' stat={244} />
        <Stat icon='fa fa-archive' text='Boxes' stat={244} />
      </div>
    </div>
  );
};

export default Stats;
