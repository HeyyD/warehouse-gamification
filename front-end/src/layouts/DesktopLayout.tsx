import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Avatar from '../components/Avatar';
import ProgressBar from '../components/ProgressBar';
import Inventory from '../components/Inventory';
import Stats from '../components/Stats';
import User from '../models/IUser';
import './DesktopLayout.scss';

const DesktopLayout = (
  props: {
    user: User, 
    children: React.ReactNode,
    location: {pathname: string},
    isReady: boolean 
  }) => {
  const pathname = props.location.pathname.toLowerCase();
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
          {pathname.startsWith('/inventory')? props.children : <Inventory />}
        </div>
        <div className='quest-section'>
          quest
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: {user: User, assets: {isReady: boolean}}) => {
  return {
    user: state.user,
    isReady: state.assets.isReady
  };
};

export default withRouter(connect(mapStateToProps)(DesktopLayout) as any);
