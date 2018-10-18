import * as React from 'react';
import './NavigationItem.scss';

const NavigationItem = ({text, icon}: {text: string, icon: string}) => {
  return (
    <div className='navi-item'>
      <i className={icon} />
      <span>{text}</span>
    </div>
  );
};

export default NavigationItem;
