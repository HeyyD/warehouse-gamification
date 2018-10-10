import * as React from 'react'; 
import ProgressBar from '../components/ProgressBar'; 
import './MainLayout.scss';  

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <div className='avatar'>
        avatari
      </div>
      <div className='info'>
        <h3>Gladiator</h3>
        <h2>Tom, lvl20</h2>
        <ProgressBar />
      </div>
    </div>
  );
};

export default MainLayout;
