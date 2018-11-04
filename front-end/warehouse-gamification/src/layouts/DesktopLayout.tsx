import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Avatar from '../components/Avatar';
import ProgressBar from '../components/ProgressBar';
import Stats from '../components/Stats';
import User from '../models/IUser';
import './DesktopLayout.scss';

const DesktopLayout = (props: {user: User, children: React.ReactNode}) => {
  return(
    <div className='desktop-layout'>
      <div className='upper-section'>
        <Avatar />
        <div className='upper-right-section'>
          <ProgressBar />
          <div className='player-info'>
            <h3>Gladiator</h3>
            <h2>Tom, lvl 22</h2>
          </div>
          <Stats user={props.user}/>
        </div>
      </div>
      <div className='bottom-section'>
        <div className='inventory-section'>
          {props.children}
        </div>
        <div className='quest-section'>
          quest
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: {user: User}) => {
  return {
    user: state.user 
  };
};

export default withRouter(connect(mapStateToProps)(DesktopLayout) as any);
