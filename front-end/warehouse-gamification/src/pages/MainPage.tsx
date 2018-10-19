import * as React from 'react';
import { connect } from 'react-redux';
import CurrentQuest from '../components/CurrentQuest';
import Stats from '../components/Stats';
import Quest from '../models/quest';
import User from '../models/user';
import './MainPage.scss';

const MainPage = ({user, quest}: {user: User, quest: Quest}) => {
  return(
    <React.Fragment>
      <div className='info'>
        <div className='name'>
          <h3>{user.title}</h3>
          <h2>{user.name}, lvl{user.lvl}</h2>
        </div>
        <Stats user={user}/>
        <CurrentQuest quest={quest}/>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: {user: {}, quest:{}}) => {
  return {
    quest: state.quest,
    user: state.user
  };
};

export default connect(mapStateToProps)(MainPage);
