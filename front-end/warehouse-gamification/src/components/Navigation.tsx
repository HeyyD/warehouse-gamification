import * as React from 'react'; 
import './Navigation.scss'; 
import NavigationItem from './NavigationItem';

const Navigation = () => {
  return (
    <div className='navigation'>
      <i className='fa fa-bars' /> 
      <div className='sidebar'>
        <NavigationItem text='Settings' />
        <NavigationItem text='Settings' />
        <NavigationItem text='Settings' />
      </div>
    </div>
  );
};

export default Navigation;
