import { Line } from 'rc-progress';
import * as React from 'react';
import Quest from '../models/quest';
import './CurrentQuest.scss';

const CurrentQuest = ({quest}: {quest: Quest}) => {
  const { name, current, max } = quest;
  return(
    <div className='quest'>
      <h2> Current quest </h2>
      <span>{name}</span>
      <div className='line-container'>
        <Line 
          percent={20}
          strokeWidth={10}
          strokeColor="#eb9605"
          trailWidth={10}
        />
        <span>{current} / {max}</span>
      </div>
    </div>
  );
};

export default CurrentQuest;
