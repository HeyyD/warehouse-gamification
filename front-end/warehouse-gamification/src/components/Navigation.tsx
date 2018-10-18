import * as React from 'react'; 
import './Navigation.scss'; 
import NavigationItem from './NavigationItem';

const Navigation = () => {
  return (
    <div className='navigation'>
      <i className='fa fa-bars' /> 
      <div className='sidebar'>
        <div className='sidebar-profile'>
          <img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' />
          <h2> Tom </h2>
        </div>
        <NavigationItem text='Settings' icon='fa fa-cog' />
        <NavigationItem text='Settings' icon='fa fa-cog' />
        <NavigationItem text='Settings' icon='fa fa-cog' />
      </div>
    </div>
  );
};

export default Navigation;
