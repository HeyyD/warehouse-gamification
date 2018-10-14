import * as React from 'react';
import { connect } from 'react-redux';

import Avatar from '../Avatar';
import CurrentQuest from '../components/CurrentQuest';
import ProgressCircle from '../components/ProgressCircle';
import Stats from '../components/Stats';
import Quest from '../models/quest';
import User from '../models/user';
import './MainLayout.scss'; 

const MainLayout = ({user, quest}: {user: User, quest: Quest}) => {
  return (
    <div className='main-layout'>
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
    user: state.user,
    quest: state.quest
  };
};

export default connect(mapStateToProps)(MainLayout);
