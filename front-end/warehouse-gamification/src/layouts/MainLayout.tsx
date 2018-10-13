import * as React from 'react';
import { connect } from 'react-redux';
import ProgressCircle from '../components/ProgressCircle';
import Stats from '../components/Stats';
import User from '../models/user';
import './MainLayout.scss'; 

const MainLayout = ({user}: {user: User}) => {
  return (
    <div className='main-layout'>
      <div className='avatar'>
        avatari
      </div>
      <div className='info'>
        <div className='name'>
          <h3>{user.title}</h3>
          <h2>{user.name}, lvl{user.lvl}</h2>
        </div>
        <Stats user={user}/>
        <div className='quest'>
          hello
        </div>
        <ProgressCircle />
      </div>
    </div>
  );
};

const mapStateToProps = (state: {user: User}) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(MainLayout);
