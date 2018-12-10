import * as React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggle } from '../reducers/sidebarReducer';
import './Navigation.scss'; 
//import NavigationItem from './NavigationItem';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import * as logo from '../assets/Leanware.png';

const Navigation = (props : {toggled: boolean, children: any, toggle: ()=>{}}) => {
  const openSidebar = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    props.toggle(); 
  };
  //const preventPropagation = (event: React.MouseEvent<HTMLElement>) =>{
  //  event.stopPropagation(); 
  //};

  return (

    <div id='wrapper'>
      <div className='navigation'>
        <i className='fa fa-bars' onClick={openSidebar}/> 
        <img src={logo} />
      </div>
      
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          vertical
          visible={props.toggled}
          width='thin'
          >
          
          <Menu.Item as={Link} to='/'>
            <Icon name='home' />
            Home
          </Menu.Item>
      
          <Menu.Item as={Link} to='/inventory/menu'>
            <Icon name='archive' />
            Inventory
          </Menu.Item>
        
          <Menu.Item as={Link} to='/friends'>
            <Icon name='users' />
            Friends
          </Menu.Item>
        
          <Menu.Item as={Link} to='/settings'>
            <Icon name='cogs' />
            Settings
          </Menu.Item>
        
          <Menu.Item as={Link} to='/quests'>
            <Icon name='trophy' />
            Quests
          </Menu.Item>
         
        </Sidebar>

      <Sidebar.Pusher dimmed={props.toggled}>
        <Segment basic>
          {props.children}
        </Segment>
      </Sidebar.Pusher>
  
    </Sidebar.Pushable>
  </div>
  )

};

const mapStateToProps = (state : {sidebar: boolean}) => {
  return {
    toggled: state.sidebar 
  };
};

export default connect(mapStateToProps, {toggle})(Navigation as any);
