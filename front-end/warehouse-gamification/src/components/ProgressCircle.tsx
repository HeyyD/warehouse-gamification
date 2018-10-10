import { Circle } from 'rc-progress';
import * as React from 'react'; 
import './ProgressBar.scss';

const ProgressCircle = () => {
  return(
    <div className='progressbar-container'>
    <Circle
      percent={20}
      strokeWidth={6}
      strokeColor="#eb9605"
      trailWidth={6}
      trailColor="#ffbf00"
    />
    <div><span>124 / 240xp</span></div>
    </div>
  );
};

export default ProgressCircle;
