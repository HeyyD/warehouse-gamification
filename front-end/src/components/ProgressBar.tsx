import { Line } from 'rc-progress';
import * as React from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
  return(
    <div className='progressbar'>
      <Line 
        strokeWidth={3}
        trailWidth={3}
        strokeColor="#eb9605"
        trailColor="#d3d3d3"
        percent={20}
      />
    </div>
  );
};

export default ProgressBar;
