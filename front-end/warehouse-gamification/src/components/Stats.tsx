import * as React from 'react';
import User from '../models/user';
import Stat from './Stat';
import './Stats.scss';

const Stats = ({user}: {user: User}) => {
  return (
    <div className='stats'>
      <h2>Lifetime stats</h2>
      <div className='stats-container'>
        <Stat icon='fa fa-archive' text='Boxes' stat={user.boxesPicked} />
        <Stat icon='fa fa-question' text='Quests' stat={user.questsCompleted} />
        <Stat icon='fa fa-gamepad' text='XP' stat={user.xp} />
      </div>
    </div>
  );
};

export default Stats;
