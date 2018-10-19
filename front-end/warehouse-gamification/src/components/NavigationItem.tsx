import * as React from 'react';
import { connect } from 'react-redux';
import { setFalse } from '../reducers/sidebarReducer';
import './NavigationItem.scss';

const NavigationItem = ({text, icon, setFalse}: {text: string, icon: string, setFalse: ()=>{}}) => {
  return (
    <div className='navi-item' onClick={setFalse}>
      <i className={icon} />
      <span>{text}</span>
    </div>
  );
};

export default connect(null, {setFalse})(NavigationItem);
