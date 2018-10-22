import * as React from 'react';
import './Stat.scss';

const Stat = (props: {icon: string, text: string, stat: number}) => {
  return(
    <div className='stat-container'>
      <div className='stat'> 
        <i className={props.icon} aria-hidden='true'/>
      </div>
      <div className='stat-info'>
        <label>{props.text}</label>
        <br/>
        <label>{props.stat}</label>
      </div>
    </div>
  );
};

export default Stat;
// fa fa-archive
