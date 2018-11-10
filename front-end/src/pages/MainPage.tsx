import * as React from 'react';
import { connect } from 'react-redux';
import CurrentQuest from '../components/CurrentQuest';
import Stats from '../components/Stats';
import Quest from '../models/quest';
import IUser from '../models/IUser';
import './MainPage.scss';

const MainPage = (props: {user: IUser, quest: Quest}) => {
  return(
    <React.Fragment>
      <div className='info'>
        <div className='name'>
          <h3>{props.user.title}</h3>
          <h2>{props.user.name}, lvl{props.user.lvl}</h2>
        </div>
        <Stats user={props.user}/>
        <CurrentQuest quest={props.quest}/>
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