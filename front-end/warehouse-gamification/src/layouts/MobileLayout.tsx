import * as React from 'react';
import { connect } from 'react-redux';
import Avatar from '../components/Avatar';
import Navigation from '../components/Navigation';
import ProgressCircle from '../components/ProgressCircle';
import { setFalse } from '../reducers/sidebarReducer';
import './MobileLayout.scss'; 

const MobileLayout = (props: {setFalse: ()=>{}, children: React.ReactNode }) => {
    const { setFalse, children } = props;
    return (
      <div className='main-layout' onClick={setFalse}>
        <Navigation />
        <div className='avatar'>
          <Avatar />
        </div>
        <div className='content-wrapper'>
          <ProgressCircle />
          { children }
        </div>
      </div>
    );
  
};

export default connect(null,{setFalse})(MobileLayout);
