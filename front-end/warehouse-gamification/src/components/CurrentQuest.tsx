import { Line } from 'rc-progress';
import * as React from 'react';
import './CurrentQuest.scss';

const CurrentQuest = () => {
  return(
    <div className='quest'>
      <h2> Current quest </h2>
      <span>Defeat the box dragon!</span>
      <Line 
        percent={20}
        strokeWidth={8}
        strokeColor="#eb9605"
        trailWidth={8}
      />
    </div>
  );
};

export default CurrentQuest;
