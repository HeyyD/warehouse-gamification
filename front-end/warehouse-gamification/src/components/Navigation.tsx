import * as React from 'react'; 
import { connect } from 'react-redux';
import { toggle } from '../reducers/sidebarReducer';
import './Navigation.scss'; 
import NavigationItem from './NavigationItem';

const Navigation = ({toggled, toggle} : {toggled: boolean, toggle: ()=>{}}) => {
  const openSidebar = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    toggle(); 
  };
  const preventPropagation = (event: React.MouseEvent<HTMLElement>) =>{
    event.stopPropagation(); 
  };
  return (
    <div className='navigation'>
      <i className='fa fa-bars' onClick={openSidebar}/> 
      <div className='sidebar' 
        style={{display: toggled? 'inline-block' : 'none'}}
        onClick={preventPropagation}
      >
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

const mapStateToProps = (state : {sidebar: boolean}) => {
  return {
    toggled: state.sidebar 
  };
};

export default connect(mapStateToProps, {toggle})(Navigation);
