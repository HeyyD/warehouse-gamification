import * as React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../reducers/sidebarReducer';
import './Navigation.scss'; 
import NavigationItem from './NavigationItem';

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
        <div className='sidebar' style={props.toggled? {left: 0} : {left: -500}} onClick={preventPropagation}>
          <div className='sidebar-profile'>
            <img src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' />
            <h2> Tom </h2>
          </div>
          <Link to='/'><NavigationItem text='Home' icon='fa fa-home' /></Link>
          <Link to='/inventory/menu'><NavigationItem text='Inventory' icon='fa fa-archive' /></Link>
          <Link to='/friends'><NavigationItem text='Friends' icon='fa fa-user' /></Link>
          <Link to='/settings'><NavigationItem text='Settings' icon='fa fa-cog' /></Link>
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
