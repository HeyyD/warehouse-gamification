import * as React from 'react';
import './Stat.scss';

const Stat = ({icon, text, stat}: {icon: string, text: string, stat: number}) => {
  return(
    <div className='stat-container'>
      <div className='stat'> 
        <i className={icon} aria-hidden='true'/>
      </div>
      <div className='stat-info'>
        <label>{text}</label>
        <br/>
        <label>{stat}</label>
      </div>
    </div>
  );
};

export default Stat;
// fa fa-archive
