import * as React from 'react';
import User from '../models/IUser';
import Stat from './Stat';
import './Stats.scss';

const Stats = (props: {user: User}) => {
  const isMobile = window.innerWidth <= 500;
  return (
    <div className='stats'>
    {isMobile? <h2>Lifetime stats</h2> : null }
      <div className='stats-container'>
        <Stat icon='fa fa-archive' text='Boxes' stat={props.user.boxesPicked} />
        <Stat icon='fa fa-question' text='Quests' stat={props.user.questsCompleted} />
        <Stat icon='fa fa-gamepad' text='XP' stat={props.user.xp} />
      </div>
    </div>
  );
};

export default Stats;
