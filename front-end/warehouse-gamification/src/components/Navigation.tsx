import * as React from 'react'; 
import posed from 'react-pose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../reducers/sidebarReducer';
import './Navigation.scss'; 
import NavigationItem from './NavigationItem';

const Sidebar = posed.div({
  hidden: { left: -500 },
  visible: { left: 0}
});

const Navigation = (props : {toggled: boolean, toggle: ()=>{}}) => {
  const openSidebar = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    props.toggle(); 
  };
  const preventPropagation = (event: React.MouseEvent<HTMLElement>) =>{
    event.stopPropagation(); 
  };
  return (
    <div className='navigation'>
      <i className='fa fa-bars' onClick={openSidebar}/> 
        <Sidebar className='sidebar' pose={props.toggled ? 'visible' : 'hidden'} onClick={preventPropagation}>
          <div className='sidebar-profile'>
            <img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' />
            <h2> Tom </h2>
          </div>
          <Link to='/'><NavigationItem text='Home' icon='fa fa-home' /></Link>
          <Link to='/inventory/menu'><NavigationItem text='Inventory' icon='fa fa-archive' /></Link>
          <Link to='/settings'><NavigationItem text='Settings' icon='fa fa-cog' /></Link>
        </Sidebar>
    </div>
  );
};

const mapStateToProps = (state : {sidebar: boolean}) => {
  return {
    toggled: state.sidebar 
  };
};

export default connect(mapStateToProps, {toggle})(Navigation);
