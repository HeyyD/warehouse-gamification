import * as React from 'react'; 
import ProgressCircle from '../components/ProgressCircle'; 
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
        <div className='stats'>
          hello
        </div>
        <div className='quest'>
          hello
        </div>
        <ProgressCircle />
      </div>
    </div>
  );
};

export default MainLayout;
