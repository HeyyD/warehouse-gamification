import * as React from 'react';
import { connect } from 'react-redux';

import Avatar from '../components/Avatar';
import CurrentQuest from '../components/CurrentQuest';
import Navigation from '../components/Navigation';
import ProgressCircle from '../components/ProgressCircle';
import Stats from '../components/Stats';
import Quest from '../models/quest';
import User from '../models/user';
import './MainLayout.scss'; 

const MainLayout = ({user, quest}: {user: User, quest: Quest}) => {
  return (
    <div className='main-layout'>
      <Navigation />
      <div className='avatar'>
        <Avatar />
      </div>
      <div className='info'>
        <div className='name'>
          <h3>{user.title}</h3>
          <h2>{user.name}, lvl{user.lvl}</h2>
        </div>
        <Stats user={user}/>
        <CurrentQuest quest={quest}/>
        <ProgressCircle />
      </div>
    </div>
  );
};

const mapStateToProps = (state: {user: User, quest: Quest}) => {
  return {
    quest: state.quest,
    user: state.user
  };
};

export default connect(mapStateToProps)(MainLayout);
