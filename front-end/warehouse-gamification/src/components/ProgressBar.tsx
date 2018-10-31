import { Line } from 'rc-progress';
import * as React from 'react';

const ProgressBar = () => {
  return(
    <Line 
      strokeWidth={3}
      trailWidth={3}
      strokeColor="#eb9605"
      trailColor="#d3d3d3"
      percent={20}
    />
  );
};

export default ProgressBar;
