import * as React from 'react'; 
import './Navigation.scss'; 

const Navigation = () => {
  return (
    <div className='navigation'>
      <i className='fa fa-bars' /> 
      <div className='sidebar'>
        <div className='navi-item'>Navi Item</div>
        <div className='navi-item'>Navi Item</div>
        <div className='navi-item'>Navi Item</div>
      </div>
    </div>
  );
};

export default Navigation;
