import * as React from 'react';
import { connect } from 'react-redux';
import { setFalse } from '../reducers/sidebarReducer';
import './NavigationItem.scss';

const NavigationItem = (props: {text: string, icon: string, setFalse: ()=>{}}) => {
  return (
    <div className='navi-item' onClick={props.setFalse}>
      <i className={props.icon} />
      <span>{props.text}</span>
    </div>
  );
};

export default connect(null, {setFalse})(NavigationItem);
