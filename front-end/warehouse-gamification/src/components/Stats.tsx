import * as React from 'react';
import User from '../models/IUser';
import { connect } from 'react-redux';
import Stat from './Stat';
import './Stats.scss';

const Stats = (props: {user: User, isMobile: boolean}) => {
  return (
    <div className='stats'>
    {props.isMobile? <h2>Lifetime stats</h2> : null }
      <div className='stats-container'>
        <Stat icon='fa fa-archive' text='Boxes' stat={props.user.boxesPicked} />
        <Stat icon='fa fa-question' text='Quests' stat={props.user.questsCompleted} />
        <Stat icon='fa fa-gamepad' text='XP' stat={props.user.xp} />
      </div>
    </div>
  );
};
const mapStateToProps = (state: {isMobile: boolean}) => {
  return {
    isMobile: state.isMobile 
  };
};

export default connect(mapStateToProps)( Stats );
