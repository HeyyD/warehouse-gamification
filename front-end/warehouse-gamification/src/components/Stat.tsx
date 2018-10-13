import * as React from 'react';
import './Stat.scss';

const Stat = () => {
  return(
    <div className='stat-container'>
      <div className='stat'> 
        <i className='fa fa-archive' aria-hidden='true'/>
      </div>
      <div className='stat-info'>
        <label>Boxes</label>
        <br/>
        <label>483</label>
      </div>
    </div>
  );
};

export default Stat;
