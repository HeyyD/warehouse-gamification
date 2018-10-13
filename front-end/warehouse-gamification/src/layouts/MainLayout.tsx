import * as React from 'react';
import ProgressCircle from '../components/ProgressCircle';
import Stats from '../components/Stats';
import './MainLayout.scss'; 

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <div className='avatar'>
        avatari
      </div>
      <div className='info'>
        <div className='name'>
          <h3>Gladiator</h3>
          <h2>Tom, lvl20</h2>
        </div>
        <Stats />
        <div className='quest'>
          hello
        </div>
        <ProgressCircle />
      </div>
    </div>
  );
};

export default MainLayout;
