import * as React from 'react';
import './NavigationItem.scss';

const NavigationItem = ({text}: {text: string}) => {
  return (
    <div className='navi-item'>
      {text}
    </div>
  );
};

export default NavigationItem;
